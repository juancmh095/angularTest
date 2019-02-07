import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',    
    styleUrls: ['./dashboard.component.css']
})export class Dashboard{
    title: string;
    description1: String;
    footer: string;

    constructor(){
        this.title = "Estadistica1.1",
        this.description1= 'descripcion detallada'
        this.footer = 'ver mas';
    }
    ;
    

}
