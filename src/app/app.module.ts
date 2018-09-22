import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing';

// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';
import { ErrorHandlerService } from './services/errorhandler/error-handler.service';
import { GenericHttpService } from './services/generichttp/generic-http.service';
import { CoinMarketCapService } from './services/coinmarketcap/coinmarketcap.service';
import { HttpClientModule, HttpClient, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './services/data/data.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProxyInterceptor } from './services/proxy/proxy-interceptor.service';
import { XBitApiService } from './services/xbitapi/xbit-api.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { CookieService } from './services/cookie/cookie.service';
import { AuthenticationInterceptor } from './services/authentication/authentication-interceptor.service';


// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    routing,
    ToastrModule.forRoot()
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,
    ErrorHandlerService,
    GenericHttpService,
    CoinMarketCapService,
    HttpClient,
    DataService,
    XBitApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProxyInterceptor,
      multi: true
    },
    ToastrService,
    AuthenticationService,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ]
})

export class AppModule {

  constructor(public appState: AppState) {
  }
}CoinMarketCapService
