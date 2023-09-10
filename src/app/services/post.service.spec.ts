import { TestBed } from '@angular/core/testing';

import { PostListService } from './post.service';

describe('PostService', () => {
  let service: PostListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
