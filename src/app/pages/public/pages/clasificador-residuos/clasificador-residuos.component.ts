import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-clasificador-residuos',
  templateUrl: './clasificador-residuos.component.html',
  styleUrl: './clasificador-residuos.component.scss'
})
export class ClasificadorResiduosComponent {
  showImages: boolean = true;;

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.checkScreenWidth();
    }

    ngOnInit() {
      this.checkScreenWidth();
    }

    checkScreenWidth() {
      this.showImages = window.innerWidth < 1400;
    }
}
