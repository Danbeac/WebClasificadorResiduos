import { Component, Input, ViewEncapsulation, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { fadeIn, fadeOut, rotate } from './animations/animations';
import { Animation } from './models/animation';
import { Menu } from './models/menu';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeIn, fadeOut, rotate]
})
export class SideNavComponent implements OnChanges {

  @Input() menu: Menu[]|undefined = [];
  @Input() show: boolean|undefined = true;
  @Input() animation: Animation | any;
  @Input() animate: boolean = false;
  @Input() withArrow: boolean = true;
  @Input() activeID: any;
  @Output() onSidenav: EventEmitter<{id: string|number|undefined, label: string|undefined,icon: string|undefined,routerLink?: string,index: number, externalUrl?: string}> = new EventEmitter<{id: string|number|undefined, label: string|undefined,icon: string|undefined,routerLink?: string,index: number, externalUrl?: string}>();

  activeOne: Menu = {};

  ngOnChanges(changes: SimpleChanges): void {
    this.activeOne = {};

    if (changes['activeID'] && changes['activeID'].currentValue) {
      this.activeID = changes['activeID'].currentValue;
      this.activeID && this.menu && this.findActive();
    }
  }

  onNavClick({ id, label, icon, routerLink, externalUrl }: Menu, index: number): void {
    if (this.activeOne.id === id && this.activeOne.menu) {
      this.activeOne = {};
      this.onSidenav.emit(undefined);
      return;
    }

    this.onSidenav.emit({ id, label, icon, routerLink, index, externalUrl});
    this.activeOne = { id, label, icon };

    if (this.menu != undefined ){
      if (this.menu[index].menu) { this.activeOne.menu = this.menu[index].menu }
    }
  }

  findActive(): void {
    this.menu?.forEach((item: Menu) => {
      if (item.id === this.activeID || this.hasActive(item.menu)) {
        this.activeOne = item;
        return;
      }
    });
  }

  hasActive(menu: Menu[]|undefined): boolean|undefined {
    return menu && menu.some(item => item.id === this.activeID || this.hasActive(item.menu));
  }

}
