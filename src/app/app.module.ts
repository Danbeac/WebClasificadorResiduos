import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ClasificadorResiduosModule } from './pages/public/pages/clasificador-residuos/clasificador-residuos.module';
import { NotificationModule } from './services/notification/notification.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClasificadorResiduosModule
  ],
  providers: [
    provideAnimationsAsync(),
    importProvidersFrom(
      NotificationModule.forRoot()
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
