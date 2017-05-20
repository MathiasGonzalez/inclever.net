
import {Component, OnInit, ViewChild, AfterViewInit, ElementRef,Inject  } from '@angular/core';
import {Router} from "@angular/router";
import {Display} from "./display/display";
@Component({
    selector: "canvas1",
    templateUrl: "./canvas1.html"
})
export class Canvas1 implements OnInit, AfterViewInit {

    
    pausa: boolean;
    antialias: boolean;
    @ViewChild(Display) private display:any;    
   

    constructor(private _router:Router) {
    
        this.pausa = false;
        this.antialias = true;
    }



    ngOnInit() {


    }
    ngAfterViewInit() {
        // this.display = this.displayHost.nativeElement;
        // console.dir(this.displayHost);
        // console.dir(this.renderer);
      
           // this.display = this.displayHost.nativeElement;
        // console.dir(this.displayHost);
        // console.dir(this.renderer);

    }
    irMain(){
this._router.navigate(["Main"])
    }
    _click(event: any) {
        console.log(event);
        // this.init();
        // this.animate();
    }
    aumentarX() {
  
    }
    tooglePausa() {
        this.pausa = !this.pausa;
    }
    toogleAntialias() {
        this.antialias = !this.antialias;
    }
}