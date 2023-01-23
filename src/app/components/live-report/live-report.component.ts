import { Component, OnInit } from '@angular/core';
import { LiveReport } from '../models/LiveReport';

@Component({
    selector: 'app-live-report',
    templateUrl: './live-report.component.html',
    styleUrls: ['./live-report.component.css']
})
export class LiveReportComponent implements OnInit {
    [x: string]: any;

    liveReport: LiveReport[] = [];
    currentLiveReport: LiveReport = {
        RDOCID: 0,
        RDOCODATE: '',
        RDOCEDATE: '',
        RDOCTITLE: '',
        RDOCABSTRACT: '',
        DATID: 0,
        RDOCSSO: '',
        RDOCDESC: '',
        RDOCRTIME: '',
        DOCTID: 0,
        RDALLOWPRNT: 0,
        PDATE: 0,
        ALLOWOVERRIDES: 0,
        NUMCOLUMNS: 0
    };
    currentIndex = -1;
    title = '';
    page = 1;
    count = 0;
    pageSize = 3;
    pageSizes = [3, 6, 9];
    //constructor(private LiveReportService: LiveReportService) { }
    ngOnInit(): void {
        this.retrieveLiveReports();
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
    retrieveLiveReports(): void {
        const params = this.getRequestParams(this.title, this.page, this.pageSize);
        this.liveReportService.getAll(params)
            .subscribe(
                (                response: { liveReport: any; totalItems: any; }) => {
                    const { liveReport, totalItems } = response;
                    this.liveReport = liveReport;
                    this.count = totalItems;
                    console.log(response);
                },
                (                error: any) => {
                    console.log(error);
                });
    }
    handlePageChange(event: number): void {
        this.page = event;
        this.retrieveLiveReports();
    }
    handlePageSizeChange(event: any): void {
        this.pageSize = event.target.value;
        this.page = 1;
        this.retrieveLiveReports();
    }
    refreshList(): void {
        this.retrieveLiveReports();
        this.currentLiveReport = {RDOCID: 0,
            RDOCODATE: '',
            RDOCEDATE: '',
            RDOCTITLE: '',
            RDOCABSTRACT: '',
            DATID: 0,
            RDOCSSO: '',
            RDOCDESC: '',
            RDOCRTIME: '',
            DOCTID: 0,
            RDALLOWPRNT: 0,
            PDATE: 0,
            ALLOWOVERRIDES: 0,
            NUMCOLUMNS: 0};
        this.currentIndex = -1;
    }
    setActiveLiveReport(liveReport: LiveReport, index: number): void {
        this.currentLiveReport = liveReport;
        this.currentIndex = index;
    }
}