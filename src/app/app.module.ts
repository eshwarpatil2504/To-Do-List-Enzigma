import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For form handling

import { AppComponent } from './app.component';
import { UserFormComponent } from './components/eshwar-form/eshwar-form.component';
import { eshwarListComponent } from './components/eshwar-list/eshwar-list.component';
// import { eshwarservice } from './services/eshwar.service';
import { ConfirmationDialogComponent } from './eshwar-log/eshwar-log.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent, // Declare the UserFormComponent here
    eshwarListComponent, // Declare the UserListComponent here
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
  ],
  // providers: [eshwarservice], // Add the UserService here
  bootstrap: [AppComponent]
})
export class AppModule { }
