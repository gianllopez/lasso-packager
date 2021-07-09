import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMessageComponent } from './slide-message.component';

describe('SlideMessageComponent', () => {
  let component: SlideMessageComponent;
  let fixture: ComponentFixture<SlideMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
