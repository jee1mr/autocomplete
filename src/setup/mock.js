import { createServer, Model } from 'miragejs'

createServer({
  models: {
    user: Model,
  },
  routes() {
    this.namespace = 'api'

    this.get('/users/', () => {
      return []
    })

    this.get('/users/:query', (schema, request) => {
      let query = request.params.query

      const users = [
        {
          id: '1',
          name: 'Shanon',
        },
        {
          id: '2',
          name: 'Pamela',
        },
        {
          id: '3',
          name: 'Mariano',
        },
        {
          id: '4',
          name: 'Jean',
        },
        {
          id: '5',
          name: 'Madie',
        },
        {
          id: '6',
          name: 'Angeline',
        },
        {
          id: '7',
          name: 'Maurice',
        },
        {
          id: '8',
          name: 'Herta',
        },
        {
          id: '9',
          name: 'Chloe',
        },
        {
          id: '10',
          name: 'Brook',
        },
        {
          id: '11',
          name: 'Casimir',
        },
        {
          id: '12',
          name: 'Godfrey',
        },
        {
          id: '13',
          name: 'Dessie',
        },
        {
          id: '14',
          name: 'Malachi',
        },
        {
          id: '15',
          name: 'Mariela',
        },
        {
          id: '16',
          name: 'Travon',
        },
        {
          id: '17',
          name: 'Soledad',
        },
        {
          id: '18',
          name: 'Pamela',
        },
        {
          id: '19',
          name: 'Jazmyne',
        },
        {
          id: '20',
          name: 'Ivy',
        },
        {
          id: '21',
          name: 'Tony',
        },
        {
          id: '22',
          name: 'Wyatt',
        },
        {
          id: '23',
          name: 'Cheyanne',
        },
        {
          id: '24',
          name: 'Bernhard',
        },
        {
          id: '25',
          name: 'Raven',
        },
        {
          id: '26',
          name: 'Telly',
        },
        {
          id: '27',
          name: 'Adolph',
        },
        {
          id: '28',
          name: 'Americo',
        },
        {
          id: '29',
          name: 'Moises',
        },
        {
          id: '30',
          name: 'Cara',
        },
        {
          id: '31',
          name: 'Hulda',
        },
        {
          id: '32',
          name: 'Beau',
        },
        {
          id: '33',
          name: 'Kattie',
        },
        {
          id: '34',
          name: 'Delia',
        },
        {
          id: '35',
          name: 'Hettie',
        },
        {
          id: '36',
          name: 'Rowan',
        },
        {
          id: '37',
          name: 'Rosemarie',
        },
        {
          id: '38',
          name: 'Elisabeth',
        },
        {
          id: '39',
          name: 'Cordell',
        },
        {
          id: '40',
          name: 'Pascale',
        },
        {
          id: '41',
          name: 'Rollin',
        },
        {
          id: '42',
          name: 'Edwina',
        },
        {
          id: '43',
          name: 'Caroline',
        },
        {
          id: '44',
          name: 'Toni',
        },
        {
          id: '45',
          name: 'Shad',
        },
        {
          id: '46',
          name: 'Adriel',
        },
        {
          id: '47',
          name: 'Jovanny',
        },
        {
          id: '48',
          name: 'Brigitte',
        },
        {
          id: '49',
          name: 'Kimberly',
        },
        {
          id: '50',
          name: 'Jayden',
        },
        {
          id: '51',
          name: 'Hosea',
        },
        {
          id: '52',
          name: 'Cassandra',
        },
        {
          id: '53',
          name: 'Jerod',
        },
        {
          id: '54',
          name: 'Elinore',
        },
        {
          id: '55',
          name: 'Norval',
        },
        {
          id: '56',
          name: 'Elmer',
        },
        {
          id: '57',
          name: 'Angelina',
        },
        {
          id: '58',
          name: 'Glen',
        },
        {
          id: '59',
          name: 'Elda',
        },
        {
          id: '60',
          name: 'Carmella',
        },
        {
          id: '61',
          name: 'Ella',
        },
        {
          id: '62',
          name: 'Herman',
        },
        {
          id: '63',
          name: 'Theresa',
        },
        {
          id: '64',
          name: 'Kailey',
        },
        {
          id: '65',
          name: 'Regan',
        },
        {
          id: '66',
          name: 'Art',
        },
        {
          id: '67',
          name: 'Makayla',
        },
        {
          id: '68',
          name: 'Cierra',
        },
        {
          id: '69',
          name: 'Deion',
        },
        {
          id: '70',
          name: 'Murl',
        },
        {
          id: '71',
          name: 'Verna',
        },
        {
          id: '72',
          name: 'Bailee',
        },
        {
          id: '73',
          name: 'Emiliano',
        },
        {
          id: '74',
          name: 'Lucius',
        },
        {
          id: '75',
          name: 'Rex',
        },
        {
          id: '76',
          name: 'Myah',
        },
        {
          id: '77',
          name: 'Alvera',
        },
        {
          id: '78',
          name: 'Ena',
        },
        {
          id: '79',
          name: 'Tianna',
        },
        {
          id: '80',
          name: 'Oral',
        },
        {
          id: '81',
          name: 'Domingo',
        },
        {
          id: '82',
          name: 'Rowena',
        },
        {
          id: '83',
          name: 'Josianne',
        },
        {
          id: '84',
          name: 'Favian',
        },
        {
          id: '85',
          name: 'Rozella',
        },
        {
          id: '86',
          name: 'Jabari',
        },
        {
          id: '87',
          name: 'Weldon',
        },
        {
          id: '88',
          name: 'Delta',
        },
        {
          id: '89',
          name: 'Garret',
        },
        {
          id: '90',
          name: 'Yesenia',
        },
        {
          id: '91',
          name: 'Celia',
        },
        {
          id: '92',
          name: 'Loma',
        },
        {
          id: '93',
          name: 'Tyrese',
        },
        {
          id: '94',
          name: 'Daphne',
        },
        {
          id: '95',
          name: 'Novella',
        },
        {
          id: '96',
          name: 'Ricardo',
        },
        {
          id: '97',
          name: 'Mellie',
        },
        {
          id: '98',
          name: 'Roger',
        },
        {
          id: '99',
          name: 'Luigi',
        },
      ]

      return users.filter((user) => user.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
    })
  },
})
