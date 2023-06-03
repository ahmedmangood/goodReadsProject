import { TestBed } from '@angular/core/testing';

import { ListBooksAdminService } from './list-books-admin.service';

describe('ListBooksAdminService', () => {
  let service: ListBooksAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListBooksAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
