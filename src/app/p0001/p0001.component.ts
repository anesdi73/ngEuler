import { Component, OnInit } from '@angular/core';
import { P0001Service } from './p0001.service';

@Component({
  selector: 'app-p0001',
  templateUrl: './p0001.component.html',
  styleUrls: ['./p0001.component.css']
})
export class P0001Component implements OnInit {
  result: number;
  constructor(private calculateService: P0001Service) {}

  ngOnInit() {}
  calculate() {
    const upperLimit = 1000;
    this.result = this.calculateService.calculate(upperLimit);
  }
}
