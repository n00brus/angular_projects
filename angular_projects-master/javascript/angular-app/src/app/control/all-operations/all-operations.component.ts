import { Component, OnInit, Input } from '@angular/core';
import {
  Category,
  OperationTypeCode,
  CategoryService,
} from '../models/category.model';
import { Operation, OperationService } from '../models/operaion-editor.model';
@Component({
  selector: 'app-all-operations',
  templateUrl: './all-operations.component.html',
  styleUrls: ['./all-operations.component.css'],
})
export class AllOperationsComponent implements OnInit {
  @Input() selectedType: OperationTypeCode;
  allOperations: Operation[] = this.operationService.operations;
  @Input() newOperation: Operation;
  operations: Operation[] = [];
  constructor(private operationService: OperationService) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    // if (this.newOperation) {
    //   this.allOperations = [...this.allOperations, this.newOperation];
    // }
    
    this.allOperations = this.operationService.operations;
    this.filterCategories();
  }
  filterCategories() {
    
    this.operations = this.allOperations.filter(
      (c) => c.type === this.selectedType
    );
    

    // this.categories.forEach(category => {
    //   console.log(category.operationsInfo[0].value);

    // });
  }
}
