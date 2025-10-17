import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';

const routes: Routes = [
  {path:'',redirectTo: 'create',pathMatch:'full' },
  {path:'create', component: AddTeacherComponent},
  {path:'list', component: TeacherListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
