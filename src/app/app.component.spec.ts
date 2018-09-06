import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderFormComponent } from './components/header-form/header-form.component';
import { TweetFormComponent } from './components/tweet-form/tweet-form.component';
import { FormsModule } from '@angular/forms';
import {TweetResultComponent} from './components/tweet-result/tweet-result.component';
import {TweetContentComponent} from './components/tweet-content/tweet-content.component';
import {RelativeDatePipe} from './pipes/relative-date.pipe';
describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderFormComponent,
        TweetFormComponent,
        TweetResultComponent,
        TweetContentComponent,
        RelativeDatePipe,
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));
  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
  it(`should have as title 'Tweets Reader'`, async(() => {
    expect(component.title).toEqual('Tweets Reader');
  }));
});
