import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MlDataService} from '../lm-data.service';

@Component({
  selector: 'app-orders-lm',
  templateUrl: './orders-lm.component.html',
  styleUrls: ['./orders-lm.component.css']
})
export class OrdersLMComponent implements OnInit {

  public items$: any;
  constructor(private service: MlDataService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });


  }
}

