import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '' , redirectTo: 'teacher', pathMatch: 'full'
  },
  {
    path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(t => t.TeacherModule)
  },
  {
    path: 'student', loadChildren: () => import('./student/student.module').then(t => t.StudentModule)
  },
  {
    path: 'courses', loadChildren: () => import('./courses/courses.module').then(t => t.CoursesModule)
  },
  {
    path: 'attendance', loadChildren: () => import('./attendance/attendance.module').then(t => t.AttendanceModule)
  },
  {
    path: 'report', loadChildren: () => import('./report/report.module').then(t => t.ReportModule)
  },
  {
    path: '**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
