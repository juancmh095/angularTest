import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Dashboard }   from './dashboard/dashboard.component';
import { insert }   from './insertar/insert.component';

export const AppRoutes: Routes = [

    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path:'insert',
        component: insert
    }
];
