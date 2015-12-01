import QUnit from 'steal-qunit';
import * as FileRouter from './file-router';
import $ from 'jquery';
import _ from 'ramda';

var vm;

QUnit.module('file-router', {
  beforeEach: function(){
    vm = new FileRouter.VM({});
  }
});

QUnit.test('how to test drag and drop?', function(assert) {

});