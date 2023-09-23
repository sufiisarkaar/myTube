import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YfooterComponent } from './yfooter.component';

describe('YfooterComponent', () => {
  let component: YfooterComponent;
  let fixture: ComponentFixture<YfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
