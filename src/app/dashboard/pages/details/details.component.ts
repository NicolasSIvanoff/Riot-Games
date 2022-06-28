import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  constructor() {

  }
  ngOnDestroy(): void {

    console.log('destruído')
  }

  ngOnInit(): void {
    console.log('DetailsComponent, lazy loaded');
  }

}
