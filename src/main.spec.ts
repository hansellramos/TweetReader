import { environment } from './environments/environment';
import * as _ from 'underscore';

describe('Env Variables Test', () => {
  it('Environment should have apis property', () => {
    expect(_.has(environment, 'apis')).toBeTruthy();
  });
  it('Environment should have apis.twitter property', () => {
    expect(_.has(environment.apis, 'twitter')).toBeTruthy();
  });
  it('Environment should have apis.twitter.account property', () => {
    expect(_.has(environment.apis.twitter, 'account')).toBeTruthy();
  });
  it('Environment should have apis.twitter.user property', () => {
    expect(_.has(environment.apis.twitter, 'user')).toBeTruthy();
  });
  it('Environment should have apis.twitter.pwd property', () => {
    expect(_.has(environment.apis.twitter, 'pwd')).toBeTruthy();
  });
  it('Environment should have apis.twitter.key property', () => {
    expect(_.has(environment.apis.twitter, 'key')).toBeTruthy();
  });
});
