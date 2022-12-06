import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAboutSportsmanComponent } from './info-about-sportsman.component';

describe('InfoAboutSportsmanComponent', () => {
  let component: InfoAboutSportsmanComponent;
  let fixture: ComponentFixture<InfoAboutSportsmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAboutSportsmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAboutSportsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
