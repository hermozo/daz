import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable({
    providedIn: 'root'
})
export class DataxService {
    public puntero = 'https://api.thecatapi.com/';
    public path: string;

    constructor(private httpx: HttpClient) {
        this.path = this.puntero + 'v1/';
    }

    public getServis(link: string) {
        return new Promise((resolve, reject) => {
            this.httpx.get<any>(this.path + link, httpOptions).subscribe((data) => {
                resolve(data);
            });
        });
    }

    public postServis(link: string, datax: any) {
        return new Promise((resolve, reject) => {
            this.httpx.post<any>(this.path + link, datax, httpOptions).subscribe((data) => {
                resolve(data);
            });
        });
    }
}
