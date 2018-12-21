import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from '../app.config';

export abstract class BaseService {
  protected constructor(
    protected http: HttpClient,
    @Inject(API_URL) protected apiUrl: string,
  ) { }

  protected buildPath(path: string | string[]): string {
    return typeof path === 'string' ? path : path.join('/');
  }

  protected buildUrl(path: string | string[], params: { [key: string]: any } = {}): string {
    return this.apiUrl + this.buildPath(path) + this.processGetParams(params);
  }

  protected processGetParams(get: { [key: string]: any }): string {
    const parts = [];

    Object.keys(get).forEach((prop) => {
      const val = get[prop];
      if (val) {
        if (val instanceof Array) {
          let string = val.reduce((sum, value) => {
            sum.push(`${prop}[]=` + encodeURI(value));
            return sum;
          }, []);
          parts.push(string.join('&'));
        } else {
          parts.push(`${prop}=` + encodeURI(get[prop]));
        }
      }
    });

    return parts.length ? '?' + parts.join('&') : '';
  }
}
