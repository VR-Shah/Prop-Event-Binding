import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferanceComponent } from './template-referance.component';

describe('TemplateReferanceComponent', () => {
  let component: TemplateReferanceComponent;
  let fixture: ComponentFixture<TemplateReferanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReferanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
