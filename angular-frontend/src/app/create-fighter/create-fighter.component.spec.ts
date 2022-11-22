import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFighterComponent } from './create-fighter.component';

describe('CreateFighterComponent', () => {
  let component: CreateFighterComponent;
  let fixture: ComponentFixture<CreateFighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFighterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
