

var teams = [
  {
    id:   'ALG',
    topo: 12,
    name: 'Algeria',
    flag: 'http://img.fifa.com/images/flags/4/alg.png'
  },
  {
    id:   'ARG',
    topo: 32,
    name: 'Argentina',
    flag: 'http://img.fifa.com/images/flags/4/arg.png'
  },
  {
    id:   'AUS',
    topo: 36,
    name: 'Australia',
    flag: 'http://img.fifa.com/images/flags/4/aus.png'
  },
  {
    id:   'BEL',
    topo: 56,
    name: 'Belgium',
    flag: 'http://img.fifa.com/images/flags/4/bel.png'
  },
  {
    id:   'BOS',
    topo: 70,
    name: 'Bosnia and Herzegovina',
    flag: 'http://img.fifa.com/images/flags/4/bih.png'
  },
  {
    id:   'BRA',
    topo: 76,
    name: 'Brazil',
    flag: 'http://img.fifa.com/images/flags/4/bra.png'
  },
  {
    id:   'CAM',
    topo: 120,
    name: 'Cameroon',
    flag: 'http://img.fifa.com/images/flags/4/cmr.png'
  },
  {
    id:   'CHI',
    topo: 152,
    name: 'Chile',
    flag: 'http://img.fifa.com/images/flags/4/chi.png'
  },
  {
    id:   'COL',
    topo: 170,
    name: 'Columbia',
    flag: 'http://img.fifa.com/images/flags/4/col.png'
  },
  {
    id:   'COS',
    topo: 188,
    name: 'Costa Rica',
    flag: 'http://img.fifa.com/images/flags/4/crc.png'
  },
  {
    id:   'COT',
    topo: 384,
    name: 'Côte d\'Ivoire',
    flag: 'http://img.fifa.com/images/flags/4/civ.png'
  },
  {
    id:   'CRO',
    topo: 191,
    name: 'Croatia',
    flag: 'http://img.fifa.com/images/flags/4/cro.png'
  },
  {
    id:   'ECU',
    topo: 218,
    name: 'Ecuador',
    flag: 'http://img.fifa.com/images/flags/4/ecu.png'
  },
  {
    id:   'ENG',
    topo: 826,
    name: 'England',
    flag: 'http://img.fifa.com/images/flags/4/eng.png'
  },
  {
    id:   'FRA',
    topo: 250,
    name: 'France',
    flag: 'http://img.fifa.com/images/flags/4/fra.png'
  },
  {
    id:   'GER',
    topo: 276,
    name: 'Germany',
    flag: 'http://img.fifa.com/images/flags/4/ger.png'
  },
  {
    id:   'GHA',
    topo: 288,
    name: 'Ghana',
    flag: 'http://img.fifa.com/images/flags/4/gha.png'
  },
  {
    id:   'GRE',
    topo: 300,
    name: 'Greece',
    flag: 'http://img.fifa.com/images/flags/4/gre.png'
  },
  {
    id:   'HON',
    topo: 340,
    name: 'Honduras',
    flag: 'http://img.fifa.com/images/flags/4/hon.png'
  },
  {
    id:   'IRA',
    topo: 364,
    name: 'Iran',
    flag: 'http://img.fifa.com/images/flags/4/irn.png'
  },
  {
    id:   'ITA',
    topo: 380,
    name: 'Italy',
    flag: 'http://img.fifa.com/images/flags/4/ita.png'
  },
  {
    id:   'JAP',
    topo: 392,
    name: 'Japan',
    flag: 'http://img.fifa.com/images/flags/4/jpn.png'
  },
  {
    id:   'KOR',
    topo: 410,
    name: 'Korea Republic',
    flag: 'http://img.fifa.com/images/flags/4/kor.png'
  },
  {
    id:   'MEX',
    topo: 484,
    name: 'Mexico',
    flag: 'http://img.fifa.com/images/flags/4/mex.png'
  },
  {
    id:   'NET',
    topo: 528,
    name: 'Netherlands',
    flag: 'http://img.fifa.com/images/flags/4/ned.png'
  },
  {
    id:   'NIG',
    topo: 566,
    name: 'Nigeria',
    flag: 'http://img.fifa.com/images/flags/4/nga.png'
  },
  {
    id:   'POR',
    topo: 620,
    name: 'Portugal',
    flag: 'http://img.fifa.com/images/flags/4/por.png'
  },
  {
    id:   'RUS',
    topo: 643,
    name: 'Russia',
    flag: 'http://img.fifa.com/images/flags/4/rus.png'
  },
  {
    id:   'SPA',
    topo: 724,
    name: 'Spain',
    flag: 'http://img.fifa.com/images/flags/4/esp.png'
  },
  {
    id:   'SWI',
    topo: 756,
    name: 'Switzerland',
    flag: 'http://img.fifa.com/images/flags/4/sui.png'
  },
  {
    id:   'URU',
    topo: 858,
    name: 'Uruguay',
    flag: 'http://img.fifa.com/images/flags/4/uru.png'
  },
  {
    id:   'USA',
    topo: 840,
    name: 'USA',
    flag: 'http://img.fifa.com/images/flags/4/usa.png'
  }
];

var games = [
  {
    who:  [ 'BRA', 'CRO' ],
    when: new Date( '2014-06-12T15:00:00-05:00' ),
    group: 'A',
    where: 'Arena Corinthians, Sao Paolo'
  },
  {
    who:  [ 'MEX', 'CAM' ],
    when: new Date( '2014-06-13T11:00:00-05:00' ),
    group: 'A',
    where: 'Estadio das Dunas, Natal'
  },
  {
    who:  [ 'SPA', 'NET' ],
    when: new Date( '2014-06-13T14:00:00-05:00' ),
    group: 'B',
    where: 'Arena Fonte Nova, Salvador'
  },
  {
    who:  [ 'CHI', 'AUS' ],
    when: new Date( '2014-06-13T17:00:00-05:00' ),
    group: 'B',
    where: 'Arena Pantanal, Cuiaba'
  },
  {
    who:  [ 'COL', 'GRE' ],
    when: new Date( '2014-06-14T11:00:00-05:00' ),
    group: 'C',
    where: 'Estadio Mineirao, Belo Horizonte'
  },
  {
    who:  [ 'URU', 'COS' ],
    when: new Date( '2014-06-14T14:00:00-05:00' ),
    group: 'D',
    where: 'Estadio Castaelao, Fortaleza'
  },
  {
    who:  [ 'ENG', 'ITA' ],
    when: new Date( '2014-06-14T17:00:00-05:00' ),
    group: 'D',
    where: 'Arena Amazonia, Manaus'
  },
  {
    who:  [ 'COT', 'JAP' ],
    when: new Date( '2014-06-14T20:00:00-05:00' ),
    group: 'C',
    where: 'Arena Pernambuco, Recife'
  },
  {
    who:  [ 'SWI', 'ECU' ],
    when: new Date( '2014-06-15T11:00:00-05:00' ),
    group: 'E',
    where: 'Estadio Nacional, Brasilia'
  },
  {
    who:  [ 'FRA', 'HON' ],
    when: new Date( '2014-06-15T14:00:00-05:00' ),
    group: 'E',
    where: 'Estadio Beira-Rio, Porto Alegre'
  },
  {
    who:  [ 'ARG', 'BOS' ],
    when: new Date( '2014-06-15T17:00:00-05:00' ),
    group: 'F',
    where: 'Maracanã - Estádio Jornalista Mário Filho, Rio De Janeiro'
  },
  {
    who:  [ 'GER', 'POR' ],
    when: new Date( '2014-06-16T11:00:00-05:00' ),
    group: 'G',
    where: 'Arena Fonte Nova, Salvador'
  },
  {
    who:  [ 'IRA', 'NIG' ],
    when: new Date( '2014-06-16T14:00:00-05:00' ),
    group: 'F',
    where: 'Arena de Baixada, Curitiba'
  },
  {
    who:  [ 'GHA', 'USA' ],
    when: new Date( '2014-06-16T17:00:00-05:00' ),
    group: 'G',
    where: 'Estadio das Dunas, Natal'
  },
  {
    who:  [ 'BEL', 'ALG' ],
    when: new Date( '2014-06-17T11:00:00-05:00' ),
    group: 'H',
    where: 'Estadio Mineirao, Belo Horizonte'
  },
  {
    who:  [ 'BRA', 'MEX' ],
    when: new Date( '2014-06-17T14:00:00-05:00' ),
    group: 'A',
    where: 'Estadio Castaelao, Fortaleza'
  },
  {
    who:  [ 'RUS', 'KOR' ],
    when: new Date( '2014-06-17T17:00:00-05:00' ),
    group: 'H',
    where: 'Arena Pantanal, Cuiaba'
  },
  {
    who:  [ 'AUS', 'NET' ],
    when: new Date( '2014-06-18T11:00:00-05:00' ),
    group: 'B',
    where: 'Estadio Beira-Rio, Porto Alegre'
  },
  {
    who:  [ 'SPA', 'CHI' ],
    when: new Date( '2014-06-18T14:00:00-05:00' ),
    group: 'B',
    where: 'Maracanã - Estádio Jornalista Mário Filho, Rio De Janeiro'
  },
  {
    who:  [ 'CAM', 'CRO' ],
    when: new Date( '2014-06-18T17:00:00-05:00' ),
    group: 'A',
    where: 'Arena Amazonia, Manaus'
  },
  {
    who:  [ 'COL', 'COT' ],
    when: new Date( '2014-06-19T11:00:00-05:00' ),
    group: 'C',
    where: 'Estadio Nacional, Brasilia'
  },
  {
    who:  [ 'URU', 'ENG' ],
    when: new Date( '2014-06-19T14:00:00-05:00' ),
    group: 'D',
    where: 'Arena Corinthians, Sao Paolo'
  },
  {
    who:  [ 'JAP', 'GRE' ],
    when: new Date( '2014-06-19T17:00:00-05:00' ),
    group: 'C',
    where: 'Estadio das Dunas, Natal'
  },
  {
    who:  [ 'ITA', 'COS' ],
    when: new Date( '2014-06-20T11:00:00-05:00' ),
    group: 'D',
    where: 'Arena Pernambuco, Recife'
  },
  {
    who:  [ 'SWI', 'FRA' ],
    when: new Date( '2014-06-20T14:00:00-05:00' ),
    group: 'E',
    where: 'Arena Fonte Nova, Salvador'
  },
  {
    who:  [ 'HON', 'ECU' ],
    when: new Date( '2014-06-20T17:00:00-05:00' ),
    group: 'E',
    where: 'Arena de Baixada, Curitiba'
  },
  {
    who:  [ 'ARG', 'IRA' ],
    when: new Date( '2014-06-21T11:00:00-05:00' ),
    group: 'F',
    where: 'Estadio Mineirao, Belo Horizonte'
  },
  {
    who:  [ 'GER', 'GHA' ],
    when: new Date( '2014-06-21T14:00:00-05:00' ),
    group: 'G',
    where: 'Estadio Castaelao, Fortaleza'
  },
  {
    who:  [ 'NIG', 'BOS' ],
    when: new Date( '2014-06-21T17:00:00-05:00' ),
    group: 'F',
    where: 'Arena Pantanal, Cuiaba'
  },
  {
    who:  [ 'BEL', 'RUS' ],
    when: new Date( '2014-06-22T11:00:00-05:00' ),
    group: 'H',
    where: 'Maracanã - Estádio Jornalista Mário Filho, Rio De Janeiro'
  },
  {
    who:  [ 'KOR', 'ALG' ],
    when: new Date( '2014-06-22T14:00:00-05:00' ),
    group: 'H',
    where: 'Estadio Beira-Rio, Porto Alegre'
  },
  {
    who:  [ 'USA', 'POR' ],
    when: new Date( '2014-06-22T17:00:00-05:00' ),
    group: 'G',
    where: 'Arena Amazonia, Manaus'
  },
  {
    who:  [ 'NET', 'CHI' ],
    when: new Date( '2014-06-23T11:00:00-05:00' ),
    group: 'B',
    where: 'Arena Corinthians, Sao Paolo'
  },
  {
    who:  [ 'AUS', 'SPA' ],
    when: new Date( '2014-06-23T11:00:00-05:00' ),
    group: 'B',
    where: 'Arena de Baixada, Curitiba'
  },
  {
    who:  [ 'CAM', 'BRA' ],
    when: new Date( '2014-06-23T15:00:00-05:00' ),
    group: 'A',
    where: 'Estadio Nacional, Brasilia'
  },
  {
    who:  [ 'CRO', 'MEX' ],
    when: new Date( '2014-06-23T15:00:00-05:00' ),
    group: 'A',
    where: 'Arena Pernambuco, Recife'
  },
  {
    who:  [ 'ITA', 'URU' ],
    when: new Date( '2014-06-24T11:00:00-05:00' ),
    group: 'D',
    where: 'Estadio das Dunas, Natal'
  },
  {
    who:  [ 'COS', 'ENG' ],
    when: new Date( '2014-06-24T11:00:00-05:00' ),
    group: 'D',
    where: 'Estadio Mineirao, Belo Horizonte'
  },
  {
    who:  [ 'JAP', 'COL' ],
    when: new Date( '2014-06-24T15:00:00-05:00' ),
    group: 'C',
    where: 'Arena Pantanal, Cuiaba'
  },
  {
    who:  [ 'GRE', 'COT' ],
    when: new Date( '2014-06-24T15:00:00-05:00' ),
    group: 'C',
    where: 'Estadio Castaelao, Fortaleza'
  },
  {
    who:  [ 'NIG', 'ARG' ],
    when: new Date( '2014-06-25T11:00:00-05:00' ),
    group: 'F',
    where: 'Estadio Beira-Rio, Porto Alegre'
  },
  {
    who:  [ 'BOS', 'IRA' ],
    when: new Date( '2014-06-25T11:00:00-05:00' ),
    group: 'F',
    where: 'Arena Fonte Nova, Salvador'
  },
  {
    who:  [ 'HON', 'SWI' ],
    when: new Date( '2014-06-25T15:00:00-05:00' ),
    group: 'E',
    where: 'Arena Amazonia, Manaus'
  },
  {
    who:  [ 'ECU', 'FRA' ],
    when: new Date( '2014-06-25T15:00:00-05:00' ),
    group: 'E',
    where: 'Maracanã - Estádio Jornalista Mário Filho, Rio De Janeiro'
  },
  {
    who:  [ 'POR', 'GHA' ],
    when: new Date( '2014-06-26T11:00:00-05:00' ),
    group: 'G',
    where: 'Estadio Nacional, Brasilia'
  },
  {
    who:  [ 'USA', 'GER' ],
    when: new Date( '2014-06-26T11:00:00-05:00' ),
    group: 'G',
    where: 'Arena Pernambuco, Recife'
  },
  {
    who:  [ 'KOR', 'BEL' ],
    when: new Date( '2014-06-26T15:00:00-05:00' ),
    group: 'H',
    where: 'Arena Corinthians, Sao Paolo'
  },
  {
    who:  [ 'ALG', 'RUS' ],
    when: new Date( '2014-06-26T15:00:00-05:00' ),
    group: 'H',
    where: 'Arena de Baixada, Curitiba'
  }
];


