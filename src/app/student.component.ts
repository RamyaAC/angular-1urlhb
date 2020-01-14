import { Component, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

import { MessageService } from "./student.services";

export class Student {
  StudentId: number;
  StudentName: string;
  StudentAge: number;
}

@Component({
  selector: "student-app",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent {

  student = new Student();
  subscription: Subscription;
  studentList = new Array<Student>();

  constructor( public studrentService:StudentService) {}

  ngOnInit() {
    this.subscription = this.studrentService.getStudent().subscribe(x=>
    {
      this.studentList = x
    });
  }

  saveChanges(student:Student)
  {
    this.student = new Student();
    console.log(this.student);
    this.studentList.push(this.student);
    console.log(this.studentList);
    this.studrentService.sendStudentData(this.student);
  }

  deleteStudent(student:Student){
    console.log(this.student);
    this.studentList.splice(this.student.StudentId,1);
    console.log(this.studentList);

  }
 
}
