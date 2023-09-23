import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YaffiliateComponent } from './yaffiliate.component';

describe('YaffiliateComponent', () => {
  let component: YaffiliateComponent;
  let fixture: ComponentFixture<YaffiliateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YaffiliateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YaffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
