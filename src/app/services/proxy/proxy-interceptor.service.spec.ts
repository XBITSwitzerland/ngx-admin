import { TestBed, inject } from '@angular/core/testing';

import { ProxyInterceptorService } from './proxy-interceptor.service';

describe('ProxyInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProxyInterceptorService]
    });
  });

  it('should be created', inject([ProxyInterceptorService], (service: ProxyInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
