import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFormComponent } from './header-form.component';

describe('HeaderFormComponent', () => {
  let component: HeaderFormComponent;
  let fixture: ComponentFixture<HeaderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFormComponent);
    component = fixture.componentInstance;
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
});
