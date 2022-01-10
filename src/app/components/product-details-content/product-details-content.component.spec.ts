import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsContentComponent } from './product-details-content.component';

describe('ProductDetailsContentComponent', () => {
  let component: ProductDetailsContentComponent;
  let fixture: ComponentFixture<ProductDetailsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
