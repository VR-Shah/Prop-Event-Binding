import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveComponentComponent } from './inactive-component.component';

describe('InactiveComponentComponent', () => {
  let component: InactiveComponentComponent;
  let fixture: ComponentFixture<InactiveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
