import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhliDialogComponent } from './ohli-dialog.component';

describe('OhliDialogComponent', () => {
  let component: OhliDialogComponent;
  let fixture: ComponentFixture<OhliDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhliDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhliDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
