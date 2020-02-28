import { TestBed } from '@angular/core/testing';

import { MoshFollowersService } from './mosh-followers.service';

describe('MoshFollowersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoshFollowersService = TestBed.get(MoshFollowersService);
    expect(service).toBeTruthy();
  });
});
