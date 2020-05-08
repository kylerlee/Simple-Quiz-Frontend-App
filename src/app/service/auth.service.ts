import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Endpoints } from './api.service';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private router: Router) { }

    get IsAuthenticated() {
        return !!localStorage.getItem('token');
    }

    register(credentials) {
        this.http.post<any>(`${Endpoints.account}`, credentials).subscribe(res => {
            this.authenticate(res);
        });
    }

    login(credentials) {
        this.http.post<any>(`${Endpoints.account}/login`, credentials).subscribe(res => {
            this.authenticate(res);
        })
    }

    logout() {
        localStorage.removeItem("token");
        this.router.navigate(['/']);
    }

    private authenticate(res) {
        localStorage.setItem("token", res);
        this.router.navigate(['/home']);
    }
}