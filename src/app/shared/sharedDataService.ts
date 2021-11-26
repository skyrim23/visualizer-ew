import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core'; // at top

@Injectable({
  providedIn: 'root', // just before your class
})
export class SharedDataService {
  constructor() {}

  private holdings: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private totalInvestedAmount: BehaviorSubject<any> = new BehaviorSubject<number>(0);
  public setValue(valueObject: any): void {
    if (valueObject.totalInvestedAmount) {
      this.totalInvestedAmount.next(valueObject.totalInvestedAmount);
    }
    else if (valueObject.holdings) {
      this.holdings.next(valueObject.holdings);
    }
  }

  public getValue(valueObject: any): Observable<any>|any {
    if (valueObject.totalInvestedAmount) {
      return this.totalInvestedAmount;
    }
    else if (valueObject.holdings) {
      return this.holdings.asObservable();
    }
  }
}
