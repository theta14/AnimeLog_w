import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioDialogComponent } from './studio-dialog.component';

describe('StudioDialogComponent', () => {
  let component: StudioDialogComponent;
  let fixture: ComponentFixture<StudioDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudioDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
