import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProvaComponent } from './service-prova.component';

describe('ServiceProvaComponent', () => {
  let component: ServiceProvaComponent;
  let fixture: ComponentFixture<ServiceProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceProvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
