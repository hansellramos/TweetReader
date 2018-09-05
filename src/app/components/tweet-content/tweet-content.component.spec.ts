import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetContentComponent } from './tweet-content.component';
import * as _ from 'underscore';

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
  it('should have tweetResult attribute', async(() => {
    expect(_.has(component, 'tweetContent')).toBeTruthy();
  }));
});
