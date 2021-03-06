import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static'; // for running hybrid application inside angular v5
import { AppRoutingModule } from './app-routing.module';
import {UrlHandlingStrategy} from '@angular/router';

import { AppComponent } from './app.component';

import { DemoComponent } from './demo/demo.component';
import { NgtempComponent } from './ngtemp/ngtemp.component';
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    console.log('S', url);
     return url.toString().startsWith('/demo') || url.toString().startsWith('/dummy') || url.toString() === '/';
 }
  extract(url) {
    console.log('E', url);
    return url;
  }
  merge(url, whole) {
    console.log('M', url, 'W', whole);
    return url;
  }
}


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NgtempComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    AppRoutingModule,
  ],
  providers: [{ provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }],
  bootstrap: [AppComponent] // removed for upgrade module
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  // ngDoBootstrap() {
  //   this.upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
  // }
}
