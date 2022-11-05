module.exports = {
  filters:
  [
    {
      filterName: "Type",
      options: [
        { value: 'grass', label: 'grass'},
        { value: 'fire', label: 'fire'},
        { value: 'water', label: 'water'},
        { value: 'electric', label: 'electric'},
        { value: 'fighting', label: 'fighting'},
        { value: 'flying', label: 'flying'},
        { value: 'ground', label: 'ground'},
        { value: 'dark', label: 'dark'},
        { value: 'poison', label: 'poison'},
        { value: 'steel', label: 'steel'},
        { value: 'rock', label: 'rock'},
        { value: 'psychic', label: 'psychic'},
        { value: 'dragon', label: 'dragon'},
        { value: 'shadow', label: 'shadow'},
        { value: 'normal', label: 'normal'},
        { value: 'ice', label: 'ice'},
        { value: 'ghost', label: 'ghost'},
        { value: 'bug', label: 'bug'},
        { value: 'fairy', label: 'fairy'},
      ]
    },
    {
      filterName: "Generation",
      options: [
        { value: 'Generation-I', label: 'Generation-I'},
        { value: 'Generation-II', label: 'Generation-II'},
        { value: 'Generation-III', label: 'Generation-III'},
        { value: 'Generation-IV', label: 'Generation-IV'},
        { value: 'Generation-V', label: 'Generation-V'},
        { value: 'Generation-VI', label: 'Generation-VI'},
        { value: 'Generation-VII', label: 'Generation-VII'},
        { value: 'Generation-VIII', label: 'Generation-VIII'}
      ]
    },
    {
      filterName: "HMs",
      options: [
        { value: 'cut', label: 'sinoh'},
        { value: 'fly', label: 'hoehn'},
        { value: 'surf', label: 'black'},
        { value: 'strength', label: 'black'},
        { value: 'flash', label: 'black'},
        { value: 'whirlpool', label: 'black'},
        { value: 'waterfall', label: 'black'},
        { value: 'rock smash', label: 'black'},
        { value: 'dive', label: 'black'},
        { value: 'defog', label: 'black'},
        { value: 'rock climb', label: 'black'},
      ]
    },
    {
      filterName: "Evolution",
      options: [
        { value: 1, label: 1},
        { value: 2, label: 2},
        { value: 3, label: 3},
        { value: 'legendary', label: 'lengendary'}
      ]
    }
  ],

  indexMap:
  {
    "Type": 0,
    "Generation": 1,
    "HMs": 2,
    "Evolution": 3
  },

  regions:
  [
    'kanto',
    'johto',
    'hoenn',
    'sinnoh',
    'unova',
    'kalos',
    'alola',
    'galar'
  ],

  games:
  [
    ['red & blue, yellow'],
    ['gold & silver, crystal'],
    ['ruby & sapphire, emerald', 'fire-red & leaf-green', 'colosseum', 'xd'],
    ['diamond & pearl, platinum', 'heart-gold & soul-silver'],
    ['black & white', 'black2 & white2'],
    ['x & y', 'omega-ruby & alpha-sapphire']
    ['sun & moon', 'ultra-sun & ultra-moon', 'lets-go-pikachu & lets-go-evee'],
    ['sword & shield', 'the-isle-of-armor & the-crown-tundra', 'brilliant-diamond & shining-pearl', 'legends-arceus']
  ]
}