import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeaderFormComponent} from './components/header-form/header-form.component';
import {TweetFormComponent} from './components/tweet-form/tweet-form.component';
import {FormsModule} from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderFormComponent,
        TweetFormComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Tweets Reader'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tweets Reader');
  }));
});
