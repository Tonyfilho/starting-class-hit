import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { delay, map, Observable, of, Subscription, take } from 'rxjs';
import { DummyObservableService } from '../../../../../_services/observable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-observables',
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './../promises/promises.component.css'
})
export class ObservablesComponent  {

  protected observableService$ = inject(DummyObservableService);
  private router = inject(Router);
  protected localLoad = false;
  protected localMessage: string = '';
  protected localError: string = '';
  private unSub!: Subscription;
  private unSubRxJs!: Subscription;


  loadData() {
    this.localLoad = true;
    // this.unSub = this.observableService$.seekData$().subscribe(d => console.log("Assíncrono Exemplo ", d));
    console.log("Sincrono() ");
    this.observableService$.dummySeekData$().subscribe({
      next: (res) => { console.log("Success "), this.localMessage = res, this.router.navigateByUrl("/angular") },
      error: (err) => { console.error("Error "), this.localError = err, this.router.navigateByUrl("/not-found") },
      complete: () => { console.log("complete: "), this.localLoad = false }
    });
  }

  loadDataRxJs = () => {
    this.unSubRxJs = this.observableService$.dummyDataObservableRxJsOf().pipe(take(1)).subscribe({
      next: (resut) => this.localMessage = resut as string,
      error: (err: string) => this.localError = err,
      complete: () => console.log(" Is Done Observable"),

    });
  };

  // ngOnDestroy(): void {
  //   this.unSub.unsubscribe();
  //   this.unSubRxJs.unsubscribe();
  // }
}



