import {
  mergeApplicationConfig,
  ApplicationConfig,
} from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor() {}
}

export class ConfigService {}

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideServerRouting(serverRoutes)],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
