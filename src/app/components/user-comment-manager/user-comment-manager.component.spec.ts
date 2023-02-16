import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCommentManagerComponent } from './user-comment-manager.component';

describe('UserCommentManagerComponent', () => {
  let component: UserCommentManagerComponent;
  let fixture: ComponentFixture<UserCommentManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCommentManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCommentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
