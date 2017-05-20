
import "pako";
//import * as pako from "pako";
declare var unescape: any;
declare var escape: any;
declare var pako: any;
export class Compression {

  constructor() {

  }
  //     var object={};
  chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  //   function InvalidCharacterError(message) {
  //     this.message = message;
  //   }
  //   InvalidCharacterError.prototype = new Error;
  //   InvalidCharacterError.prototype.name = 'InvalidCharacterError';
  compressBody(body: string): any {
    if (body == null || body == undefined) {
      return body;
    }
    return pako.gzip(this.btoa(unescape(encodeURIComponent(body))),{ to: "string" });    
  }

  compress(strng: string): string {
    if (strng == null || strng == undefined) {
      return strng;
    }
    return encodeURIComponent(
      this.btoa(
        pako.gzip(
          this.btoa(
            unescape(encodeURIComponent(strng))),
          { to: "string" }))
    );
  }
  decompress(strng: string): string {
    if (strng == null || strng == undefined) {
      return strng;
    }
    return decodeURIComponent(escape(this.atob(pako.ungzip(<string>this.atob(decodeURIComponent(strng))))));  
  }

  private btoa(input: any) {
    let str = String(input);
    for (
      // initialize result and counter
      var block: any, charCode: any, idx = 0, map = this.chars, output = '';
      // if the next str index does not exist:
      //   change the mapping table to "="
      //   check if d has no fractional digits
      str.charAt(idx | 0) || (map = '=', idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
    ) {
      charCode = str.charCodeAt(idx += 3 / 4);
      if (charCode > 0xFF) {
        // throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      }
      block = block << 8 | charCode;
    }
    return output;
  }

  // decoder
  // [https://gist.github.com/1020396] by [https://github.com/atk]

  private atob(input: any) {
    let str = String(input).replace(/=+$/, '');
    if (str.length % 4 == 1) {
      //ExceptionHandler.call("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
      // initialize result and counters
      var bc = 0, bs: any, buffer: any, idx = 0, output = '';
      // get next character
      buffer = str.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = this.chars.indexOf(buffer);
    }
    return output;
  }



  // var xx="http://jsfiddle.net/9yH7M/543/ñ♫";

  // var ziped =pako.gzip(xx,{to:"base64"}); 
  // var stringZiped=pako.gzip("http://jsfiddle.net/9yH7M/543/ñññ",{to:"string"});
  // //console.log(ziped);
  // //console.log(stringZiped);
  // //console.log(object.btoa(stringZiped));
  // var enc=object.btoa(unescape(encodeURIComponent(stringZiped)));
  // //console.log(enc);
  // //console.log(object.atob(enc));
  // //console.log(escape(object.atob(enc)));
  // //console.log(decodeURIComponent(escape(object.atob(enc))));
  // console.log(unescape(encodeURIComponent(xx)));
  // console.log(object.btoa(unescape(encodeURIComponent(xx))));
  // console.log(pako.gzip(object.btoa(unescape(encodeURIComponent(xx))),{to:"string"}));

  // console.log(
  // encodeURIComponent(
  // object.btoa(pako.gzip(object.btoa(unescape(encodeURIComponent(xx))),{to:"string"}))
  // ));

  // H4sIAAAAAAAAA0v0CDJIdskv8zEqqIrKzcmOcq%2FI8ck1zUlxtjBNDU03Dgm2MPRz8S0rN%2FfIzE0stgUALnvEljAAAAA%3D




}