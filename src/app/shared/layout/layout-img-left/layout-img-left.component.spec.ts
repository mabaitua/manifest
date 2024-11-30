import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutImgLeftComponent } from './layout-img-left.component';

describe('LayoutImgLeftComponent', () => {
  let component: LayoutImgLeftComponent;
  let fixture: ComponentFixture<LayoutImgLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutImgLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutImgLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
