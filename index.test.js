const parse = require('./index')
const testData = [{
  input: "Just bought an Isuzu Ascender, 'cause I'm a dad.",
  expected: [{
    "ngram": "Isuzu Ascender",
    "value": {
      "id": "isuzu ascender",
      "label": {
        "en": "Isuzu Ascender"
      },
      "description": {
        "en": "Ascender by Isuzu (generic model)."
      },
      "make": "Isuzu",
      "model": "Ascender",
      "aliases": {
        "en": [
          "Isuzu Ascender",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 3,
      "begin": 15,
      "end": 29
    }
  }]
}, {
  input: "Put out an APB on a male suspect driving a ford mustang 1964",
  expected: [{
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
      "year": 1964,
      "aliases": {
      "en": [
        "Ford Mustang 1964",
        "Ford Mustang (1964)",
        "Ford Mustang of 1964",
        "Ford Mustang released in 1964",
        "Ford Mustang (1964 model)",
      ],
      "fr": [
        "Ford Mustang de 1964",
        "Ford Mustang année 1964",
        "Ford Mustang (année 1964)",
        "Ford Mustang (modèle 1964)",
      ],
    },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 10,
      "begin": 43,
      "end": 60
    }
  }]
}]

test('extract vehicles', () => Promise.all(
  testData.map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))