var assert = require('assert');
var Seasons = require('../index');

describe('Seasons', function() {

    describe('constructor', function() {

        it('should return a correct object with seasons data given a year', function() {
            var seasons = new Seasons(2017);

            //hours might be not accurate
            var expected = {
                spring: "2017-03-20",
                summer: "2017-06-21",
                autumn: "2017-09-22",
                winter: "2017-12-21"
            };

            var result = {
                spring: seasons.spring.toISOString().substr(0,10),
                summer: seasons.summer.toISOString().substr(0,10),
                autumn: seasons.autumn.toISOString().substr(0,10),
                winter: seasons.winter.toISOString().substr(0,10),
            };

            assert.equal(JSON.stringify(result), JSON.stringify(expected));
        });

    });
});
