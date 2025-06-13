import { Component, inject, OnInit } from '@angular/core';
import { DummyObservableService } from '../../../../../_services/observable.service';
import { CommonModule } from '@angular/common';
import { delay, map, Observable, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-observable02',
  imports: [CommonModule],
  templateUrl: './observable02.component.html',
  styleUrl: './../promises/promises.component.css'
})
export class Observable02Component implements OnInit {
  dummyObservableService = inject(DummyObservableService);
  localObservable$!: Observable<string | undefined>;
  protected localLoad = false;
  protected localError: string = '';
  protected counter = 0;



  ngOnInit(): void {
    this.localObservable$ = this.dummyObservableService.asyncObservable();
  }

  updateObs() {
    this.counter = this.counter + 1;
    // this.localObservable$ = of(this.localObservable$).pipe(switchAll(), map(d => {
    //   if (!d) {return undefined;}
    //   console.log("counter ", this.counter);

    //   return `${d}, ${this.counter}`;
    // }
    // ));
    // this.localObservable$ = of(this.localObservable$).pipe(switchMap((d) => {
    //  d.subscribe(s =>  console.log("o que temos em s", s ));
    //   return (`${d}: ${this.counter}`);

    // }));
    this.localObservable$ = of(this.localObservable$).pipe(switchMap(a => a.pipe(map(() => a + this.counter.toString()))))
  }
  resetObs() {
    this.counter = 0;
  }






}
