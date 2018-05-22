import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {FilterPipe} from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxPaginationModule,
    // BootstrapModalModule,
    // BootstrapModalModule.forRoot({container: document.body}),
    HttpModule,
    // WebCamComponent,
    RouterModule,
    // ModalModule.forRoot(),
    RouterModule.forRoot([
      // {path: 'assessment/test', component: UserInfoComponent},
      // {path: 'instruction', component: InstructionComponent},

      // {path: 'dashboard', component:DashboardComponent},
      // {path: 'header', component:HeaderComponent},
      // {path: 'assessment/validate/user', component: UserInfoComponent},
      // {path: 'Error', component: ErrorCompComponent},
      // {path: 'assessment', component: AssessmentComponent},

    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
