import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditonepostComponent } from './editonepost.component';

describe('EditonepostComponent', () => {
  let component: EditonepostComponent;
  let fixture: ComponentFixture<EditonepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditonepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditonepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
