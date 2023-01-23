import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdownDirective]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpon = false;
    @HostListener('click') toggleOpen(){
        this.isOpon = !this.isOpon;
    }

}