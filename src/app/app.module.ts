import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { ComponentsModule } from './components/components.module'
import { SafePipe } from './pipes/safe/safe.pipe'

@NgModule({
	declarations: [AppComponent, SafePipe],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		ComponentsModule,
	],
	providers: [
		StatusBar,
		SplashScreen,
		HttpClient,
		Geolocation,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
	],
	exports: [
		SafePipe,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
