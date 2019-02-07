
import { Component, OnInit } from '@angular/core';
import { insertModel } from '../models/insert.model';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $:any;

@Component({
    selector: 'dashboard',
    templateUrl: 'insert.component.html'
})export class insert implements OnInit{
  
    private user:insertModel;
    insertForm: FormGroup;
    constructor() {

    }

    ngOnInit() {

        

        this.insertForm = new FormGroup ({
            name: new FormControl(),
            lastp: new FormControl(),
            lastm: new FormControl(),
            adress: new FormControl(),
            age: new FormControl()
            
        })
    }


    get currentInsert(){
        return JSON.stringify(this.insertForm.value);
    }
}