
import { environment } from 'src/app/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class BackService {
    constructor(
        private objHttp: HttpClient,
    ) { }

    saveItemFrom(data: any): Observable<any> {
        return this.objHttp.post(
            `${environment.baseUrl}/item/save`,
            data
        );
    }

    saveGraphicFrom(data: any): Observable<any> {
        return this.objHttp.post(
            `${environment.baseUrl}/graphic/save`,
            data
        );
    }

    savePhotoFrom(data: any): Observable<any> {
        return this.objHttp.post(
            `${environment.baseUrl}/photo/save`,
            data
        );
    }

    saveWebsiteFrom(data: any): Observable<any> {
        return this.objHttp.post(
            `${environment.baseUrl}/website/save`,
            data
        );
    }

    savePaidFrom(data: any): Observable<any> {
        return this.objHttp.post(
            `${environment.baseUrl}/paid/save`,
            data
        );
    }

    saveSocialFrom(data: any): Observable<any> {
        return this.objHttp.post(
            `${environment.baseUrl}/social/save`,
            data
        );
    }

    saveSupportFrom(data: any): Observable<any> {
        return this.objHttp.post(
            `${environment.baseUrl}/support/save`,
            data
        );
    }

    saveUrgentFrom(data: any): Observable<any> {
        return this.objHttp.post(
            `${environment.baseUrl}/urgent/save`,
            data
        );
    }

    saveInviteFrom(data: any): Observable<any> {
        return this.objHttp.post(
            `${environment.baseUrl}/invite/save`,
            data
        );
    }

    submitDenyFrom(data: any): Observable<any> {
        return this.objHttp.post(
            `${environment.baseUrl}/deny/submit`,
            data
        );
    }
    submitChangeFrom(data: any): Observable<any> {
        return this.objHttp.post(
            `${environment.baseUrl}/change/submit`,
            data
        );
    }
}