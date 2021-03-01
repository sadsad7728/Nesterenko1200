import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { StudentsViewComponent } from './students-view/students-view.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'students', component: StudentsViewComponent },
  { path: 'add', component: NewStudentComponent },
  { path: 'edit/:id', component: NewStudentComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
