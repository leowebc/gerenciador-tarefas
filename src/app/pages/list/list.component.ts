import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';  

interface Task { 
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {

  tasks = signal<Task[]> ([
    {title: 'item 1', completed: false},
    {title: 'item 2', completed: false},
    {title: 'item 3', completed: false},
    {title: 'item 4', completed: false},
    {title: 'item 5', completed: false},
    {title: 'item 6', completed: true},
    {title: 'item 7', completed: true},
    {title: 'item 8', completed: true},
    {title: 'item 9', completed: true},
    {title: 'item 10', completed: true},
  ])

  completedTasks = computed(() => this.tasks().filter(task => task.completed));

  pendingTasks = computed(() => this.tasks().filter(task => !task.completed));

 }
