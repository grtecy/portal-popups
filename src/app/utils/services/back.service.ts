
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

    savePortal(data: any): Observable<any> {
        return this.objHttp.post(                                                               
            `${environment.baseUrl}/portal/save`,
            data
        );
    }
}