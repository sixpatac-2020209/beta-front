import { Component, OnInit, ElementRef } from '@angular/core';
import { ganttData } from './data';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  public data: object[] = ganttData;
  public timelineView: object = { timelineViewMode: "Week" } //Default one.
  public columnSettings: object[] = [
    { field: "TaskID", headerText: "Task ID" },
    { field: "TaskName", headerText: "Task Name" },
    { field: "StartDate", headerText: "StartDate", format: "dd-MMM-yy" },
    { field: "Duration", textAlign: "Right" },
  ]
  public taskSettings: object = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
    dependency: "Predecessor"
  }
  constructor(
    private elementRef: ElementRef
  ) {

  }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
