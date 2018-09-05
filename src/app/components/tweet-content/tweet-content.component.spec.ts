import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetContentComponent } from './tweet-content.component';

describe('TweetContentComponent', () => {
  let component: TweetContentComponent;
  let fixture: ComponentFixture<TweetContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
