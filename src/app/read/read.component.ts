import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private service: ApiserviceService) { }


  readData: any;
  successmsg:any;

  ngOnInit(): void {
    this.service.getAllData().subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;

    })
  }
  deleteID(id:any){
    this.service.deleteData(id).subscribe((res)=>{
console.log(res,'deleteres==>');
this.successmsg=res.massege;

this.service.getAllData().subscribe((res) => {
  console.log(res, "res==>");
  this.readData = res.data;

})
    })
  }


}
