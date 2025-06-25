import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SignalService } from '../../../../_services/signal.service';


@Component({
  selector: 'app-signal',
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrl: './../promises/promises.component.css'
})
export class SignalComponent {

  signalService = inject(SignalService);
  localToSignalWithoutGet = this.signalService.localToSignal; /**Signal sem Get() */
  localToSignalWithGet = this.signalService.dummySignal(); /**Signal com Get() */
  localName = this.signalService.name;

  localNumber: number = 0;



  constructor () {
    console.log('My Signal() ', this.localName());
  }

  updateObs() {

    this.localNumber = this.localNumber + 1;
    this.localName.set(this.localName() + this.localNumber.toString());
  }
  resetObs = () => {
    this.localNumber = this.localNumber! - 1
    this.localName.set(this.localName() + this.localNumber.toString());

  }

}
