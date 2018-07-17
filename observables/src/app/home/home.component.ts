import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Observer, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private numbersObservableSubscription: Subscription;
  private customObservableSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    const myNumbers = interval(1000).pipe(map((data: number) => data * 2));
    this.numbersObservableSubscription = myNumbers.subscribe((number: number) =>
      console.log(number)
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    this.customObservableSubscription = myObservable.subscribe(
      (data: string) => console.log(data),
      (error: string) => console.log(error),
      () => console.log('completed')
    );
  }

  ngOnDestroy() {
    this.numbersObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }
}
