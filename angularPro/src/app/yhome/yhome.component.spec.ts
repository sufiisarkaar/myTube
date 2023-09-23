import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YhomeComponent } from './yhome.component';

describe('YhomeComponent', () => {
  let component: YhomeComponent;
  let fixture: ComponentFixture<YhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
