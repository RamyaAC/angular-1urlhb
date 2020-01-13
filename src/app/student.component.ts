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
  // studentList = [[1, "ramya", 23], [2, "yamuna", 20], [3, "chandu", 25]];

  // StudentId: number = 4;
  // StudentName: string = "Ramya";
  // StudentAge: number = 23;
  constructor() {}
  ngOnInit() {
    // this.arrayfunction();
    this.saveChanges(this.student)
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
