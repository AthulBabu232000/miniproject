import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygenlevelComponent } from './oxygenlevel.component';

describe('OxygenlevelComponent', () => {
  let component: OxygenlevelComponent;
  let fixture: ComponentFixture<OxygenlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OxygenlevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OxygenlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
