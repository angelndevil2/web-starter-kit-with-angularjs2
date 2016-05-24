/**
 * Created by k on 16. 4. 30.
 */
import {Component, Inject, ElementRef, AfterViewInit, AfterViewChecked} from '@angular/core';
declare var componentHandler: any;

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
    private elementRef;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    ngOnInit() {
        // window.componentHandler.upgradeElement is provided by Material Design Lite
        // and is necessary to call in order to "augment" dynamically added HTML
        componentHandler.upgradeElement(this.elementRef.nativeElement.firstElementChild);
    }

    ngAfterViewInit() {
        let elm = this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.firstChild;
        if (elm !== null) componentHandler.upgradeElements(elm);
        //
        // this will upgrade all mdl-js-*, but should be expensive
        //
        //componentHandler.upgradeDom();
        //
    }

    ngAfterViewChecked() {
        //let elm = this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.getElementsByClassName('mdl-js-layout')[0];
        let elm = this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.firstChild;
        if (elm !== null) componentHandler.upgradeElements(elm);
        //
        // this will upgrade all mdl-js-*, but should be expensive
        //
        //componentHandler.upgradeDom();
        //
    }
}
