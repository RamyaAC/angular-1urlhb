import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StudentComponent} from './student.component';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,StudentComponent ,StudentListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
