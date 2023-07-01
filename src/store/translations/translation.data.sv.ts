import { Translations } from './translation.model'

export const translationsSv: Translations = {
  core: {
    language: {
      english: 'English',
      swedish: 'Svenska',
    },
    menu: {
      home: 'Meny',
      initiative: 'Initiativ',
    },
    give_feedback: 'Feedback',
  },
  common: {
    page: 'Sida',
    gm_book: 'SL',
    empty: '',
    gender: {
      man: 'Man',
      men: 'Män',
      woman: 'Kvinna',
      women: 'Kvinnor',
    },
    direction: {
      north: 'norr',
      north_east: 'nordöst',
      east: 'öster',
      south_east: 'sydöst',
      south: 'söder',
      south_west: 'sydväst',
      west: 'väst',
      north_west: 'nordväst',
    },
    coin: {
      coin_one: 'mynt',
      coin_other: 'mynt',
      copper: 'koppar',
      silver: 'silver',
      gold: 'guld',
      day: 'per dag',
    },
    weight: {
      weight: 'Vikt',
      none: '–',
      tiny: 'Småsak',
      light: 'Lätt',
      normal: 'Normal',
      heavy: 'Tung',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
    },
  },
  home: {
    page: 'DragonTools',
    description:
      'DragonTools är mitt sätt att ge tillbaka till communityt och av helt själviska anledningar ett sätt för mig att leka med ny webbteknik.',
    game_title: 'Drakar och Demoner',
    thanks_to: 'Tack till',
    free_league: 'Fria Ligan',
    for_a_fantastic_game: 'för ett fantastiskt spel!',
    community: {
      title: 'Community',
      thanks:
        'Tack till communityt för Drakar och Demoner för inspiration, hjälp och material jag kunnat använda.',
    },
    more_tools: {
      title: 'Fler verktyg',
      yxans_klagan: {
        name: 'Yxans klagan',
        description: 'Ett webbverktyg för spelledare av Svärdets sång.',
      },
    },
  },
  initiative: {
    draw_new: 'Dra nytt initiativ',
    done: 'Klar',
    person: {
      add: 'Lägg till',
      new: 'Nya personens namn',
      remove: 'Ta bort',
    },
    combatants: {
      title: 'Stridsdeltagare',
      remove_all: 'Ta alla',
    },
  },
}

export default translationsSv
