# Seasons Dates
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/niklongstone/seasons-dates/master.svg?style=flat-square)](https://travis-ci.org/niklongstone/seasons-dates)


## Installation
`npm install seasons-dates`

## Usage
```
var Seasons = require('seasons-dates');

var seasons = new Seasons('2017');
console.log(seasons);

/*
returns multiple Date objects:
{
    "spring":"2017-03-20T10:29:00.000Z",
    "summer":"2017-06-21T03:24:00.000Z",
    "autumn":"2017-09-22T19:01:00.000Z",
    "winter":"2017-12-21T16:28:00.000Z"
}
*/
```

_Note: The dates might not be accurate, consider the code in beta release._

## Credits

- [Nicola Pietroluongo](https://github.com/niklongstone)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
