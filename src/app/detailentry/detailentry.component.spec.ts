import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailentryComponent } from './detailentry.component';

describe('DetailentryComponent', () => {
  let component: DetailentryComponent;
  let fixture: ComponentFixture<DetailentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
