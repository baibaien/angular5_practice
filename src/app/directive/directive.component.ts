import {
  Component,
  Directive,
  ElementRef,
  OnInit,
  Input,
  HostListener,
  TemplateRef,
  ViewContainerRef, ViewRef
} from '@angular/core';


@Directive({
  selector: '[popup]'
})
export class Popup {
  @Input() defaultColor: string;
  @Input('popup') hightlightColor: string;

  constructor(private el: ElementRef) {
    console.log('Directive bound');
    el.nativeElement.style.background = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.hightlightColor || this.defaultColor || 'pink');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('yellow');
  }

  private highlight(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {
  @Input() set unless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  public hasView = false;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {

  }
}

@Directive({
  selector: '[tooltip]',
  // host: {
  //   '(click)': 'displayMessage()'
  // }
})
export class Tooltip {
  // @Input() set tooltip(content: string) {
  //   this.viewContainer.createEmbeddedView(this.templateRef);
  // }
  @Input() tooltip:string;
  private msg: string;
  private view: ViewRef;
  private node;
  private nodeText;
  constructor(
    // private viewContainer: ViewContainerRef,
    //           private templateRef: TemplateRef<any>,
              private el: ElementRef) {
    console.log(this.tooltip);

    // this.viewContainer.createEmbeddedView(this.templateRef);
    // this.displayMessage();
  }
  displayMessage(): void{
    alert(this.msg);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.node = document.createElement('span');
    this.nodeText = document.createTextNode(this.tooltip);
    this.node.appendChild(this.nodeText);
    this.node.setAttribute('class', 'tooltip');
    this.el.nativeElement.setAttribute('class', 'tip-wrapper');
    this.el.nativeElement.appendChild(this.node);
    // this.viewContainer.createEmbeddedView(this.templateRef);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.removeChild(this.node);
  }
  // @HostListener('mouseenter') onMouseEnter() {
  //   console.log(1)
  // }
}


@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})


export class DirectiveComponent implements OnInit {
  public color = 'green';
  public condition = true;

  constructor() {
  }

  ngOnInit() {
  }

}
