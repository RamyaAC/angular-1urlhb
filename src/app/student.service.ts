import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class StudentService{
  student$ = new Subject<any>();

  sendStudentData(student: any){
    this.student$.next({student});
  }

  // clearStudent(id: number){
  //   this.student$.next()
  // }

  getStudent():Observable<any>{
    return this.student$.asObservable();
  }
}