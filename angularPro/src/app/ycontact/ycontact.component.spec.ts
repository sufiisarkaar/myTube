import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YcontactComponent } from './ycontact.component';

describe('YcontactComponent', () => {
  let component: YcontactComponent;
  let fixture: ComponentFixture<YcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
