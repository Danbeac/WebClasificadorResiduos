import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MetadataPagination } from '../../../models/frontend';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})

export class PaginatorComponent implements OnInit {

  @Input() metadataPaginator: MetadataPagination;
  @Output() pageSizeChanged = new EventEmitter<number>();
  @Output() pageNumberChanged = new EventEmitter<{ pageNumber, pageSize }>();

  pageSize: number;
  maxPageSize: number = 100;
  numberFirstItem: number;
  numberLastItem: number;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.metadataPaginator);

    this.loadInfoPagination();
  }

  loadInfoPagination() {
    this.pageSize = this.metadataPaginator.pageSize;
    this.calculateNumberFirstItem();
    this.calculateNumberLastItem();
  }

  ngOnChanges() {
    this.loadInfoPagination();
  }

  calculateNumberFirstItem() {
    if(this.metadataPaginator.currentPage === 1)
      this.numberFirstItem = 1;
    else
      this.numberFirstItem = (this.metadataPaginator.currentPage * this.metadataPaginator.pageSize) - this.metadataPaginator.pageSize + 1;
  }

  calculateNumberLastItem() {
    this.numberLastItem = (this.metadataPaginator.currentPage * this.metadataPaginator.pageSize);

    if(this.numberLastItem > this.metadataPaginator.totalCount)
      this.numberLastItem = this.metadataPaginator.totalCount;
  }

  pageSizeChange() {
    if(this.pageSize === null || this.pageSize === 0){
      this.pageSize = this.metadataPaginator.pageSize;
    }else {
      if(this.pageSize < this.maxPageSize){
        this.pageSizeChanged.emit(this.pageSize);
      }
    }
  }

  changeNumberPage(pageNumber){
    this.pageNumberChanged.emit({pageNumber, pageSize: this.metadataPaginator.pageSize});
  }
}
