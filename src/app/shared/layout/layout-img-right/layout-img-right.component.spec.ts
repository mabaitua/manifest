import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutImgRightComponent } from './layout-img-right.component';

describe('LayoutImgRightComponent', () => {
  let component: LayoutImgRightComponent;
  let fixture: ComponentFixture<LayoutImgRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutImgRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutImgRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
