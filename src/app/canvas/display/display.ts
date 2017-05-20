
import {Component, ViewChild, ElementRef, Input, ChangeDetectionStrategy, ChangeDetectorRef, NgZone} from '@angular/core';

import {OnInit, AfterViewInit, OnDestroy, OnChanges  }  from '@angular/core';
//import * as x from "@node/zlib";
@Component({
    selector: "display",
    templateUrl: "./display.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Display implements OnInit, AfterViewInit, OnDestroy, OnChanges {

    private _cameraZ: number;
    private _wireframe: boolean;

    @Input("pos") pos: any;
    @Input() pausa: boolean;
    @Input("antialias") _antialias: boolean;

    @ViewChild("display") private displayHost: ElementRef;
    private display: HTMLElement;

    constructor(private detRef: ChangeDetectorRef, private _ngZone: NgZone) {
        this.pausa = false;
        this._wireframe = false;
        this._antialias = true;
  
        // window.onmousewheel = this.zoom.bind(this);
    }

    ngOnInit() {
        console.log("init");
       
    }
    
    ngAfterViewInit() {
        this.display = this.displayHost.nativeElement;
        console.dir(this.displayHost);
    
    }
    
    
    ngOnDestroy() {
        // window.onmousewheel = null;
    }

    ngOnChanges(change: any) {
        console.log("change", change);
    }

    _click(event: any) {

        console.log(event);
       

    }

}