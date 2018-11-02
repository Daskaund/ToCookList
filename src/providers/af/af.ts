import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/storage";
import {map} from "rxjs/operators";

@Injectable()
export class AfProvider {

  constructor(private db: AngularFireDatabase, private afStorage: AngularFireStorage) {


  }

  getFiles() {
    let ref = this.db.list('files');

    return ref.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    // return ref.snapshotChanges().pipe(
    //   map(changes => {
    //     return changes.map(a => {
    //       const val = a.payload.val();
    //       const id = a.payload.key;
    //       return {id, ...val };
    //     })
    //   })
    // );
  }

  uploadToStorage(information): AngularFireUploadTask {
    let newName = `${new Date().getTime()}.txt`;

    return this.afStorage.ref(`files/${newName}`).putString(information);
  }

  storeInfoToDatabase(metainfo) {
    let toSave = {
      created: metainfo.timeCreated,
      // url: metainfo.downloadURLs[0],
      fullPath: metainfo.fullPath,
      contentType: metainfo.contentType
    };
    return this.db.list('files').push(toSave);
  }

  deleteFile(file){
    let key = file.key;
    let storagePath = file.fullPath;

    let ref = this.db.list('files');

    ref.remove(key);
    return this.afStorage.ref(storagePath).delete();
  }
}
