import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersLmComponent } from './orders-lm.component';

describe('OrdersLmComponent', () => {
  let component: OrdersLmComponent;
  let fixture: ComponentFixture<OrdersLmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersLmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersLmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
