import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalloonMenuComponent } from './balloon-menu.component';

describe('BalloonMenuComponent', () => {
  let component: BalloonMenuComponent;
  let fixture: ComponentFixture<BalloonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalloonMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalloonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
