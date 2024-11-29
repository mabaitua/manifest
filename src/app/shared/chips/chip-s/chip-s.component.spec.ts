import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipSComponent } from './chip-s.component';

describe('ChipSComponent', () => {
  let component: ChipSComponent;
  let fixture: ComponentFixture<ChipSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
