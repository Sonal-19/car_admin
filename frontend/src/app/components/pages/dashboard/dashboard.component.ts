import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import SweetAlert from 'src/app/utils/sweetAlert';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DashboardComponent implements OnInit {
  QrCodes: any[] = [];
  loading: boolean = false;

  constructor(
    public router: Router,
    private apiService: ApiService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.getQrCode();
  }

  getQrCode() {
    this.loading = true;
    this.apiService.getQrCode().subscribe({
      next: (data) => {
        if (data && data.status === 200) {
          this.loading = false;
          this.QrCodes = data.data;
        } else {
          this.loading = false;
          SweetAlert.errorAlert('Error!', data.message);
        }
      },
    });
  }

  // Download single QR 
  downloadQrAsPdf(qrId: string, qrPath: string) {
    const doc = new jsPDF();
    const img = new Image();
    img.src = qrPath;

    img.onload = () => {
      doc.text(`QR Code for TAG ID: ${qrId}`, 10, 10);
      doc.addImage(img, 'JPEG', 10, 20, 180, 180);
      doc.save(`QRCode_${qrId}.pdf`);
    };
  }

  // Download all QR codes 
  downloadAllQrAsPdf() {
    const doc = new jsPDF();
    let positionY = 10; 

    this.QrCodes.forEach((qr, index) => {
      const img = new Image();
      img.src = qr.path;

      img.onload = () => {
        if (index !== 0) {
          doc.addPage();
          positionY = 10;
        }
        doc.text(`QR Code for TAG ID: ${qr.qrId}`, 10, positionY);
        doc.addImage(img, 'JPEG', 10, positionY + 10, 180, 180);
        positionY += 200;

        if (index === this.QrCodes.length - 1) {
          doc.save('All_QRCodes.pdf');
        }
      };
    });
  }

}
