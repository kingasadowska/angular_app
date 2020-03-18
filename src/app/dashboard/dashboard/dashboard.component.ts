import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  domain: number;
  Name: string;
  Email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { domain: 1, Name: 'Emma', Email: 'em@gmail.com' },
  { domain: 2, Name: 'Nataly', Email: 'nat@gmail.com' },
  { domain: 3, Name: 'Geoge', Email: 'geo@gmail.com' },
  { domain: 4, Name: 'Michael', Email: 'mich@gmail.com' },
  { domain: 5, Name: 'John', Email: 'jonh@gmai.com' },
  { domain: 6, Name: 'Jessica', Email: 'jess@gmail.com,' }
];

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayedColumns: string[] = ['domain', 'Name', 'Email'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}
}
