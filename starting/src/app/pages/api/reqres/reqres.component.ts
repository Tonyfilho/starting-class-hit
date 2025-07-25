import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqresService } from '../../../_services/reqres.service';
import { IReqRes } from '../../../_shared/interfaces/reqres';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-reqres',
  imports: [CommonModule],
  templateUrl: './reqres.component.html',
  styleUrl: './reqres.component.css'
})
export class ReqresComponent implements OnInit {
  reqresService = inject(ReqresService);
  localReqRes$!: Observable<IReqRes>;
  @ViewChild('pdfContent') content!: ElementRef;

  ngOnInit(): void {
   this.localReqRes$ = this.reqresService.getDataReqresByGet();
  }


  downloadPDF() {
    const options = {
      filename: 'Reqres-guide.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }


}
