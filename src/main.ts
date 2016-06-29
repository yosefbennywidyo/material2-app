import {enableProdMode, coreBootstrap, ReflectiveInjector} from '@angular/core';
import {environment} from './app/';
import {BROWSER_APP_PROVIDERS, browserPlatform} from '@angular/platform-browser';
import {HTTP_PROVIDERS} from '@angular/http';
import {Material2AppAppComponentNgFactory} from './app/material2-app.component.ngfactory';


if (environment.production) {
  enableProdMode();
}

let providers = [
  BROWSER_APP_PROVIDERS,
];

const appInjector = ReflectiveInjector.resolveAndCreate(providers, browserPlatform().injector);
coreBootstrap(Material2AppAppComponentNgFactory, appInjector);
