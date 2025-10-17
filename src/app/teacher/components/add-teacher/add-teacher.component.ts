import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit,OnChanges,OnDestroy {


  name: string = 'Send a string Value child components';

  dynamicForm!: FormGroup;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.dynamicForm = this.fb.group({
      skills: this.fb.array([this.fb.control('')])
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges',changes);
  }

  ngOnDestroy(): void {
    console.log('Component Destroy');
    
  }

  get skills(){
    return this.dynamicForm.get('skills') as FormArray;
  }

  addSkill(){
    this.skills.push(this.fb.control(''));
    console.log(this.skills.value);
    
  }

  removeSkill(i:number){
   this.skills.removeAt(i);
  }


  onNotify(msg: string) {
  console.log('Child says:', msg);
  this.name = msg;
}

}
