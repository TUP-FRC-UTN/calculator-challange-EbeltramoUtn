import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcOperatorComponent } from './calc-operator.component';

describe('CalcOperatorComponent', () => {
  let component: CalcOperatorComponent;
  let fixture: ComponentFixture<CalcOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
