import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayedComponent } from './video-played.component';

describe('VideoPlayedComponent', () => {
  let component: VideoPlayedComponent;
  let fixture: ComponentFixture<VideoPlayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPlayedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
