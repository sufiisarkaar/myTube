import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YheaderComponent } from './yheader.component';

describe('YheaderComponent', () => {
  let component: YheaderComponent;
  let fixture: ComponentFixture<YheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
