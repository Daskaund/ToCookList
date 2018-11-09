import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/storage";
import "rxjs-compat/add/operator/map";
import * as firebase from "firebase";

@Injectable()
export class AfProvider {

  constructor(private db: AngularFireDatabase, private afStorage: AngularFireStorage) {

  }

  getFiles(path) {
    let ref = this.db.list(path);

    return ref.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  //probablement devenu obsolète
  uploadToStorage(information): AngularFireUploadTask {
    let newName = `${new Date().getTime()}.txt`;
    // let newName = `${information}.txt`;

    return this.afStorage.ref(`files/${newName}`).putString(information);
  }

  //probablement devenu obsolète
  storeInfoToDatabase(metainfo) {
    let toSave = {
      created: metainfo.timeCreated,
      // url: metainfo.nativeURL,
      fullPath: metainfo.fullPath,
      contentType: metainfo.contentType
    };
    // let toSave = metainfo;
    console.log("toSave: ", toSave);
    return this.db.list('files').push(toSave);
  }

  uploadInformation(path, data) {
    if (path==undefined) path = "whoops/";
    firebase.database().ref(path).push(data);
  }

  deleteFile(file){
    let key = file.key;
    let storagePath = file.fullPath;

    let ref = this.db.list('files');

    ref.remove(key);
    return this.afStorage.ref(storagePath).delete();
  }
}
