const users = [
  {
    firstName: 'Admin Account',
    lastName: 'Haha',
    email: 'kpetworth0@kickstarter.com',
    password: 'Lwiw4KV',
    salt: 'ante',
    googleId: '5108758682601185',
    isAdmin: true
  },
  {
    email: 'blathwood1@auda.org.au',
    password: 'i5olyZ3PE4OB',
    salt: 'orci',
    googleId: '3571494812692778',
    isAdmin: true
  },
  {
    firstName: 'Kris',
    lastName: 'Raecroft',
    email: 'kraecroft0@biblegateway.com',
    salt: 'magna',
    googleId: '3551695673904649'
  },
  {
    firstName: 'Theobald',
    lastName: 'Bleythin',
    email: 'tbleythin1@webnode.com',
    salt: 'ac',
    googleId: '4017959392676680'
  },
  {
    firstName: 'Abram',
    lastName: 'MacNish',
    email: 'amacnish2@delicious.com',
    salt: 'cursus',
    googleId: '6333603053475959036'
  },
  {
    firstName: 'Diane',
    lastName: 'Peasegod',
    email: 'dpeasegod3@epa.gov',
    salt: 'ultrices',
    googleId: '3556424931939833'
  },
  {
    firstName: 'Robbie',
    lastName: 'McCritichie',
    email: 'rmccritichie4@163.com',
    salt: 'elit',
    googleId: '3550498597720931'
  },
  {
    firstName: 'Valenka',
    lastName: 'McCudden',
    email: 'vmccudden5@barnesandnoble.com',
    salt: 'mi',
    googleId: '4508343203223618'
  },
  {
    firstName: 'Sianna',
    lastName: 'Orwin',
    email: 'sorwin6@timesonline.co.uk',
    salt: 'in',
    googleId: '3549431085962040'
  },
  {
    firstName: 'Isak',
    lastName: 'McCaughen',
    email: 'imccaughen7@wordpress.com',
    salt: 'odio',
    googleId: '6767418947655753'
  },
  {
    firstName: 'Glynnis',
    lastName: 'Oleszczak',
    email: 'goleszczak8@edublogs.org',
    salt: 'nisl',
    googleId: '5610357875643145'
  },
  {
    firstName: 'Hale',
    lastName: 'Leal',
    email: 'hleal9@bandcamp.com',
    salt: 'sapien',
    googleId: '3567519408325585'
  },
  {
    firstName: 'Agnella',
    lastName: 'Wingatt',
    email: 'awingatta@github.io',
    salt: 'morbi',
    googleId: '3537084618596381'
  },
  {
    firstName: 'Gayleen',
    lastName: 'Reaman',
    email: 'greamanb@squidoo.com',
    salt: 'proin',
    googleId: '3528252804231292'
  },
  {
    firstName: 'Flori',
    lastName: 'Pedler',
    email: 'fpedlerc@independent.co.uk',
    salt: 'nulla',
    googleId: '6375473706112516'
  },
  {
    firstName: 'Washington',
    lastName: 'Tetley',
    email: 'wtetleyd@plala.or.jp',
    salt: 'tortor',
    googleId: '3538430893421770'
  },
  {
    firstName: 'Shirl',
    lastName: 'Abrahamsen',
    email: 'sabrahamsene@ning.com',
    salt: 'semper',
    googleId: '3570566949609915'
  },
  {
    firstName: 'Aloysius',
    lastName: 'Luetkemeyers',
    email: 'aluetkemeyersf@theatlantic.com',
    salt: 'est',
    googleId: '5108753850644026'
  },
  {
    firstName: 'Linette',
    lastName: 'Corona',
    email: 'lcoronag@nps.gov',
    salt: 'a',
    googleId: '3546330459074056'
  },
  {
    firstName: 'Charyl',
    lastName: 'Murkus',
    email: 'cmurkush@deviantart.com',
    salt: 'diam',
    googleId: '6706156817024288'
  },
  {
    firstName: 'Nevsa',
    lastName: 'Ruggier',
    email: 'nruggieri@dedecms.com',
    salt: 'in',
    googleId: '372301783772348'
  },
  {
    firstName: 'Dee',
    lastName: 'Bolden',
    email: 'dboldenj@nymag.com',
    salt: 'et',
    googleId: '4917527850151529'
  },
  {
    firstName: 'Noby',
    lastName: 'Carnoghan',
    email: 'ncarnoghank@newsvine.com',
    salt: 'aliquam',
    googleId: '201991985343000'
  },
  {
    firstName: 'Birdie',
    lastName: 'Heathcott',
    email: 'bheathcottl@spiegel.de',
    salt: 'vestibulum',
    googleId: '5602219124440808981'
  },
  {
    firstName: 'Sheryl',
    lastName: 'Clayden',
    email: 'sclaydenm@blogs.com',
    salt: 'mauris',
    googleId: '5602238835530137'
  },
  {
    firstName: 'Dory',
    lastName: 'Destouche',
    email: 'ddestouchen@ft.com',
    salt: 'nisl',
    googleId: '675984518193232402'
  },
  {
    firstName: 'Cele',
    lastName: 'Spoor',
    email: 'cspooro@wsj.com',
    salt: 'ultrices',
    googleId: '337941449470177'
  },
  {
    firstName: 'Jarrad',
    lastName: 'Ely',
    email: 'jelyp@craigslist.org',
    salt: 'sapien',
    googleId: '3550643485709633'
  },
  {
    firstName: 'Esther',
    lastName: 'Cow',
    email: 'ecowq@samsung.com',
    salt: 'vestibulum',
    googleId: '6375030777891038'
  },
  {
    firstName: 'De witt',
    lastName: 'Ochterlony',
    email: 'dochterlonyr@youtu.be',
    salt: 'cras',
    googleId: '6763582471750484095'
  },
  {
    firstName: 'Byran',
    lastName: "O'Nions",
    email: 'bonionss@cnbc.com',
    salt: 'semper',
    googleId: '3557207451681763'
  },
  {
    firstName: 'Clementina',
    lastName: 'Huxton',
    email: 'chuxtont@howstuffworks.com',
    salt: 'integer',
    googleId: '5602219891092428'
  },
  {
    firstName: 'Viki',
    lastName: 'Claiden',
    email: 'vclaidenu@miitbeian.gov.cn',
    salt: 'libero',
    googleId: '6398085740427057'
  },
  {
    firstName: 'Collie',
    lastName: 'Noir',
    email: 'cnoirv@feedburner.com',
    salt: 'faucibus',
    googleId: '3574336868548957'
  },
  {
    firstName: 'Mignon',
    lastName: 'Pache',
    email: 'mpachew@mayoclinic.com',
    salt: 'odio',
    googleId: '3535388615798037'
  },
  {
    firstName: 'Kristan',
    lastName: 'McAline',
    email: 'kmcalinex@vistaprint.com',
    salt: 'habitasse',
    googleId: '5610990826098777'
  },
  {
    firstName: 'Hastings',
    lastName: 'Veldens',
    email: 'hveldensy@studiopress.com',
    salt: 'interdum',
    googleId: '5602250434637592516'
  },
  {
    firstName: 'Roshelle',
    lastName: 'Ould',
    email: 'rouldz@globo.com',
    salt: 'ut',
    googleId: '4041370263329'
  },
  {
    firstName: 'Shurlock',
    lastName: 'Ivashintsov',
    email: 'sivashintsov10@spotify.com',
    salt: 'phasellus',
    googleId: '6393910281582512'
  },
  {
    firstName: 'Bartholomew',
    lastName: 'Bentson',
    email: 'bbentson11@shinystat.com',
    salt: 'adipiscing',
    googleId: '5310245956899640'
  },
  {
    firstName: 'Forest',
    lastName: 'Pruvost',
    email: 'fpruvost12@mit.edu',
    salt: 'luctus',
    googleId: '201519912426976'
  },
  {
    firstName: 'Reginald',
    lastName: 'Killock',
    email: 'rkillock13@ehow.com',
    salt: 'quis',
    googleId: '4913640935608258'
  },
  {
    firstName: 'Sheff',
    lastName: 'Trewhitt',
    email: 'strewhitt14@sitemeter.com',
    salt: 'luctus',
    googleId: '201420824311119'
  },
  {
    firstName: 'Garrik',
    lastName: "D'Adda",
    email: 'gdadda15@canalblog.com',
    salt: 'accumsan',
    googleId: '3549596791851412'
  },
  {
    firstName: 'Thekla',
    lastName: 'Huddlestone',
    email: 'thuddlestone16@hostgator.com',
    salt: 'nisi',
    googleId: '3566614868122423'
  },
  {
    firstName: 'Sheila-kathryn',
    lastName: 'Molesworth',
    email: 'smolesworth17@shutterfly.com',
    salt: 'libero',
    googleId: '3550977214558394'
  },
  {
    firstName: 'Valentine',
    lastName: 'Treffrey',
    email: 'vtreffrey18@live.com',
    salt: 'orci',
    googleId: '3585844072065160'
  },
  {
    firstName: 'Sebastien',
    lastName: "O'Concannon",
    email: 'soconcannon19@scientificamerican.com',
    salt: 'ligula',
    googleId: '56022451260093167'
  },
  {
    firstName: 'Francklin',
    lastName: 'Jacobsson',
    email: 'fjacobsson1a@xrea.com',
    salt: 'blandit',
    googleId: '3543660980575517'
  },
  {
    firstName: 'Rosy',
    lastName: 'Friman',
    email: 'rfriman1b@homestead.com',
    salt: 'ut',
    googleId: '3534692639597858'
  },
  {
    firstName: 'Renato',
    lastName: 'Ridgers',
    email: 'rridgers1c@oracle.com',
    salt: 'et',
    googleId: '30085060093791'
  },
  {
    firstName: 'Cross',
    lastName: 'Stading',
    email: 'cstading1d@skyrock.com',
    salt: 'mus',
    googleId: '3556000974394266'
  },
  {
    firstName: 'Leslie',
    lastName: 'Buey',
    email: 'lbuey1e@weibo.com',
    salt: 'donec',
    googleId: '6331104665816426991'
  },
  {
    firstName: 'Peterus',
    lastName: 'Dunkerley',
    email: 'pdunkerley1f@newsvine.com',
    salt: 'non',
    googleId: '5602212200273532'
  },
  {
    firstName: 'Judd',
    lastName: 'Tuke',
    email: 'jtuke1g@symantec.com',
    salt: 'arcu',
    googleId: '3568047230408394'
  },
  {
    firstName: 'Ebeneser',
    lastName: 'Armin',
    email: 'earmin1h@ocn.ne.jp',
    salt: 'tellus',
    googleId: '5010120323449630'
  },
  {
    firstName: 'Leoine',
    lastName: 'Bonniface',
    email: 'lbonniface1i@com.com',
    salt: 'ante',
    googleId: '201489039712882'
  },
  {
    firstName: 'Nikola',
    lastName: 'Maghull',
    email: 'nmaghull1j@latimes.com',
    salt: 'viverra',
    googleId: '676399994471212985'
  },
  {
    firstName: 'Delia',
    lastName: 'Allin',
    email: 'dallin1k@exblog.jp',
    salt: 'sapien',
    googleId: '3577390781629565'
  },
  {
    firstName: 'Mar',
    lastName: 'Franiak',
    email: 'mfraniak1l@jimdo.com',
    salt: 'imperdiet',
    googleId: '201560134454818'
  },
  {
    firstName: 'Brianne',
    lastName: 'McEntee',
    email: 'bmcentee1m@time.com',
    salt: 'nunc',
    googleId: '3564002685945709'
  },
  {
    firstName: 'Ariadne',
    lastName: 'Sapir',
    email: 'asapir1n@sogou.com',
    salt: 'lectus',
    googleId: '201556158717916'
  },
  {
    firstName: 'Jehu',
    lastName: 'Caulkett',
    email: 'jcaulkett1o@t-online.de',
    salt: 'sollicitudin',
    googleId: '3553538177297029'
  },
  {
    firstName: 'Brittaney',
    lastName: 'Kilty',
    email: 'bkilty1p@cargocollective.com',
    salt: 'augue',
    googleId: '3532809128511446'
  },
  {
    firstName: 'Carl',
    lastName: 'Mogford',
    email: 'cmogford1q@nasa.gov',
    salt: 'accumsan',
    googleId: '3581218196615438'
  },
  {
    firstName: 'Patton',
    lastName: 'Tebbs',
    email: 'ptebbs1r@clickbank.net',
    salt: 'luctus',
    googleId: '3562800350087760'
  },
  {
    firstName: 'Fidelio',
    lastName: 'Bremmell',
    email: 'fbremmell1s@facebook.com',
    salt: 'id',
    googleId: '5140135262817350'
  },
  {
    firstName: 'Elisabeth',
    lastName: 'Keel',
    email: 'ekeel1t@salon.com',
    salt: 'mauris',
    googleId: '4026811620658304'
  },
  {
    firstName: 'Giavani',
    lastName: 'Benezet',
    email: 'gbenezet1u@surveymonkey.com',
    salt: 'dui',
    googleId: '372301216544793'
  },
  {
    firstName: 'Bradley',
    lastName: 'Pesticcio',
    email: 'bpesticcio1v@tripadvisor.com',
    salt: 'aliquam',
    googleId: '6761197917797068490'
  },
  {
    firstName: 'Laryssa',
    lastName: 'Dressel',
    email: 'ldressel1w@meetup.com',
    salt: 'aliquet',
    googleId: '5108752573440266'
  },
  {
    firstName: 'Dominique',
    lastName: 'Noir',
    email: 'dnoir1x@dailymail.co.uk',
    salt: 'primis',
    googleId: '5893468358393856'
  },
  {
    firstName: 'Rod',
    lastName: 'Bootland',
    email: 'rbootland1y@slashdot.org',
    salt: 'in',
    googleId: '6709898213933383'
  },
  {
    firstName: 'Adaline',
    lastName: 'Gurling',
    email: 'agurling1z@clickbank.net',
    salt: 'pellentesque',
    googleId: '3551641423147832'
  },
  {
    firstName: 'Dorotea',
    lastName: 'Roggieri',
    email: 'droggieri20@earthlink.net',
    salt: 'ante',
    googleId: '3587760886799729'
  },
  {
    firstName: 'Martin',
    lastName: 'Somner',
    email: 'msomner21@rakuten.co.jp',
    salt: 'rutrum',
    googleId: '3567463745097872'
  },
  {
    firstName: 'Dolli',
    lastName: 'Ambrosch',
    email: 'dambrosch22@phoca.cz',
    salt: 'hac',
    googleId: '490503682356188797'
  },
  {
    firstName: 'Selle',
    lastName: 'Cowherd',
    email: 'scowherd23@webeden.co.uk',
    salt: 'orci',
    googleId: '6373598803476174'
  },
  {
    firstName: 'Walsh',
    lastName: 'Prinnett',
    email: 'wprinnett24@bing.com',
    salt: 'quis',
    googleId: '676118487904622235'
  },
  {
    firstName: 'Coretta',
    lastName: 'Furnival',
    email: 'cfurnival25@mashable.com',
    salt: 'sapien',
    googleId: '3574641639058685'
  },
  {
    firstName: 'Archie',
    lastName: 'Benoey',
    email: 'abenoey26@theguardian.com',
    salt: 'sit',
    googleId: '5517241311835396'
  },
  {
    firstName: 'Jeno',
    lastName: 'Ebbin',
    email: 'jebbin27@google.co.uk',
    salt: 'at',
    googleId: '3544359961093371'
  },
  {
    firstName: 'Hamilton',
    lastName: 'Rabjohn',
    email: 'hrabjohn28@theglobeandmail.com',
    salt: 'tincidunt',
    googleId: '56106537031730506'
  },
  {
    firstName: 'Goraud',
    lastName: 'Challiner',
    email: 'gchalliner29@ameblo.jp',
    salt: 'pede',
    googleId: '3585095412940568'
  },
  {
    firstName: 'Toddie',
    lastName: 'Linturn',
    email: 'tlinturn2a@blogs.com',
    salt: 'nam',
    googleId: '3567611906148575'
  },
  {
    firstName: 'Alyce',
    lastName: 'McGraw',
    email: 'amcgraw2b@archive.org',
    salt: 'donec',
    googleId: '5002357992827700'
  },
  {
    firstName: 'Bradley',
    lastName: 'Pipes',
    email: 'bpipes2c@wsj.com',
    salt: 'viverra',
    googleId: '3587038507361009'
  },
  {
    firstName: 'Gabrila',
    lastName: 'Binder',
    email: 'gbinder2d@stumbleupon.com',
    salt: 'suspendisse',
    googleId: '3572172440271558'
  },
  {
    firstName: 'Hurleigh',
    lastName: 'Jallin',
    email: 'hjallin2e@goodreads.com',
    salt: 'nulla',
    googleId: '3576971611665134'
  },
  {
    firstName: 'Lurleen',
    lastName: 'Gwillym',
    email: 'lgwillym2f@businessinsider.com',
    salt: 'nisl',
    googleId: '561092701450267177'
  },
  {
    firstName: 'Caprice',
    lastName: 'Hastwell',
    email: 'chastwell2g@booking.com',
    salt: 'adipiscing',
    googleId: '3543664858438006'
  },
  {
    firstName: 'Aline',
    lastName: 'Yushachkov',
    email: 'ayushachkov2h@slate.com',
    salt: 'aliquam',
    googleId: '3543981178597174'
  },
  {
    firstName: 'Edgar',
    lastName: 'Cleghorn',
    email: 'ecleghorn2i@umn.edu',
    salt: 'vestibulum',
    googleId: '3540296230706710'
  },
  {
    firstName: 'Klaus',
    lastName: 'Gaddas',
    email: 'kgaddas2j@dell.com',
    salt: 'cras',
    googleId: '3560519134924310'
  },
  {
    firstName: 'Livvie',
    lastName: 'Hubbock',
    email: 'lhubbock2k@fc2.com',
    salt: 'congue',
    googleId: '3550057950133726'
  },
  {
    firstName: 'Walton',
    lastName: 'Portis',
    email: 'wportis2l@ocn.ne.jp',
    salt: 'ultrices',
    googleId: '3558004550942744'
  },
  {
    firstName: 'Cristine',
    lastName: 'Padberry',
    email: 'cpadberry2m@google.nl',
    salt: 'dolor',
    googleId: '3569693156574930'
  },
  {
    firstName: 'Fabien',
    lastName: 'Manville',
    email: 'fmanville2n@simplemachines.org',
    salt: 'eget',
    googleId: '5048379674100269'
  },
  {
    firstName: 'Jody',
    lastName: 'Linthead',
    email: 'jlinthead2o@tripadvisor.com',
    salt: 'fusce',
    googleId: '63046882164754967'
  },
  {
    firstName: 'Thorny',
    lastName: 'Fellow',
    email: 'tfellow2p@narod.ru',
    salt: 'fermentum',
    googleId: '4405338237215402'
  },
  {
    firstName: 'Kinna',
    lastName: 'Lowndsbrough',
    email: 'klowndsbrough2q@ovh.net',
    salt: 'imperdiet',
    googleId: '4913522160910528'
  },
  {
    firstName: 'Dionysus',
    lastName: 'Dulake',
    email: 'ddulake2r@columbia.edu',
    salt: 'amet',
    googleId: '6771249881618109'
  }
]

module.exports = users
