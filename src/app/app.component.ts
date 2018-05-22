import { Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mainForm:boolean
  registrationForm:FormGroup;
  registeredData=[]
  showClickButton:boolean;
  showUserData:boolean
  registeredDatass=[]
  maindiv:boolean
  logoutdone:boolean;
  inputName: string = '';


  constructor() {

  }

  ngOnInit(){
    this.mainForm=false;
    this.maindiv=true;
    this.showUserData=false;
    this.showClickButton=false;

    /* we are creating the instances of formgroup*/
    this.registrationForm=new FormGroup({
      name: new FormControl('',[Validators.required,this.noWhitespaceValidator]),
      option: new FormControl('',Validators.required),
      address: new FormControl('',[Validators.required,this.noWhitespaceValidator]),
      phonenumber: new FormControl('',Validators.required),
    });
  }
  submitQuestion(){

  }
  /* to get the formcontrolvalue in case of reactiveform approach*/
  get name() {
    return this.registrationForm.get('name');
  }
  get option() {
    return this.registrationForm.get('option');
  }
  get address() {
    return this.registrationForm.get('address');
  }
  get number() {
    return this.registrationForm.get('phonenumber');
  }

  /* start for customField Validation space not allowed*/
  public noWhitespaceValidator(control: FormControl) {
    let isWhitespace = (control.value || '').trim().length === 0;
    let isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true }
  }
  /* end for customField Validation space not allowed*/

  /* start for customField Validation only numbers are allowed*/
  keyPress(event){
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
  /* end for customField Validation only numbers are allowed*/

  /* start for saving the userDetails data*/
  registerData(registrationForm:any){
    var submitPayload={
      "Name":registrationForm.name,
      "gender":registrationForm.option,
      "Address":registrationForm.address,
      "Number":registrationForm.phonenumber
    }
    this.registeredData.push(submitPayload)
    localStorage.setItem("userDetails",JSON.stringify(this.registeredData));
    console.log("userdata"+JSON.stringify( this.registeredData))
    this.mainForm=true;
    this.showClickButton=true;
    this.registrationForm.reset()
  }
  /* end for saving the userDetails data*/


  /* start for getting userDetails data*/
  getUserdata(){
    this.showClickButton=false;
    console.log("userdatas"+JSON.stringify( this.registeredDatass))
    this.showUserData=true
  }
  /* end for getting userDetails data*/
  showForm(){
    this.mainForm=false;
    this.showClickButton=false;
    this.showUserData=false;
  }
  clearLocal(){
    localStorage.clear()
    this.maindiv=false;
    this.logoutdone=true;
  }
  openMainForm(){
    console.log("hi india")
    this.maindiv=true;
    this.logoutdone=false;
    this.mainForm=false;
    this.showUserData=false;
  }
}

