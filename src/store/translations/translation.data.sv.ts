import { Translations } from './translation.model'

export const translationsSv: Translations = {
  core: {
    language: {
      english: 'English',
      swedish: 'Svenska',
    },
    menu: {
      home: 'Hem',
      initiative: 'Initiativ',
    },
    GiveFeedback: 'Feedback',
  },
  common: {
    Page: 'Sida',
    GMBook: 'SL',
    Empty: '',
    Gender: {
      Man: 'Man',
      Men: 'Män',
      Woman: 'Kvinna',
      Women: 'Kvinnor',
    },
    Direction: {
      North: 'norr',
      NorthEast: 'nordöst',
      East: 'öster',
      SouthEast: 'sydöst',
      South: 'söder',
      SouthWest: 'sydväst',
      West: 'väst',
      NorthWest: 'nordväst',
    },
    Coin: {
      Coin_one: 'mynt',
      Coin_other: 'mynt',
      Copper: 'koppar',
      Silver: 'silver',
      Gold: 'guld',
      day: 'per dag',
    },
    Weight: {
      Weight: 'Vikt',
      None: '–',
      Tiny: 'Småsak',
      Light: 'Lätt',
      Normal: 'Normal',
      Heavy: 'Tung',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
    },
  },
  home: {
    Page: 'Dragontools',
    Description:
      'Dragontools är mitt sätt att ge tillbaka till communityt och av helt själviska anledningar ett sätt för mig att leka med ny webbteknik.',
    GameTitle: 'Drakar och Demoner',
    FreeLeague: 'Fria Ligan',
    ThanksTo: 'Tack till',
    ForAFantasticGame: 'för ett fantastiskt spel!',
    CommunityTitle: 'Community',
    ThanksCommunity:
      'Tack till communityt för Drakar och Demoner för inspiration, hjälp och material jag kunnat använda.',
    moreTools: {
      title: 'Fler verktyg',
      yxansKlagan: {
        name: 'Yxans klagan',
        description: 'Ett webbverktyg för spelledare av Svärdets sång.',
      },
    },
  },
  initiative: {
    drawNewInitiative: 'Dra nytt initiativ',
    done: 'Klar',
    addPerson: 'Lägg till',
    newPerson: `Nya personens namn`,
    removePerson: 'Ta bort',
    removeAll: 'Ta alla',
    combatants: 'Stridsdeltagare',
  },
}

export default translationsSv
