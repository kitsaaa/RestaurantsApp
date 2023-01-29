import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditapostComponent } from './editapost.component';

describe('EditapostComponent', () => {
  let component: EditapostComponent;
  let fixture: ComponentFixture<EditapostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditapostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditapostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
