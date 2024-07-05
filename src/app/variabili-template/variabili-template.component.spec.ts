import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariabiliTemplateComponent } from './variabili-template.component';

describe('VariabiliTemplateComponent', () => {
  let component: VariabiliTemplateComponent;
  let fixture: ComponentFixture<VariabiliTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VariabiliTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariabiliTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
