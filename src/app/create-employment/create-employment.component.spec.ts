import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmploymentComponent } from './create-employment.component';

describe('CreateEmploymentComponent', () => {
  let component: CreateEmploymentComponent;
  let fixture: ComponentFixture<CreateEmploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEmploymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
