import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationLoginComponent } from './animation-login.component';

describe('AnimationLoginComponent', () => {
  let component: AnimationLoginComponent;
  let fixture: ComponentFixture<AnimationLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
