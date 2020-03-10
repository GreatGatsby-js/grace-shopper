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
    firstName: 'Cody',
    lastName: 'Admin',
    email: 'cody@admin.com',
    password: 'admin',
    salt: 'facilisi',
    googleId: '3574111677995107',
    isAdmin: true
  },
  {
    firstName: 'Cody',
    lastName: 'Notadmin',
    email: 'cody@notadmin.com',
    password: 'notadmin',
    salt: 'amet',
    googleId: '6304096386143976403'
  },
  {
    firstName: 'Field',
    lastName: 'Krook',
    email: 'fkrook2@buzzfeed.com',
    password: 'IMfZIsuQhld',
    salt: 'bibendum',
    googleId: '3561142781105619'
  },
  {
    firstName: 'Lyndsie',
    lastName: 'Fernando',
    email: 'lfernando3@washingtonpost.com',
    password: '7lvMEWbj',
    salt: 'justo',
    googleId: '3566113201326478'
  },
  {
    firstName: 'Jeanette',
    lastName: 'Neathway',
    email: 'jneathway4@plala.or.jp',
    password: 'YquIGWCLmp',
    salt: 'arcu',
    googleId: '6333512945491617623'
  },
  {
    firstName: 'Renaud',
    lastName: 'Houseman',
    email: 'rhouseman5@wikia.com',
    password: '4jTwUYlFWa',
    salt: 'adipiscing',
    googleId: '5100141944217447'
  },
  {
    firstName: 'Ollie',
    lastName: 'Cooksey',
    email: 'ocooksey6@youku.com',
    password: 'HylhfJeJ',
    salt: 'odio',
    googleId: '5610778109307613'
  },
  {
    firstName: 'Beckie',
    lastName: 'Bootland',
    email: 'bbootland7@goodreads.com',
    password: 'eskSldMUbw',
    salt: 'pharetra',
    googleId: '201943311702680'
  },
  {
    firstName: 'Rosemary',
    lastName: 'Labrum',
    email: 'rlabrum8@phoca.cz',
    password: 'haSvTYwxR9A',
    salt: 'cubilia',
    googleId: '3577124003059446'
  },
  {
    firstName: 'Donetta',
    lastName: 'Gowthorpe',
    email: 'dgowthorpe9@skype.com',
    password: 'Gfzow6FG',
    salt: 'pretium',
    googleId: '3540160333929944'
  },
  {
    firstName: 'Thacher',
    lastName: 'Billitteri',
    email: 'tbillitteria@accuweather.com',
    password: '0tmHivVVdJ',
    salt: 'feugiat',
    googleId: '5293819397045194'
  },
  {
    firstName: 'Ezra',
    lastName: 'Leuren',
    email: 'eleurenb@stanford.edu',
    password: 'MWkGesE0',
    salt: 'odio',
    googleId: '63042488085475700'
  },
  {
    firstName: 'Dianne',
    lastName: 'Admans',
    email: 'dadmansc@rediff.com',
    password: 'ufdDlQ',
    salt: 'odio',
    googleId: '5100139064383627'
  },
  {
    firstName: 'Edwin',
    lastName: 'Blowes',
    email: 'eblowesd@nasa.gov',
    password: 'UxUlLVpxktr8',
    salt: 'sollicitudin',
    googleId: '30422730357993'
  },
  {
    firstName: 'Edan',
    lastName: 'Angrick',
    email: 'eangricke@indiatimes.com',
    password: 'xUnggUa9Cdx',
    salt: 'posuere',
    googleId: '3534593864625648'
  },
  {
    firstName: 'Tabina',
    lastName: 'Wiltshire',
    email: 'twiltshiref@timesonline.co.uk',
    password: 'VtBrNPIeC',
    salt: 'vivamus',
    googleId: '3551680835836780'
  },
  {
    firstName: 'Cherri',
    lastName: 'Bonds',
    email: 'cbondsg@devhub.com',
    password: 'nD8BkaT7',
    salt: 'nunc',
    googleId: '3563614702060675'
  },
  {
    firstName: 'Vaughn',
    lastName: 'Parrington',
    email: 'vparringtonh@vk.com',
    password: 'tNEv0Ztb',
    salt: 'ut',
    googleId: '3589521044240560'
  },
  {
    firstName: 'Steward',
    lastName: 'Shipp',
    email: 'sshippi@economist.com',
    password: 'miARdE7w',
    salt: 'suspendisse',
    googleId: '633370970223406350'
  },
  {
    firstName: 'Auguste',
    lastName: 'Olwen',
    email: 'aolwenj@zdnet.com',
    password: '7gGmV6wO',
    salt: 'urna',
    googleId: '3538363658835191'
  },
  {
    firstName: 'Orrin',
    lastName: 'Cozins',
    email: 'ocozinsk@sun.com',
    password: 'a26EJMVRnZ',
    salt: 'neque',
    googleId: '3563733897248927'
  },
  {
    firstName: 'Adaline',
    lastName: 'Rehor',
    email: 'arehorl@bandcamp.com',
    password: 'ukVMWinK',
    salt: 'non',
    googleId: '5602220217494892'
  },
  {
    firstName: 'Annelise',
    lastName: 'Pottberry',
    email: 'apottberrym@weibo.com',
    password: 'N73CXBfB',
    salt: 'venenatis',
    googleId: '3571580105938983'
  },
  {
    firstName: 'Wilbur',
    lastName: 'Haddleston',
    email: 'whaddlestonn@state.gov',
    password: 'u3YBWBUXOD9',
    salt: 'amet',
    googleId: '5641822426128967162'
  },
  {
    firstName: 'Issiah',
    lastName: 'Duckit',
    email: 'iduckito@ocn.ne.jp',
    password: 'aqU7GNrK',
    salt: 'eu',
    googleId: '36751836203006'
  },
  {
    firstName: 'Valentine',
    lastName: 'Plampeyn',
    email: 'vplampeynp@tripadvisor.com',
    password: 'luZmXN',
    salt: 'vulputate',
    googleId: '3552543524667800'
  },
  {
    firstName: 'Nerissa',
    lastName: 'Barbe',
    email: 'nbarbeq@tripod.com',
    password: '3EAvXnSc',
    salt: 'libero',
    googleId: '3528079003867935'
  },
  {
    firstName: 'Erroll',
    lastName: 'Setchell',
    email: 'esetchellr@infoseek.co.jp',
    password: 'dXp1gl',
    salt: 'ipsum',
    googleId: '4913645007020274'
  },
  {
    firstName: 'Imojean',
    lastName: 'Szwarc',
    email: 'iszwarcs@blinklist.com',
    password: 'I5dxVEzwl0O',
    salt: 'ultrices',
    googleId: '5602258960340425'
  },
  {
    firstName: 'Elvin',
    lastName: 'Lowdeane',
    email: 'elowdeanet@archive.org',
    password: 'IEhzvbQVEgkH',
    salt: 'odio',
    googleId: '3567740388578593'
  },
  {
    firstName: 'Drake',
    lastName: 'Kelling',
    email: 'dkellingu@uol.com.br',
    password: 'nxJ1e0KN',
    salt: 'neque',
    googleId: '3532832158047917'
  },
  {
    firstName: 'Kalie',
    lastName: 'Snaddin',
    email: 'ksnaddinv@baidu.com',
    password: 'B0Nz1t4X3W',
    salt: 'mauris',
    googleId: '3534121905175777'
  },
  {
    firstName: 'Bone',
    lastName: 'Trevain',
    email: 'btrevainw@a8.net',
    password: 'Jnz6F5pZdM',
    salt: 'morbi',
    googleId: '5602242110134425'
  },
  {
    firstName: 'Jonis',
    lastName: 'Gosker',
    email: 'jgoskerx@census.gov',
    password: 'ZifSf3pEa',
    salt: 'nulla',
    googleId: '3587783180891042'
  },
  {
    firstName: 'Lothario',
    lastName: 'Barrack',
    email: 'lbarracky@wordpress.com',
    password: 'BDO7V0L6p4NX',
    salt: 'quis',
    googleId: '30107672344436'
  },
  {
    firstName: 'Welch',
    lastName: 'Arnholtz',
    email: 'warnholtzz@google.co.uk',
    password: 'VwneQF',
    salt: 'amet',
    googleId: '676737900149774521'
  },
  {
    firstName: 'Baron',
    lastName: 'Stawell',
    email: 'bstawell10@businessweek.com',
    password: 'uu1qjey',
    salt: 'eu',
    googleId: '5007661995602506'
  },
  {
    firstName: 'Diego',
    lastName: 'Burdess',
    email: 'dburdess11@webmd.com',
    password: 'e2hnY5',
    salt: 'imperdiet',
    googleId: '3554854994669509'
  },
  {
    firstName: 'Chastity',
    lastName: 'Rooke',
    email: 'crooke12@liveinternet.ru',
    password: 'Um0YxO',
    salt: 'non',
    googleId: '201820108769942'
  },
  {
    firstName: 'Jared',
    lastName: 'Rourke',
    email: 'jrourke13@businessinsider.com',
    password: 'duDzFFHQhTIz',
    salt: 'venenatis',
    googleId: '3581466922754035'
  },
  {
    firstName: 'Morton',
    lastName: 'Daleman',
    email: 'mdaleman14@si.edu',
    password: '6jrpQw5Dy',
    salt: 'rhoncus',
    googleId: '3560201689456135'
  },
  {
    firstName: 'Naoma',
    lastName: 'Studart',
    email: 'nstudart15@yahoo.co.jp',
    password: '8tax257SbX',
    salt: 'erat',
    googleId: '5602248526307369581'
  },
  {
    firstName: 'Trina',
    lastName: 'Willavoys',
    email: 'twillavoys16@bluehost.com',
    password: 'ocu2lV6UY',
    salt: 'libero',
    googleId: '3548612739588791'
  },
  {
    firstName: 'Delphine',
    lastName: 'Shucksmith',
    email: 'dshucksmith17@eepurl.com',
    password: '5IHZke',
    salt: 'luctus',
    googleId: '3533383634490791'
  },
  {
    firstName: 'Laird',
    lastName: 'Melrose',
    email: 'lmelrose18@furl.net',
    password: 'GRB7ML',
    salt: 'justo',
    googleId: '5048373297494795'
  },
  {
    firstName: 'Gerda',
    lastName: "O'Driscoll",
    email: 'godriscoll19@arizona.edu',
    password: 'AzbrUv2',
    salt: 'nibh',
    googleId: '3551559317772780'
  },
  {
    firstName: 'Roth',
    lastName: 'Casetta',
    email: 'rcasetta1a@topsy.com',
    password: '0W0pYDO',
    salt: 'rutrum',
    googleId: '3542606722832063'
  },
  {
    firstName: 'Michel',
    lastName: 'Hannent',
    email: 'mhannent1b@unicef.org',
    password: 'JBG81C4YVeGc',
    salt: 'nibh',
    googleId: '3589384567858197'
  },
  {
    firstName: 'Celina',
    lastName: 'Quail',
    email: 'cquail1c@slideshare.net',
    password: 'ZO0R26W',
    salt: 'cubilia',
    googleId: '5010124819942660'
  },
  {
    firstName: 'Rusty',
    lastName: 'Tolputt',
    email: 'rtolputt1d@simplemachines.org',
    password: 'RPatkjgJeK23',
    salt: 'purus',
    googleId: '3580390988621048'
  },
  {
    firstName: 'Clyde',
    lastName: 'Pirri',
    email: 'cpirri1e@artisteer.com',
    password: '4zY8YRl7',
    salt: 'phasellus',
    googleId: '343917961252807'
  },
  {
    firstName: 'Elli',
    lastName: 'Schimon',
    email: 'eschimon1f@icio.us',
    password: 'hizafdf',
    salt: 'fermentum',
    googleId: '4405746830290178'
  },
  {
    firstName: 'Finn',
    lastName: 'Spottiswoode',
    email: 'fspottiswoode1g@geocities.jp',
    password: 'I1aeIhfYI',
    salt: 'vel',
    googleId: '4017952098859999'
  },
  {
    firstName: 'Deloria',
    lastName: 'Glenister',
    email: 'dglenister1h@gravatar.com',
    password: 'pWpaDWLm0v',
    salt: 'vestibulum',
    googleId: '3552120338927926'
  },
  {
    firstName: 'Michele',
    lastName: 'Irving',
    email: 'mirving1i@vinaora.com',
    password: 'RoeGZZlnUV',
    salt: 'accumsan',
    googleId: '3529228262886099'
  },
  {
    firstName: 'Darcee',
    lastName: 'Haddrill',
    email: 'dhaddrill1j@sphinn.com',
    password: 'XK7EYzqJt',
    salt: 'blandit',
    googleId: '6763118469316385460'
  },
  {
    firstName: 'Tammie',
    lastName: 'Harrap',
    email: 'tharrap1k@fema.gov',
    password: 'laQ8sAK',
    salt: 'erat',
    googleId: '3587446165140609'
  },
  {
    firstName: 'Kacie',
    lastName: 'Muggeridge',
    email: 'kmuggeridge1l@ning.com',
    password: 'A5C9RWg',
    salt: 'felis',
    googleId: '5602251153462353'
  },
  {
    firstName: 'Tammie',
    lastName: 'Kayzer',
    email: 'tkayzer1m@xinhuanet.com',
    password: 'zw0G9S9M',
    salt: 'nascetur',
    googleId: '3565959270860842'
  },
  {
    firstName: 'Hermann',
    lastName: 'Reddan',
    email: 'hreddan1n@ask.com',
    password: 'UUYq7fTA',
    salt: 'elementum',
    googleId: '3549638853760873'
  },
  {
    firstName: 'Maurizio',
    lastName: 'Breach',
    email: 'mbreach1o@businessweek.com',
    password: 'V5hHF4UNj6',
    salt: 'luctus',
    googleId: '63048380902792850'
  },
  {
    firstName: 'Zacherie',
    lastName: 'Deville',
    email: 'zdeville1p@businesswire.com',
    password: '4MAWgjOoh',
    salt: 'nibh',
    googleId: '5602235883162948222'
  },
  {
    firstName: 'Mufinella',
    lastName: 'Scouler',
    email: 'mscouler1q@dmoz.org',
    password: 'tkCbdWZS',
    salt: 'amet',
    googleId: '5108751941798918'
  },
  {
    firstName: 'Karilynn',
    lastName: 'Bunney',
    email: 'kbunney1r@ucoz.ru',
    password: 'CEJJrcJ8ZT',
    salt: 'non',
    googleId: '5344855280288474'
  },
  {
    firstName: 'Bourke',
    lastName: 'Fuxman',
    email: 'bfuxman1s@bloomberg.com',
    password: 'Yjc074BIU0',
    salt: 'in',
    googleId: '5476749882866102'
  },
  {
    firstName: 'Hermy',
    lastName: 'Cockings',
    email: 'hcockings1t@gnu.org',
    password: 'lBxlQS5L5Qgw',
    salt: 'luctus',
    googleId: '3531091676145981'
  },
  {
    firstName: 'Gwenore',
    lastName: 'Drewery',
    email: 'gdrewery1u@yolasite.com',
    password: '4epxcOb',
    salt: 'quam',
    googleId: '6380759851104248'
  },
  {
    firstName: 'Silvie',
    lastName: 'Veld',
    email: 'sveld1v@printfriendly.com',
    password: 'EdUdzv',
    salt: 'auctor',
    googleId: '3585972240053998'
  },
  {
    firstName: 'Janos',
    lastName: 'Le land',
    email: 'jleland1w@google.cn',
    password: 'A0mbrI9xvCe',
    salt: 'purus',
    googleId: '30538207282362'
  },
  {
    firstName: 'Sari',
    lastName: 'Swallow',
    email: 'sswallow1x@businessinsider.com',
    password: 'AnicjjTldF',
    salt: 'ultrices',
    googleId: '5368034510010162'
  },
  {
    firstName: 'Elberta',
    lastName: 'Heliar',
    email: 'eheliar1y@wordpress.org',
    password: 'GeCtcjV',
    salt: 'faucibus',
    googleId: '36089143324441'
  },
  {
    firstName: 'Olivie',
    lastName: 'Reisen',
    email: 'oreisen1z@chron.com',
    password: '1hEuJR',
    salt: 'morbi',
    googleId: '3531213011713006'
  },
  {
    firstName: 'Annamarie',
    lastName: 'McGilleghole',
    email: 'amcgilleghole20@godaddy.com',
    password: 'vF3CtxmuQs0',
    salt: 'ipsum',
    googleId: '5100144176423006'
  },
  {
    firstName: 'Ody',
    lastName: 'Hum',
    email: 'ohum21@51.la',
    password: 's43vxtXe8L',
    salt: 'est',
    googleId: '3533257864687518'
  },
  {
    firstName: 'Carley',
    lastName: 'Lotwich',
    email: 'clotwich22@digg.com',
    password: 'zN17vXZ0KZ',
    salt: 'porttitor',
    googleId: '30583240635135'
  },
  {
    firstName: 'Bertie',
    lastName: 'Woltman',
    email: 'bwoltman23@jiathis.com',
    password: '0BcjED0tViB',
    salt: 'bibendum',
    googleId: '0604324009590180138'
  },
  {
    firstName: 'Felicle',
    lastName: 'Leader',
    email: 'fleader24@angelfire.com',
    password: 'yB3lfi2J7y',
    salt: 'nisi',
    googleId: '3552635242401270'
  },
  {
    firstName: 'Hoyt',
    lastName: 'Swanson',
    email: 'hswanson25@npr.org',
    password: '0gP413Iwj',
    salt: 'vel',
    googleId: '3589517945703482'
  },
  {
    firstName: 'Royal',
    lastName: 'Carcass',
    email: 'rcarcass26@is.gd',
    password: 'xLCpeQnjw7bj',
    salt: 'porttitor',
    googleId: '676743257802639000'
  },
  {
    firstName: 'Aloise',
    lastName: 'Gronw',
    email: 'agronw27@weather.com',
    password: '3LnTjSAM',
    salt: 'ut',
    googleId: '3564598159847008'
  },
  {
    firstName: 'Jameson',
    lastName: 'Audiss',
    email: 'jaudiss28@google.com.au',
    password: 'dKes8KBYAlji',
    salt: 'consectetuer',
    googleId: '6397225179031498'
  },
  {
    firstName: 'Leontyne',
    lastName: 'Caistor',
    email: 'lcaistor29@xrea.com',
    password: 'iM5j3u',
    salt: 'consequat',
    googleId: '4508543866368390'
  },
  {
    firstName: 'Nichole',
    lastName: 'Keeffe',
    email: 'nkeeffe2a@foxnews.com',
    password: 'pG8RYO9YN',
    salt: 'et',
    googleId: '5602248576153098'
  },
  {
    firstName: 'Rorke',
    lastName: 'Tivenan',
    email: 'rtivenan2b@live.com',
    password: 'r60Ngjs',
    salt: 'rutrum',
    googleId: '6334414756383000878'
  },
  {
    firstName: 'Beniamino',
    lastName: 'Ceaplen',
    email: 'bceaplen2c@hao123.com',
    password: 'MI1J7dAeClYW',
    salt: 'habitasse',
    googleId: '5038537571785740660'
  },
  {
    firstName: 'Jeane',
    lastName: 'Climie',
    email: 'jclimie2d@alibaba.com',
    password: 'hFDxNr',
    salt: 'turpis',
    googleId: '201904719827297'
  },
  {
    firstName: 'Becky',
    lastName: 'Wabersich',
    email: 'bwabersich2e@pen.io',
    password: 'Vmb3due',
    salt: 'vestibulum',
    googleId: '5007666961155983'
  },
  {
    firstName: 'Fleur',
    lastName: 'Pickersail',
    email: 'fpickersail2f@comsenz.com',
    password: '6ubYDCo',
    salt: 'consectetuer',
    googleId: '3583036841499042'
  },
  {
    firstName: 'Winnie',
    lastName: 'Topling',
    email: 'wtopling2g@accuweather.com',
    password: 'jFqv8f',
    salt: 'sagittis',
    googleId: '3576310952885508'
  },
  {
    firstName: 'Adelind',
    lastName: 'Simko',
    email: 'asimko2h@upenn.edu',
    password: '5d6xA2',
    salt: 'venenatis',
    googleId: '3538151634645945'
  },
  {
    firstName: 'Edy',
    lastName: 'McGeorge',
    email: 'emcgeorge2i@parallels.com',
    password: 'NvtQONE',
    salt: 'quis',
    googleId: '201855092858251'
  },
  {
    firstName: 'Melodee',
    lastName: 'Drewry',
    email: 'mdrewry2j@cnet.com',
    password: 'bM2RbTIr',
    salt: 'magna',
    googleId: '3537769604421434'
  },
  {
    firstName: 'Emylee',
    lastName: 'Paulson',
    email: 'epaulson2k@smh.com.au',
    password: 'oDSBL3sa',
    salt: 'platea',
    googleId: '374283059129114'
  },
  {
    firstName: 'Nelle',
    lastName: 'Litchmore',
    email: 'nlitchmore2l@dropbox.com',
    password: 'GfpLQafp',
    salt: 'at',
    googleId: '4405338332305421'
  },
  {
    firstName: 'Genvieve',
    lastName: 'McGenn',
    email: 'gmcgenn2m@deliciousdays.com',
    password: 'Z23spL6',
    salt: 'in',
    googleId: '3584013975565988'
  },
  {
    firstName: 'Bil',
    lastName: 'Tetlow',
    email: 'btetlow2n@wikimedia.org',
    password: 'zjnWbKDb8OI',
    salt: 'orci',
    googleId: '4175009167671926'
  },
  {
    firstName: 'Leilah',
    lastName: 'Fontell',
    email: 'lfontell2o@geocities.com',
    password: '1rwTyby8Z6nZ',
    salt: 'ut',
    googleId: '5108757219695405'
  },
  {
    firstName: 'Dame',
    lastName: 'Murrill',
    email: 'dmurrill2p@usda.gov',
    password: 'ZBlwPcU',
    salt: 'aenean',
    googleId: '5602238861582358'
  },
  {
    firstName: 'Klarrisa',
    lastName: 'Whiles',
    email: 'kwhiles2q@dropbox.com',
    password: 'vkUYXS3',
    salt: 'vestibulum',
    googleId: '5602239682651638'
  },
  {
    firstName: 'Remy',
    lastName: 'Center',
    email: 'rcenter2r@friendfeed.com',
    password: 'CVkkxg',
    salt: 'in',
    googleId: '3576456986897678'
  }
]

module.exports = users
