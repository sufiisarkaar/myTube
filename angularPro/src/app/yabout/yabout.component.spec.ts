import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YaboutComponent } from './yabout.component';

describe('YaboutComponent', () => {
  let component: YaboutComponent;
  let fixture: ComponentFixture<YaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
