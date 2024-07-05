import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassareDatiComponent } from './passare-dati.component';

describe('PassareDatiComponent', () => {
  let component: PassareDatiComponent;
  let fixture: ComponentFixture<PassareDatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassareDatiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassareDatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
