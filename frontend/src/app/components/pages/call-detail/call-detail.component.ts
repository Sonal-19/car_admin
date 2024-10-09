import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import SweetAlert from 'src/app/utils/sweetAlert';

@Component({
  selector: 'app-call-detail',
  templateUrl: './call-detail.component.html',
  styleUrls: ['./call-detail.component.css']
})
export class CallDetailComponent implements OnInit {

  callData: any = {}; 
  loading: boolean = false; 
  error: string = ''; 

  startDate: string = ''; 
  endDate: string = '';   
  callCards: any[] = [];  

  constructor(
    private location: Location,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    const today = new Date();
    this.startDate = this.formatDate(today); 
    this.endDate = this.formatDate(today);   
    this.dashboardReport(); 
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  submitDates() {
    if (this.startDate && this.endDate) {
      this.dashboardReport();
    } else if(!this.startDate){
      SweetAlert.errorAlert("Please select start date");
    } else if(!this.endDate){
      SweetAlert.errorAlert("Please select end date");
    } else {
      this.error = 'Please select both start and end dates';
      SweetAlert.errorAlert(this.error);
    }
  }

  dashboardReport() {
    this.loading = true; 
    const reqBody = {
      startDate: this.startDate,
      endDate: this.endDate
    };

    this.apiService.dashboardReport(reqBody).subscribe({
      next: (response) => {
        this.callData = response.data; 
        this.callCards = [response.data]; 
        this.loading = false; 
      },
      error: (err) => {
        this.error = 'Failed to fetch data'; 
        this.loading = false; 
      }
    });
  }

  refreshData() {
    const today = new Date();
    this.startDate = this.formatDate(today); 
    this.endDate = this.formatDate(today);   
    this.dashboardReport(); 
  }

  goBack() {
    this.location.back();
  }
}
