import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardCompleteComponent } from './wizard-complete.component';

describe('WizardCompleteComponent', () => {
  let component: WizardCompleteComponent;
  let fixture: ComponentFixture<WizardCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
