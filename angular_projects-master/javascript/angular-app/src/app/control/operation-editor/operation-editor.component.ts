import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { OperationTypeCode } from '../models/category.model';
import { Operation, OperationService } from '../models/operaion-editor.model';

@Component({
  selector: 'app-operation-editor',
  templateUrl: './operation-editor.component.html',
  styleUrls: ['./operation-editor.component.css'],
})
export class OperationEditorComponent implements OnInit {
  @Input() selectedCategory: string;
  @Input() selectedType: OperationTypeCode;
  @Output() newOperation = new EventEmitter();
  money: number;
  description: string;
  newOperationObject: Operation;
  good: string;
  constructor(private operationService: OperationService) {}
  ngOnChanges(): void {}
  ngOnInit(): void {}
  addOperation(): void {
    this.newOperationObject = {
      type: this.selectedType,
      category: this.selectedCategory,
      value: this.money,
      description: this.description,
    };
    this.newOperation.emit(this.newOperationObject);

    this.operationService.addOperation(this.newOperationObject);
  }
}
