# Parse Vehicles

If a vehicle, license or copyright is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-vehicles

## Usage

Example:

```javascript
await parse('Put out an APB on a male suspect driving a ford mustang 1964')
```

Output:

```json
[
  {
    "ngram": "ford mustang 1964",
    "value": {
      "id": "ford-mustang-1964",
      "label": {
        "en": "Ford Mustang (1964)"
      },
      "description": {
        "en": "Mustang by Ford (1964 model)."
      },
      "make": "Ford",
      "model": "Mustang",
      "year": 1964
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 10,
      "begin": 43,
      "end": 60
    }
  }
]
```

## Data sources

Data may be sourced from multiple public databases.

### Premium datasets

A database available for purchase, could be used one day? http://www.teoalida.com/cardatabase/

### free datasets

https://github.com/n8barr/automotive-model-year-data/blob/master/data.sql

### free governmental sources

#### NHTSA (US)
For a reliable source, we could use this: https://vpic.nhtsa.dot.gov/
But it only covers motor vehicles available for sal ein the U.S.

#### FuelEconomy (UK)
 http://www.fueleconomy.gov/feg/ws/index.shtml
