import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtcategoryComponent } from './eidtcategory.component';

describe('EidtcategoryComponent', () => {
  let component: EidtcategoryComponent;
  let fixture: ComponentFixture<EidtcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EidtcategoryComponent]
    });
    fixture = TestBed.createComponent(EidtcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
