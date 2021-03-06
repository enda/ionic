import { Component, NgModule } from '@angular/core';
import { Config, IonicModule, NavController, NavParams, Platform } from 'ionic-angular';

var PAGE_NUM = 2;


@Component({
  templateUrl: 'main.html'
})
export class ApiDemoPage {
  constructor(public navCtrl: NavController) {}

  push() {
    this.navCtrl.push(PushPage);
  }
}

@Component({
  templateUrl: "page.html"
})
export class PushPage {
  pageNum = PAGE_NUM;

  constructor(public navCtrl: NavController) {}

  push() {
    PAGE_NUM++;
    this.navCtrl.push(PushPage);
  }

  pop() {
    if (PAGE_NUM > 2) {
      PAGE_NUM--;
    }
    this.navCtrl.pop();
  }
}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class ApiDemoApp {
  root = ApiDemoPage;
}

@NgModule({
  declarations: [
    PushPage,
    ApiDemoApp,
    ApiDemoPage
  ],
  imports: [
    IonicModule.forRoot(ApiDemoApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ApiDemoPage
  ]
})
export class AppModule {}
