import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqresService } from '../../../_services/reqres.service';
import { IReqRes } from '../../../_shared/interfaces/reqres';

@Component({
  selector: 'app-reqres',
  imports: [CommonModule],
  templateUrl: './reqres.component.html',
  styleUrl: './reqres.component.css'
})
export class ReqresComponent implements OnInit {
  reqresService = inject(ReqresService);
  localReqRes$!: Observable<IReqRes>;

  ngOnInit(): void {
   this.localReqRes$ = this.reqresService.getDataReqresByGet();
  }


}
