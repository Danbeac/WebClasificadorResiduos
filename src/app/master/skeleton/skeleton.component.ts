import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Menu } from '../side-nav/models/menu';
import { fadeIn, fadeOut, rotate } from '../side-nav/animations/animations';


@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  animations: [fadeIn, fadeOut, rotate]
})
export class SkeletonComponent {

  constructor() {
  }

  ngOnInit(): void {
  }
}
