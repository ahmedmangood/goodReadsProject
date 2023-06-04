import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCardsComponent } from './author-cards.component';

describe('AuthorCardsComponent', () => {
  let component: AuthorCardsComponent;
  let fixture: ComponentFixture<AuthorCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorCardsComponent]
    });
    fixture = TestBed.createComponent(AuthorCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
