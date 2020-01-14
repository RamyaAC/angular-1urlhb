import { Component, OnInit } from "@angular/core";

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
  studentList = new Array<Student>();

  constructor() {}
  ngOnInit() {
    
    // this.saveChanges(this.student)
  }
  saveChanges(student:Student)
  {
    this.student = new Student();
    console.log(this.student);
    this.studentList.push(this.student);
    console.log(this.studentList);
  }

  deleteStudent(student:Student){
    console.log(this.student);
    this.studentList.splice(this.student.StudentId,1);
    console.log(this.studentList);
  }
 
}
