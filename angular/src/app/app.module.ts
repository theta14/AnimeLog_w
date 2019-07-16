import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentTypeInterceptor } from 'src/app/interceptors/content.type.interceptor';
import { SafeHtml } from 'src/app/pipes/safeHtml';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatIconModule,
  MatRadioModule,
  MatSelectModule,
  MatDialogModule,
  MatAutocompleteModule
} from '@angular/material';

import { TvaService } from './services/tva.service';
import { MovieService } from './services/movie.service';
import { WatchingService } from './services/watching.service';
import { SearchService } from './services/search.service';

import { HomeComponent } from './components/home/home.component';
import { TvaComponent } from './components/tva/tva.component';
import { MovieComponent } from './components/movie/movie.component';
import { WatchingComponent } from './components/watching/watching.component';
import { PlanComponent } from './components/plan/plan.component';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';
import { InputDialogComponent } from './components/input-dialog/input-dialog.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tva', component: TvaComponent },
  { path: 'tva/:_id/:series/:sequence', component: TvaComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'movie/:_id/:series/:sequence', component: MovieComponent },
  { path: 'watching', component: WatchingComponent },
  { path: 'plan', component: PlanComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SafeHtml,
    HomeComponent,
    TvaComponent,
    MovieComponent,
    WatchingComponent,
    PlanComponent,
    SearchDialogComponent,
    InputDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      onSameUrlNavigation: 'reload'
    }),
    HttpClientModule,
    NgFlashMessagesModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled'
    }),

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatAutocompleteModule
  ],
  exports: [
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatAutocompleteModule
  ],
  entryComponents: [
    SearchDialogComponent,
    InputDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ContentTypeInterceptor, multi: true },
    // { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} },
    TvaService,
    MovieService,
    WatchingService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
