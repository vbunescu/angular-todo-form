import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { Todo } from '../todo-list/todo.interface';

import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
  FormControl,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Output() todoSubmit = new EventEmitter<Todo>();
  @ViewChild('formDirective') private formDirective: NgForm;
  todoForm: FormGroup; // am creat variabila todoForm e tip FormGroup pe care o
  // importam din biblioteca forms dupa care o intializam in ngOnInit
  minDate = new Date();
  // adaugam campurile si initializam controale
  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(3)]],
      author: [null, [Validators.required, Validators.minLength(3)]],
      priority: ['1', Validators.required],
      date: [new Date(), Validators.required],
    });
  }
  ngOnInit(): void {
    // this.todoForm = new FormGroup({
    //   title: new FormControl(null, [
    //     Validators.required,
    //     Validators.minLength(3),
    //   ]),
    //   description: new FormControl(null, [
    //     Validators.required,
    //     Validators.minLength(3),
    //   ]),
    //   author: new FormControl(null, [
    //     Validators.required,
    //     Validators.minLength(3),
    //   ]),
    //   priority: new FormControl('1', [Validators.required]),
    //   date: new FormControl(new Date(), Validators.required),
    // });
  } // de creat forma in constructor

  onSubmit(): void {
    if (this.todoForm.valid) {
      console.log('Form', this.todoForm.value);
    }
    this.todoSubmit.emit(
      //   {
      //   title: this.todoForm.value.title,
      //   description: this.todoForm.value.description,
      //   id: `${uuidv4()}`,
      //   author: this.todoForm.value.author,
      //   priority: this.todoForm.value.priority,
      //   date: this.todoForm.value.date,
      // } // poate fi scris prescurtat
      this.todoForm.value
    );
    // this.todoForm.reset();
    this.formDirective.resetForm();
  } // transmitem valorile in todoForm
}
