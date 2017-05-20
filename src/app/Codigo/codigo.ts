// <reference path="../node_modules/clone/clone.d.ts" />
// <reference path="../node_modules/ng2-dragula/ng2-dragula.d.ts" />
import { Component, Input, Inject, ViewEncapsulation, EventEmitter, OnChanges, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import  'prismjs';
declare var Prism: any;
declare var Notification: any;

@Component({
    selector: "codigo",
    styles:[`.device-row{
        border-style: solid;
    border-color: grey;
    /*padding: 15px 5px;*/
    border-width: 2px;
    box-sizing: border-box;
    /*margin-bottom: 10px;*/
}

/**
 * okaidia theme for JavaScript, CSS and HTML
 * Loosely based on Monokai textmate theme by http://www.monokai.nl/
 * @author ocodia
 */
.codigo{
    background: #272822;
}
code[class*="language-"],
pre[class*="language-"] {
	color: #f8f8f2;
	background: none;
	text-shadow: 0 1px rgba(0, 0, 0, 0.3);
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #272822;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: slategray;
}

.token.punctuation {
	color: #f8f8f2;
}

.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
	color: #f92672;
}

.token.boolean,
.token.number {
	color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
	color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function {
	color: #e6db74;
}

.token.keyword {
	color: #66d9ef;
}

.token.regex,
.token.important {
	color: #fd971f;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
    `],
    // styleUrls: ["app/Codigo/codigo.css"],
    template: `<pre class="codigo">
    <code class="language-javascript" [innerHtml]="codigo">        
    </code>
    </pre>`,
    encapsulation: ViewEncapsulation.None
})
export class Codigo {

    _codigo: string = `        
        class Codigo {
            codeHtml: string = "p { color : red }";
        }
    `;

    @Input()
    get codigo(): string {
        return this._codigo;
    }
    set codigo(code: string) {
        this._codigo = Prism.highlight(code, Prism.languages.javascript);
    }


    constructor() {   
        this.codigo = this._codigo; 
    }



}