import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminModule) },
    { path: 'login', loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule) },
    // { path: '', component: HomeComponent },
    // { path: 'path', component: FeatureComponent },
    { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
