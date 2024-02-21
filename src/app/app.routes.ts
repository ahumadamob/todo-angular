import { Routes } from '@angular/router';
import { TaskComponent } from './pages/task/task.component';
import { ProjectComponent } from './pages/project/project.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  { path: 'task', component: TaskComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/task', pathMatch: 'full' }
];
