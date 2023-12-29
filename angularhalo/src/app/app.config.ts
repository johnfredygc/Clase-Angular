import { ApplicationConfig } from '@angular/core';
import { ExtraOptions, provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: "enabled"
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
