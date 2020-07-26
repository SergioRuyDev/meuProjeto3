import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @Input() cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') onFocus() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') offFocus() {
    this.corDeFundo = 'transparent';
  }
}


