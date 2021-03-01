import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.scss']
})
export class StudentsViewComponent implements OnInit {
  students: any[];

  lastnameParam: string = '';
  groupParam: string = '';
  directionParam: string = '';

  constructor(
    private http: HttpService,
  ) { }

  async ngOnInit(){
    await this.http.getStudents()
    .then( ( w: any[] ) => this.students = w );
  }


}

