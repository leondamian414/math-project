import { Component } from '@angular/core';

@Component({
  selector: 'app-math-project',
  templateUrl: './math-project.component.html',
  styleUrls: ['./math-project.component.css']
})
export class MathProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.calculateArea();
  }

  calculateArea(){
    const width = parseInt(prompt('Enter the width of the rectangle'));
    const height = parseInt(prompt('Enter the height of the rectangle'));
    const area = width * height;
    alert(`The area of the rectangle is ${area}`);
  }
}
