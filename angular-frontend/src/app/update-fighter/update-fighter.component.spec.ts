import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFighterComponent } from './update-fighter.component';

describe('UpdateFighterComponent', () => {
  let component: UpdateFighterComponent;
  let fixture: ComponentFixture<UpdateFighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFighterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
