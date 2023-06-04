import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCollectionComponent } from './category-collection.component';

describe('CategoryCollectionComponent', () => {
  let component: CategoryCollectionComponent;
  let fixture: ComponentFixture<CategoryCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryCollectionComponent]
    });
    fixture = TestBed.createComponent(CategoryCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
