import { TestBed } from '@angular/core/testing';

import { TodoFetcherService } from './todo-fetcher.service';

describe('TodoFetcherService', () => {
  let service: TodoFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
