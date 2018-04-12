import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {setUpLocationSync} from '@angular/router/upgrade';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  const upgrade = (<any>ref.instance).upgrade;
  upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
  setUpLocationSync(upgrade);
});
