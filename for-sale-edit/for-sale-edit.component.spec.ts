import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSaleEditComponent } from './for-sale-edit.component';

describe('ForSaleEditComponent', () => {
  let component: ForSaleEditComponent;
  let fixture: ComponentFixture<ForSaleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForSaleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForSaleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
