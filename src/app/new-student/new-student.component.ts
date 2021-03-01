import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit, OnDestroy {
  studentForm: FormGroup;
  studentId;
  sub;


  constructor(
    private http: HttpService, 
    private router: Router,
    private actRoute: ActivatedRoute
  ) { 
    this.sub = this.actRoute.params.subscribe( data => {
      if ( data.id ) this.studentId = data.id;
    })
  }

  ngOnInit() {
    this.generateForm();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }




  async onEditStudent(){
    await this.http.putStudent( this.studentForm.value, this.studentId );
    this.router.navigate(['/students']);
  }

  async onAddStudent(){
    await this.http.postStudent( this.studentForm.value );
    this.router.navigate(['/students']);
  }

  async onDeleteStudent(){
    await this.http.deleteStudent( this.studentId );
    this.router.navigate(['/students']);
  }

  async generateForm(){
    let student;

    if ( this.studentId || this.studentId === 0 || this.studentId === '0' ) 
      student = await this.http.getStudentById(this.studentId);


    this.studentForm = new FormGroup({
      firstname: new FormControl( { value: student?.firstname || '', disabled: false }, [Validators.required] ),
      lastname: new FormControl( { value: student?.lastname || '', disabled: false }, [Validators.required] ),
      middlename: new FormControl( { value: student?.middlename || '', disabled: false }),
      phone: new FormControl( { value: student?.phone || '', disabled: false }, [Validators.required] ),
      email: new FormControl( { value: student?.email || '', disabled: false }, [Validators.required, Validators.email] ),
      group: new FormControl( { value: student?.group || '', disabled: false }, [Validators.required] ),
      direction: new FormControl( { value: student?.direction || '', disabled: false }, [Validators.required] ),
      birthDay: new FormControl( { value: student?.birthDay || '', disabled: false }, [Validators.required] )
    })
  }


}
