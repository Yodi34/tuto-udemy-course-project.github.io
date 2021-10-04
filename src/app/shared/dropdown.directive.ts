import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";
import { resetFakeAsyncZone } from "@angular/core/testing";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}
}