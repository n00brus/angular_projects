import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  profileForm = new FormGroup({
    speed: new FormControl(''),
    outsideTemperature: new FormControl(''),
    tires: new FormControl(''),
    acc: new FormControl(''),
    heat: new FormControl(''),
  });
  miles: number;
  maxcharge: number = 400;
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });
  constructor() {
    this.profileForm.setValue({
      acc: true,
      speed: 55,
      outsideTemperature: 20,
      tires: 19,
      heat: false,
    });
    this.countmiles();
  }

  ngOnInit(): void {}
  countmiles(): void {
    // this.profileForm.setValue('miles') = this.profileForm.get('speed').value + this.profileForm.get('outsideTemperature').value;
    console.log(this.profileForm.value);
    this.miles =
      this.maxcharge -
      this.profileForm.get('speed').value * 3 +
      this.profileForm.get('outsideTemperature').value * 2 -
      +this.profileForm.get('tires').value * 3;
    if (
      this.profileForm.get('acc').value == true &&
      this.profileForm.get('outsideTemperature').value > 10
    ) {
      this.miles -= 10;
    }
    if (
      this.profileForm.get('heat').value == true &&
      this.profileForm.get('outsideTemperature').value <= 10
    ) {
      this.miles -= 25;
    }
  }

  onSubmit(): void {}
}
