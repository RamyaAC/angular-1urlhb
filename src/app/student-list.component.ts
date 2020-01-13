import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms'

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: [ './student-list.component.css' ]
})
export class StudentListComponent  {
studentForm :FormGroup;

constructor(){}
ngOnInit()
{
// this.employeeForm = new
}
}