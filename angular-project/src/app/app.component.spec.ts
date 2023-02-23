import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should test add', () => {
    const first = 5;
    const second = 10;
    component.firstNumber = first;
    component.secondNumber = second;
    component.add();
    expect(component.result).toEqual(first + second);
  });

  it('should test subtract', () => {
    const first = 5;
    const second = 10;
    component.firstNumber = first;
    component.secondNumber = second;
    component.subtract();
    expect(component.result).toEqual(first - second);
  });
});
