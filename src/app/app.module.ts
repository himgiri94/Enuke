import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import { HttpModule } from '@angular/http';
import { DataServiceService } from './data-service.service';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  { path: 'user/:id',      component: DataListComponent },
  { path: 'user',      component: DataListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    )
    // other imports here
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
