import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadoraimc',
  templateUrl: './calculadoraimc.component.html',
  styleUrls: ['./calculadoraimc.component.css']
})
export class CalculadoraimcComponent {

  weight: number = 0;
  height: number = 0;
  result: number = 0;

  
  calculate() {
    const heightMeters = this.height / 100;
    const bmi = this.weight / (heightMeters * heightMeters);
    this.result = parseFloat(bmi.toFixed(2));
  }
}
