import faker from 'faker';
import config from './config';

module.exports = {
  'Edit document': (browser) => {
    browser
     .url(config.url)
     .click('#login')
     .setValue('Input[name=identifier]', 'awa@awa.com')
     .setValue('Input[name=password]', 'awa')
     .click('Input[type=submit]')
     .pause(5000)
     .assert.urlEquals('http://localhost:3000/')
     .waitForElementVisible('body')
     .assert.elementPresent('.card')
     .click('.card-action > .right > .edit')
     .pause(1000)
     .waitForElementVisible('body')
     .clearValue('#title')
     .clearValue('#content')
     .setValue('#title', 'New Title')
     .setValue('#content', 'New Content Here')
     .click('#access option[value="private"]')
     .click('Input[type="submit"]')
     .end();
  }
};
