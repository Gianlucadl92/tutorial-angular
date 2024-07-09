import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunzioniPipeComponent } from './funzioni-pipe.component';

describe('FunzioniPipeComponent', () => {
  let component: FunzioniPipeComponent;
  let fixture: ComponentFixture<FunzioniPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunzioniPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunzioniPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
