import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(
        private http: HttpClient
    ) {}

    // TODO Tipificar o objeto de retorno
    create(fullName: string, email: string, password: string): Observable<any> {
        const params = new HttpParams()
        .set('fullName', fullName)
        .set('email', email)
        .set('password', password)

        return this.http.post('/api/users', params)
    }
}