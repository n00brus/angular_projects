import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { allCategories } from '../data/categories.data';
import { Category, OperationTypeCode } from '../models/category.model';
import { Operation } from '../models/operations.model';
import { OperationService } from '../services/operation/operation.service';
@Component({
  selector: 'app-all-operations',
  templateUrl: './all-operations.component.html',
  styleUrls: ['./all-operations.component.css'],
})
export class AllOperationsComponent implements OnInit {
  @Input() allOperations: Operation[];
  @Input() allCategories: Category[];
  @Input() selectedType: OperationTypeCode;

  @Output() deleteOperation = new EventEmitter();
  @Output() mergedOperation = new EventEmitter();
  profileForm = new FormGroup({
    editedDescription: new FormControl(''),
  });
  selectedOperation: Operation = {
    id: -1,
    idCategory: 6,
    value: 343,
    description: 'dsfdsf',
  };
  operations: Operation[] = [];
  categories: Category[] = [];
  categoryid: number = -1; //если -1 то выводит все операции, другие числа буду выводить операции у которых айди== айди категории
  constructor(private operationService: OperationService) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    console.log(this.selectedOperation);

    this.filtercategories();
    this.filteroperations();
    this.categorylist();
  }
  filtercategories() {
    this.categories = this.allCategories.filter(
      (o) => o.type === this.selectedType
    );
  }
  filteroperations() {
    this.operations = [];
    this.categories.forEach((category) => {
      this.allOperations.forEach((operation) => {
        if (category.id == operation.idCategory) {
          this.operations = [...this.operations, operation];
        }
      });
    });
  }
  categorylist() {
    if (+this.categoryid == -1) {
      this.filteroperations();

      return;
    }
    this.operations = [];
    this.allOperations.forEach((operation) => {
      if (this.categoryid == operation.idCategory) {
        this.operations = [...this.operations, operation];
      }
    });
  }
  deleteOperations(ev) {
    this.deleteOperation.emit(ev.target.dataCategoryid);
  }
  selectOperation(ev, operation) {
    this.selectedOperation = operation;
    this.profileForm.setValue({
      editedDescription: this.selectedOperation.description,
    });
  }
  findCategory(operation) {
    let something = this.categories.find((e) => {
      if (e.id == operation.idCategory) {
        return e;
      }
    });

    return something.name;
  }
  getSelectedText() {
    if (this.selectedType == 'profit') {
      return 'Доход';
    }
    if (this.selectedType == 'consumption') {
      return 'Расход';
    }
  }
  mergeOperation(ev) {
    this.selectedOperation.description = this.profileForm.get(
      'editedDescription'
    ).value;

    this.mergedOperation.emit(this.selectedOperation);

    this.selectedOperation = {
      id: -1,
      idCategory: 6,
      value: 343,
      description: 'dsfdsf',
    };
  }
}
