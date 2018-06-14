import {Injectable} from '@angular/core';
import { UNDataResponse } from '../model/UNDataModel';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CardsService {

    constructor(private http: HttpClient) { }

    private _unDataUrl = '../assets/countries.json';
    private _headers = {headers: new HttpHeaders().set('Content-Type', 'application/json')};

    getCards() {
        return this.http.get<UNDataResponse>(this._unDataUrl, this._headers);
    }

}