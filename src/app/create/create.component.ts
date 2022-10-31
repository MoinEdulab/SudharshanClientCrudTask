import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, } from '@angular/router';//its use to get the data on update page

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
[x: string]: any;


  constructor(private service: ApiserviceService, private router: ActivatedRoute ) { }
  errormsg: any;
  successmsg: any;
  getparasid: any;

  ngOnInit(): void {

    this.getparasid = this.router.snapshot.paramMap.get('id')//it use to get data in the page after click on updata botton
    if (this.getparasid) {
      //geting value in the page on id
      this.service.getsingleData(this.getparasid).subscribe((res) => {
        this.userform.patchValue({
          fullname: res.data[0].fullname,
          email: res.data[0].email,
          mobile: res.data[0].mobile,
          Password: res.data[0].Password
         
        })
      })

    }


  }
  userform = new FormGroup({
    'fullname': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    'email': new FormControl('', [Validators.required,Validators.email]),
    'mobile': new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    'Password': new FormControl('', [Validators.required,])
    
  })

  userSubmit() {

    if (this.userform.valid) {
      console.log(this.userform.value);
      this.service.createData(this.userform.value).subscribe((res: any) => {
        console.log(res, 'res==>');
        this.userform.reset();
        this.successmsg = res.massege; 
        
      
      })

    } else {
      this.errormsg = 'All fild are required' //erro msg

    }
  }
  //Reset button
  restForm() {
    this.userform.reset();
  }
  //userUpdate
  userUpdate() {
    console.log(this.userform.value, 'updatedfrom');
    if (this.userform.valid) {
      this.service.updateData(this.userform.value, this.getparasid).subscribe((res) => {
        console.log(res, 'resUpdated');
        this.successmsg = res.massege;

      })
    }

  }
    get fullname(): FormControl {
    return this.userform.get("fullname") as FormControl;
  }
  get email(): FormControl {
    return this.userform.get("email") as FormControl;
  }
  get mobile(): FormControl {
    return this.userform.get("mobile") as FormControl;
  }
}
