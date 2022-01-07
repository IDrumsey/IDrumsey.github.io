import { Component, OnInit, Input, AfterViewInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      if(this.icon){
        let styles = this.icon.nativeElement.style
        styles.position = "absolute"
        let width = 35
        styles.width = `${width}px`
        styles.right = `-${width/4}px`
        styles.top = `-${width/2}px`
        styles.opacity = "1"
      }
  }

  @Input() title: string
  @Input() description: string

  @ContentChild('icon') icon: ElementRef
}
