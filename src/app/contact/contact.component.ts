import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[ trigger('load', [
    transition(':enter', [
        style({ transform: 'scaleY(0)' }),
        animate(300, style({ transform: 'scaleY(1)' }))
    ]),
    transition(':leave', [
        style({ transform: 'scaleY(1)'  }),
        animate(300, style({ transform: 'scaleY(0)' }))
    ])

])
]
})

export class ContactComponent implements OnInit {
desc = '';
isSubmited:boolean = false;
submitClick:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(input:NgForm){
    input.valid?this.isSubmited = true: this.isSubmited = false;
    setTimeout(()=>{
      this.isSubmited = false;
    }, 5000);
    input.valid?(input.form.reset(),this.submitClick = false):this.submitClick = true;
  }
}
