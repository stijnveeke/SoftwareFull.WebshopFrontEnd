import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartContentComponent } from './shoppingcart-content.component';

describe('ShoppingcartContentComponent', () => {
  let component: ShoppingcartContentComponent;
  let fixture: ComponentFixture<ShoppingcartContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingcartContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
