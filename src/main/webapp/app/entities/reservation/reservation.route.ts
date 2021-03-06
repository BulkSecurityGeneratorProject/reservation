import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { ReservationComponent } from './reservation.component';
import { ReservationDetailComponent } from './reservation-detail.component';
import { ReservationPopupComponent } from './reservation-dialog.component';
import { ReservationDeletePopupComponent } from './reservation-delete-dialog.component';

export const reservationRoute: Routes = [
    {
        path: 'reservation',
        component: ReservationComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'reservationApp.reservation.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'reservation/:id',
        component: ReservationDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'reservationApp.reservation.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const reservationPopupRoute: Routes = [
    {
        path: 'reservation-new',
        component: ReservationPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'reservationApp.reservation.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'reservation/:id/edit',
        component: ReservationPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'reservationApp.reservation.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'reservation/:id/delete',
        component: ReservationDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'reservationApp.reservation.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
