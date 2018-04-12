import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static'; // for running hybrid application inside angular v5


import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
declare var angular: any;

angular.module('myApp')
  .directive(
    'app-root',
    downgradeComponent({component: AppComponent})
);


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [
    AppComponent
  ],
  providers: [],
 // bootstrap: [AppComponent] // removed for upgrade module
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
  }
}
