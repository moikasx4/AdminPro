import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [

    {
        path: 'dashboard', component: PagesComponent,
        children:  [
        {path: '', component: DashboardComponent, data: {titulo: 'Dashboard'}},
        {path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'}},
        {path: 'grafica1', component: Grafica1Component, data: {titulo: 'GraficaOne'}},
        {path: 'configuracion', component: AccountSettingsComponent, data: {titulo: 'Config'}},
        {path: 'promesas', component: PromesasComponent, data: {titulo: 'promesas'}},
        {path: 'rxjs', component: RxjsComponent, data: {titulo: 'rxjs'}}
        ]
      }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
