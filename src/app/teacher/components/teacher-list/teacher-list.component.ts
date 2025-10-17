import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() recivedName!: string;
  @Output() notify = new EventEmitter();


  todos = [
    { id: 1, title: "Learn Angular", completed: false },
    { id: 2, title: "Fix bugs", completed: true },
    { id: 3, title: "Practice JS", completed: false },
  ];

  ngOnInit(): void {
    console.log('ngOnint loaded');

    this.formatValue('String');

    const completeTodos = this.todos.filter(s => s.completed)
    console.log(completeTodos);

    const pendingTodos = this.todos.filter(s => !s.completed);
    console.log(pendingTodos);

    const sentence = "hello world from angular";

    const captilizefirstWord = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    console.log(captilizefirstWord);

    const newWord = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    console.log(newWord);

    const users = [
      { id: 1, name: 'Ali' },
      { id: 2, name: 'Sara' },
      { id: 3, name: 'Mehmood' }
    ];

    const convertObj = users.reduce((acc: Record<number,any>,user) => {
      acc[user.id] = user
      return acc;
    },{})
   console.log(convertObj);


  }


  sendMessage() {
    this.notify.emit(`Heelo : ${this.recivedName}`)
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnDestroy(): void {
    console.log('Component Destroy');

  }


  formatValue(value: number | string): void {
    if (typeof value === 'number') {
      console.log(value.toFixed(2));
    } else {
      console.log(value.toUpperCase());

    }



  }








}
