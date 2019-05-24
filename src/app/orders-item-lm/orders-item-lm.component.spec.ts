import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemLMComponent } from './orders-item-lm.component';

describe('OrdersItemLMComponent', () => {
  let component: OrdersItemLMComponent;
  let fixture: ComponentFixture<OrdersItemLMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemLMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemLMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
