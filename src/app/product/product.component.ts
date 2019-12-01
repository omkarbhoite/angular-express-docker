import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:any;

  constructor(private service:DataService) { }

  ngOnInit() {
    let observable=this.service.Select();
    observable.subscribe((result)=>{
      console.log(result);
      this.product=result
    })
  }

}
