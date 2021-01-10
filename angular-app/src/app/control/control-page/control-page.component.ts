import { Component, OnInit } from '@angular/core';
import { CategoryService, OperationTypeCode } from '../models/category.model';
import { Operation, OperationService } from '../models/operaion-editor.model';

@Component({
  selector: 'app-control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.scss'],
  providers: [CategoryService, OperationService],
})
export class ControlPageComponent implements OnInit {
  selectedTypeCode: OperationTypeCode = 'profit';
  selectedCategory = 'Зарплата';
  newOperation: Operation;
  constructor() {}

  ngOnInit(): void {}

  changeSeletcedType(type: OperationTypeCode) {
    this.selectedTypeCode = type;
  }
  changeSelectedCategory(name: string) {
    this.selectedCategory = name;
  }
  addedNewOperation(name: Operation) {
    this.newOperation = name;
  }
}
