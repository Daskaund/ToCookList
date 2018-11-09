import { Component } from '@angular/core';
import {AlertController, NavController, ToastController} from 'ionic-angular';
import {AfProvider} from "../../providers/af/af";
import {Observable} from "rxjs/Observable";
import {InAppBrowser} from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  files: Observable<any[]>;

  constructor(private iab: InAppBrowser, public navCtrl: NavController, private afProvider: AfProvider, private alertCtrl: AlertController, private toastCtrl: ToastController) {
    this.files = this.afProvider.getFiles('recipe/');
  }

  addFile() {
    let inputAlert = this.alertCtrl.create({
      title: 'Store new information',
      inputs: [
        {
          name: 'info',
          placeholder: 'Lorem ipsum dolor...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Store',
          handler: data => {
            this.uploadInformation(data.info);
          }
        }
      ]
    });
    inputAlert.present();
  }

  uploadInformation(text) {
    let upload = this.afProvider.uploadToStorage(text);

    // Perhaps this syntax might change, it's no error here!
    upload.then().then(res => {
      this.afProvider.storeInfoToDatabase(res.metadata).then(() => {
        let toast = this.toastCtrl.create({
          message: 'New File added!',
          duration: 3000
        });
        toast.present();
      });
    });
  }

  deleteFile(file) {
    this.afProvider.deleteFile(file).subscribe(() => {
      let toast = this.toastCtrl.create({
        message: 'File removed!',
        duration: 3000
      });
      toast.present();
    });
  }

  viewFile(event: any){
    let target = event.path[3];
    target.childNodes.forEach(function(e){
      if(e.classList!=undefined){
        if(e.classList.contains("hide")){
          e.classList.remove("hide");
          e.classList.add("triggered");
        } else if (e.classList.contains("triggered")){
          e.classList.remove("triggered");
          e.classList.add("hide");
        }
      }
    });
  }
}
