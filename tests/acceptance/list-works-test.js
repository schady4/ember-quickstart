import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list works');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should redirect to works route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/works', 'should redirect automatically');
  });
});

test('should link to information about the company.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function() {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should filter the list of works by category.', function (assert) {
  visit('/');
  fillIn('.list-filter input', 'artwork');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function() {
    assert.equal(find('.listing').length, 1, 'should show 1 listing');
    assert.equal(find('.listing .category:contains("Artwork")').length, 1, 'should contain 1 listing with category Artwork');
  });
});

test('should show details for a specific works', function (assert) {
  visit('/works');
  click('a:contains("Down East Magazine")');
  andThen(function() {
    assert.equal(currentURL(), '/works/down-east-magazine', 'should navigate to show route');
    assert.equal(find('.show-listing h2').text(), "Down East Magazine", 'should list work title');
    assert.equal(find('.description').length, 1, 'should list a description of the works');
  });
});
