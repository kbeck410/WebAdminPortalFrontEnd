import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/Report';


@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  [x: string]: any;
  
  Report: Report[] = [];
  currentReport: Report = {
    REPORTID: 0,
    reportName: '',
    histortOfMaxDays: 0,
    nonSpoolFile: 0,
    description: '',
    title: '',
    Abstract: '',
    expirationDays: 0,
    skipPages: 0,
    uploadedFileName: '',
    creationDate: 0,
    allowPrnt: 0,
    addedBy: '',
    modifiedBy: '',
    as400Id: 0,
    status: '',
    deletedBy: '',
    multiReports: '',
    fileName: '',
    allowOverrides: 0,
    numColumns: 0,
    confidential: 0,
    bireport: '',
    helpUrl: '',
    help: '',
    detailDescription: '',
    combinePdfReport: 0
  };
  currentIndex = -1;
  title = '';
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
 // constructor(private ReportService: ReportService) { }
  ngOnInit(): void {
    this.retrieveReports();
  }
  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};
    if (searchTitle) {
      params[`title`] = searchTitle;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }
  retrieveReports(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    this.ReportService.getAll(params)
      .subscribe(
        (response: { Report: any; totalItems: any; }) => {
          const { Report, totalItems } = response;
          this.liveReport = Report;
          this.count = totalItems;
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        });
  }
  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveReports();
  }
  
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveReports();
  }
  refreshList(): void {
    this.retrieveReports();
    this.currentReport = {
      REPORTID: 0,
      reportName: '',
      histortOfMaxDays: 0,
      nonSpoolFile: 0,
      description: '',
      title: '',
      Abstract: '',
      expirationDays: 0,
      skipPages: 0,
      uploadedFileName: '',
      creationDate: 0,
      allowPrnt: 0,
      addedBy: '',
      modifiedBy: '',
      as400Id: 0,
      status: '',
      deletedBy: '',
      multiReports: '',
      fileName: '',
      allowOverrides: 0,
      numColumns: 0,
      confidential: 0,
      bireport: '',
      helpUrl: '',
      help: '',
      detailDescription: '',
      combinePdfReport: 0
    }
    
    //setActiveReport(Report: Report, index: number): void {
    //  this.currentReport = Report;
    //  this.currentIndex = index;
  //  }
  }
}


