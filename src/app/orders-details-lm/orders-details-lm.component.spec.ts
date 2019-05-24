import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsLmComponent } from './orders-details-lm.component';

describe('OrdersDetailsLmComponent', () => {
  let component: OrdersDetailsLmComponent;
  let fixture: ComponentFixture<OrdersDetailsLmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailsLmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsLmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
