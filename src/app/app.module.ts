import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatBadgeModule } from '@angular/material/badge'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AliasComponent } from './components/alias/alias.component';
import { ConfigComponent } from 'src/app/components/config/config.component';
import { CreateReportComponent } from 'src/app/components/create-report/create-report.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { LoginComponent } from 'src/app/components/login/login.component';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { ReportListComponent } from 'src/app/components/report-list/report-list.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { SplashComponent } from './components/splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    AliasComponent,
    ConfigComponent,
    CreateReportComponent,
    LoginComponent,
    LogoComponent,
    ReportListComponent,
    SplashComponent,
    // LiveReportComponent   
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgxPaginationModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
