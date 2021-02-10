import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Todos } from 'server/collections/todo.collection';



@Component({
  selector: 'app-todos-form',
  templateUrl: 'todos-form.component.html'

})

export class TodosFormComponent implements OnInit {
  addForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {}
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      description: ['', Validators.required],

    });

  }
  addParty(): void {
    if (this.addForm.valid) {
      Todos.insert(this.addForm.value);
      this.addForm.reset();

    }

  }

}
