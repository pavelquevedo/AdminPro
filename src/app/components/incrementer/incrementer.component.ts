import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 


@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent implements OnInit {

  @Input() progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() 
  progressOutput: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.progress = 100;
      this.progressOutput.emit(100);
      return;
    }

    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      this.progressOutput.emit(0);
      return;
    }

    this.progress += value;
    this.progressOutput.emit(this.progress);
  }

  onChange(value: number){
    if(value >= 100){
      this.progress = 100;
    }else if(value <= 0){
      this.progress = 0;
    }

    this.progressOutput.emit(this.progress);
  }

}
