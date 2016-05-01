/**
 * Created by k on 16. 4. 30.
 */
import {Component, Inject, ElementRef, OnInit} from 'angular2/core';
declare var componentHandler: any;

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent {
    private elementRef;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    ngOnInit() {
        // window.componentHandler.upgradeElement is provided by Material Design Lite
        // and is necessary to call in order to "augment" dynamically added HTML
        componentHandler.upgradeElement(this.elementRef.nativeElement.firstElementChild);
    }
}
