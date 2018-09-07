import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetFormComponent } from './tweet-form.component';
import { Tweet } from '../../models/tweet';
import { FormsModule } from '@angular/forms';
import {AppComponent} from '../../app.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('TweetFormComponent', () => {
  let component: TweetFormComponent;
  let fixture: ComponentFixture<TweetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetFormComponent ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have default values', () => {
    fixture = TestBed.createComponent(TweetFormComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.tweet.videoUrl).toEqual('');
    expect(app.tweet.comment).toEqual('');
    expect(app.tweet.content).toEqual('');
  });
  it('should change when modify tweet videoUrl and/or comment attributes', () => {
    fixture = TestBed.createComponent(TweetFormComponent);
    const app = fixture.debugElement.componentInstance;
    app.tweet.videoUrl = 'youtube.com/testing';
    expect(app.tweet.content).toEqual('youtube.com/testing');
    app.tweet.videoUrl = '';
    app.tweet.comment = 'Hello World';
    expect(app.tweet.content).toEqual('Hello World');
    app.tweet.videoUrl = 'youtube.com/testing';
    expect(app.tweet.content).toEqual('Hello World youtube.com/testing');
  });
});
