import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;

  public add(): void {
    this.result = this.firstNumber + this.secondNumber;
  }

  public subtract(): void {
    this.result = this.firstNumber - this.secondNumber;
  }

  public clean(): void {
    this.result = 0;
    this.firstNumber = 0;
    this.secondNumber = 0;
  }
}
