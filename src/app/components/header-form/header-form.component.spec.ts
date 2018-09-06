import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mockTwitterFactory } from '../../models/mock/tweet-content.data.mock';

import { HeaderFormComponent } from './header-form.component';
import { TwitterService } from '../../services/twitter.service';

describe('HeaderFormComponent', () => {
  let component: HeaderFormComponent;
  let fixture: ComponentFixture<HeaderFormComponent>;
  let twitterService: TwitterService;
  let twitterServiceSearchSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFormComponent);
    component = fixture.componentInstance;

    twitterService = fixture.debugElement.injector.get(TwitterService);
    twitterServiceSearchSpy = spyOn(twitterService, 'search').and.returnValue(mockTwitterFactory());

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have default hashtag value as #nowPlaying', () => {
    expect(component.search.hashtag).toEqual('nowPlaying');
  });
  it('should have default city value as San Francisco', () => {
    expect(component.search.city).toEqual('San Francisco');
  });
  it(`should call twitter service`, async(() => {
    expect(twitterServiceSearchSpy).toHaveBeenCalledWith('nowPlaying AND (youtube.com or youtu.be)');
  }));
});
