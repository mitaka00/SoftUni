import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureEditComponent } from './furniture-edit.component';

describe('FurnitureEditComponent', () => {
  let component: FurnitureEditComponent;
  let fixture: ComponentFixture<FurnitureEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
