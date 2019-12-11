import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // hardcoded for now, TODO: move it to the configuration file
  private baseUrl = 'http://localhost:8080/api/products';

  constructor() { }
}
