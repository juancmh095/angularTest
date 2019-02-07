import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InsertService{
    constructor(private http:Http){}

    guardar(item: Object){
        return this.http.post('http://localhost/src/api/model.php', item);
    }
}
