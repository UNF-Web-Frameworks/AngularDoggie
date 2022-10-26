import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogcardComponent } from './dogcard.component';

describe('DogcardComponent', () => {
  let component: DogcardComponent;
  let fixture: ComponentFixture<DogcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
