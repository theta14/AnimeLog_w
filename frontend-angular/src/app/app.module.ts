import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentTypeInterceptor } from 'src/app/interceptors/content.type.interceptor';
import { SafeHtml } from 'src/app/pipes/safe.html';
import { SafeUrl } from 'src/app/pipes/safe.url';

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
  MatAutocompleteModule,
  MatCheckboxModule,
  MatPaginatorModule
} from '@angular/material';

import { TvaService } from './services/tva.service';
import { MovieService } from './services/movie.service';
import { WatchingService } from './services/watching.service';
import { SearchService } from './services/search.service';
import { PlanService } from './services/plan.service';

import { HomeComponent } from './components/home/home.component';
import { TvaComponent } from './components/tva/tva.component';
import { MovieComponent } from './components/movie/movie.component';
import { WatchingComponent } from './components/watching/watching.component';
import { PlanComponent } from './components/plan/plan.component';
import { NoPageComponent } from './components/no-page/no-page.component';

import { SearchDialogComponent } from './components/dialogs/search-dialog/search-dialog.component';
import { OhliDialogComponent } from './components/dialogs/ohli-dialog/ohli-dialog.component';
import { TextFieldDialogComponent } from './components/dialogs/text-field-dialog/text-field-dialog.component';
import { StudioDialogComponent } from './components/dialogs/studio-dialog/studio-dialog.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tva', component: TvaComponent },
  { path: 'tva/:_id/:series/:sequence', component: TvaComponent },
  { path: 'tva/:from/:incompletion_id', component: TvaComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'movie/:_id/:series/:sequence', component: MovieComponent },
  { path: 'movie/:from/:incompletion_id', component: MovieComponent },
  { path: 'watching', component: WatchingComponent },
  { path: 'watching/:_id', component: WatchingComponent },
  { path: 'watching/data-from-plan/:plan_id', component: WatchingComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'plan/:_id', component: PlanComponent },
  { path: 'no-page', component: NoPageComponent },
  { path: '**', component: NoPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SafeHtml,
    SafeUrl,
    HomeComponent,
    TvaComponent,
    MovieComponent,
    WatchingComponent,
    PlanComponent,
    SearchDialogComponent,
    OhliDialogComponent,
    TextFieldDialogComponent,
    NoPageComponent,
    StudioDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    }),
    HttpClientModule,
    NgFlashMessagesModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

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
    MatAutocompleteModule,
    MatCheckboxModule,
    MatPaginatorModule
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
    MatAutocompleteModule,
    MatCheckboxModule,
    MatPaginatorModule
  ],
  entryComponents: [
    SearchDialogComponent,
    OhliDialogComponent,
    TextFieldDialogComponent,
    StudioDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ContentTypeInterceptor, multi: true },
    // { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} },
    TvaService,
    MovieService,
    WatchingService,
    SearchService,
    PlanService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
