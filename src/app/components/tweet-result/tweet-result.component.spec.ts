import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetResultComponent } from './tweet-result.component';
import * as _ from 'underscore';
import {TweetContentComponent} from '../tweet-content/tweet-content.component';
import {RelativeDatePipe} from '../../pipes/relative-date.pipe';
import {MatCardModule} from '@angular/material';

describe('TweetResultComponent', () => {
  let component: TweetResultComponent;
  let fixture: ComponentFixture<TweetResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TweetResultComponent,
        TweetContentComponent,
        RelativeDatePipe
      ],
      imports: [
        MatCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
