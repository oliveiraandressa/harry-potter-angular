import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class RestApiService {
    
    apiURL = 'http://hp-api.herokuapp.com/api/';


    constructor(private http: HttpClient) { }

    // Http Options - json
    httpOptions = {
        // headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        // })
    }  

    //Retorna todos da casa
    getHouse(house): Observable<any> {
        return this.http.get<any>(this.apiURL + 'characters/house/'+ house, this.httpOptions)
        .pipe(
        retry(1),
        catchError(this.handleError)
        )
    }


    //Erros
    handleError(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
        //client-side
        errorMessage = error.error.message;
        } 
        else {
        //server-side
        errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
