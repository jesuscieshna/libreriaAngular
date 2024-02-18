import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page.component';
import { PagesModule } from './pages/pages.module';
import { ComponentsComponent } from './components/components.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BarraCierreComponent } from './components/barra-cierre/barra-cierre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    PageNotFoundComponent,
    //BarraCierreComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
