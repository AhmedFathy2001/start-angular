import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  name:string='';
  description:string='';
  imgSrc:string='';
  constructor() {
   }

  ngOnInit(): void {
  }
  //.nextElementSibling
getAttrName(event: { target: any; }){
 let target = event.target == '[object HTMLElement]' ? event.target.closest('div.portfolio-item-caption') : event.target;
this.name = target.nextElementSibling.dataset.name;
this.description = target.nextElementSibling.dataset.description;
this.imgSrc =  target.nextElementSibling.getAttribute('src');
this.triggerFalseClick();
}
  @ViewChild('title') title!: ElementRef; 
  @ViewChild('modalImg') modalImg!: ElementRef; 
  @ViewChild('desc') desc!: ElementRef; 
ngAfterViewInit() {
  this.title.nativeElement.innerHTML = this.name;
  this.desc.nativeElement.innerHTML = this.description;
  this.modalImg.nativeElement.setAttribute('src',`${this.imgSrc}`);
}
@ViewChild('modalBtn') modalBtn!: ElementRef;

triggerFalseClick() {
    let el: HTMLElement = this.modalBtn.nativeElement;
    el.click();
}
}
