import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetContentComponent } from './tweet-content.component';
import * as _ from 'underscore';
import {RelativeDatePipe} from '../../pipes/relative-date.pipe';
import {MatCardModule, MatFormFieldModule} from '@angular/material';

describe('TweetContentComponent', () => {
  let component: TweetContentComponent;
  let fixture: ComponentFixture<TweetContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TweetContentComponent,
        RelativeDatePipe,
      ],
      imports: [
        MatCardModule,
        MatFormFieldModule
      ]
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
