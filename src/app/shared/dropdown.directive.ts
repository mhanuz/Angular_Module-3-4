import { Directive, HostBinding, HostListener } from "@angular/core";
// @Directive: declare custom directive
@Directive({
    selector: '[appDropdownDirective]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpon = false; // will bind the property to the host element
    @HostListener('click') toggleOpen(){ // will listen to the event emitted by host element
        this.isOpon = !this.isOpon;
    }

}
