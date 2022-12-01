import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPlayComponent } from './html-play.component';

describe('HtmlPlayComponent', () => {
  let component: HtmlPlayComponent;
  let fixture: ComponentFixture<HtmlPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlPlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
