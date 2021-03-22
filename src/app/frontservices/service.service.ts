import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  connectedState = new EventEmitter<boolean>();
  constructor() { }
}
