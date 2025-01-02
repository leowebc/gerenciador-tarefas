<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';
import { Predicate, DebugElement } from '@angular/core';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve listar as tarefas', () => {
    
    /*
    const todoSection = fixture.debugElement.query(By.css('#todo-list'));
    expect(todoSection).toBeTruthy();
    const ulEl = todoSection.query(By.css('ul'));   
    //const ulEl = fixture.debugElement.query(By.css('ul'));
    expect(ulEl).toBeTruthy();    
    const liEls = ulEl.queryAll(By.css('li'));
    expect(liEls.length).toBe(3);*/


    //*****************Forma 2************************/
    /*
    const todoSection = fixture.debugElement.query(By.css('#todo-list'));
    expect(todoSection).toBeTruthy();
    const todoItems = todoSection.query(By.css('ul')).queryAll(By.css('li'));
    expect(todoItems.length).toBe(3);

    const completedSection = fixture.debugElement.query(By.css('#completed-list'));
    expect(completedSection).toBeTruthy();
    const completedItems = completedSection.query(By.css('ul')).queryAll(By.css('li'));
    expect(completedItems.length).toBe(3);*/



    


    const todoSection = fixture.debugElement.query(By.css('[data-testid="todo-list"]'));
    expect(todoSection).toBeTruthy();
    const todoItems = todoSection.queryAll(By.css('[data-testid="todo-list-item"]'));
    expect(todoItems.length).toBe(3);

    const completedSection = fixture.debugElement.query(By.css('[data-testid="completed-list"]'));
    expect(completedSection).toBeTruthy();
    const completedItems = completedSection.queryAll(By.css('[data-testid="completed-list-item"]'));
    expect(completedItems.length).toBe(3);
    
  });
});
function yall(arg0: Predicate<DebugElement>) {
  throw new Error('Function not implemented.');
}

=======
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve listar as tarefas', () => {
    
    const todoSection = fixture.debugElement.query(By.css('#todo-list'));

    expect(todoSection).toBeTruthy();

    const ulEl = todoSection.query(By.css('ul'));    
    
    
    //const ulEl = fixture.debugElement.query(By.css('ul'));

    expect(ulEl).toBeTruthy();
    
    const liEls = ulEl.queryAll(By.css('li'));

    expect(liEls.length).toBe(3);

    
  });
});
>>>>>>> origin/ListComponent
