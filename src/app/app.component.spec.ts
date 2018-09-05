import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderFormComponent } from './components/header-form/header-form.component';
import { TweetFormComponent } from './components/tweet-form/tweet-form.component';
import { FormsModule } from '@angular/forms';
describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

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
