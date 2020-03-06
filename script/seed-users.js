const users = [
  {
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
    email: 'fstapels2@hhs.gov',
    password: 'IZWosxyb',
    salt: 'cras',
    googleId: '6706661494040440'
  },
  {
    email: 'rmorin3@narod.ru',
    password: 'iR7UvoHOWcLh',
    salt: 'ligula',
    googleId: '3562915610860556'
  },
  {
    email: 'kgarley4@nsw.gov.au',
    password: 'pux0w73',
    salt: 'ac',
    googleId: '4936466210180719026'
  },
  {
    email: 'jbilovsky5@jiathis.com',
    password: 'KgXmhc',
    salt: 'feugiat',
    googleId: '3533638580313572'
  },
  {
    email: 'kgarber6@clickbank.net',
    password: 'lXeKDjJeeW',
    salt: 'id',
    googleId: '5610560367044900'
  },
  {
    email: 'wponde7@scribd.com',
    password: '8AnC0oQ',
    salt: 'cras',
    googleId: '6304378761943240'
  },
  {
    email: 'bjillions8@google.pl',
    password: 'btyA0ar',
    salt: 'sed',
    googleId: '374288286489082'
  },
  {
    email: 'hcanham9@people.com.cn',
    password: 'Z5vfDF',
    salt: 'adipiscing',
    googleId: '6762232528797594'
  },
  {
    email: 'kpiontera@purevolume.com',
    password: '5cK9W74fDai',
    salt: 'dui',
    googleId: '30563791750012'
  },
  {
    email: 'swaithb@360.cn',
    password: 'pKBT3l',
    salt: 'odio',
    googleId: '3532852242152721'
  },
  {
    email: 'ftersayc@yandex.ru',
    password: '5osB9IUwb',
    salt: 'suscipit',
    googleId: '4913977469179110'
  },
  {
    email: 'mcampiond@nps.gov',
    password: '3SPaI73YuiH',
    salt: 'commodo',
    googleId: '3566605603250131'
  },
  {
    email: 'gaureliuse@wordpress.com',
    password: 'W1295M',
    salt: 'mauris',
    googleId: '5048377501375062'
  },
  {
    email: 'lgrimsellf@scribd.com',
    password: 'czLqse91fM',
    salt: 'sit',
    googleId: '5038160359092605'
  },
  {
    email: 'treadmireg@trellian.com',
    password: 'aAWQZZ9Nkk3',
    salt: 'amet',
    googleId: '5100130139944436'
  },
  {
    email: 'fmckeanh@ocn.ne.jp',
    password: 'JhRS6HgZ',
    salt: 'pede',
    googleId: '3532915627723174'
  },
  {
    email: 'eflippinii@delicious.com',
    password: 'I1OMyGBxoILy',
    salt: 'in',
    googleId: '630426195695769057'
  },
  {
    email: 'vlarrawayj@google.com.br',
    password: 'MuDZmO',
    salt: 'vulputate',
    googleId: '3571908707036270'
  },
  {
    email: 'gberrisfordk@howstuffworks.com',
    password: 'XXOLaeX64b2',
    salt: 'in',
    googleId: '3533368210701265'
  },
  {
    email: 'gdaddsl@quantcast.com',
    password: 'CaAs4M',
    salt: 'massa',
    googleId: '4026602277930710'
  },
  {
    email: 'tcrownshawm@360.cn',
    password: 'fJWoTTz7G',
    salt: 'nulla',
    googleId: '6373345198768041'
  },
  {
    email: 'jsedgefieldn@ask.com',
    password: 'Nre1zh',
    salt: 'nonummy',
    googleId: '3589663486500166'
  },
  {
    email: 'bsievewrighto@ibm.com',
    password: 'sEPQ0ql',
    salt: 'hac',
    googleId: '5602239072656692'
  },
  {
    email: 'kbeckerp@reference.com',
    password: 'NhwXkSAvXk',
    salt: 'sit',
    googleId: '3556612631356551'
  },
  {
    email: 'hyeilesq@furl.net',
    password: 'FoRyDWmM7',
    salt: 'ante',
    googleId: '374288184280278'
  },
  {
    email: 'mmeighr@mtv.com',
    password: 'bsuT2v9wEwnv',
    salt: 'vitae',
    googleId: '3563390815806144'
  },
  {
    email: 'mhudspeths@miibeian.gov.cn',
    password: 'lRNjnOSLfcaN',
    salt: 'nibh',
    googleId: '4911653681213506'
  },
  {
    email: 'bburkartt@vk.com',
    password: '2HgEfzLCv',
    salt: 'nulla',
    googleId: '3576854800086538'
  },
  {
    email: 'dsabieu@rediff.com',
    password: 'JLPsNca',
    salt: 'tincidunt',
    googleId: '4384754012677522'
  },
  {
    email: 'srandalstonv@spotify.com',
    password: 'zsYZYh',
    salt: 'nunc',
    googleId: '5048378397131205'
  },
  {
    email: 'cfaulow@taobao.com',
    password: 'eNnEavTi',
    salt: 'aenean',
    googleId: '4041378733836'
  },
  {
    email: 'cdelacourx@hibu.com',
    password: 'Rx1KEsvDCX5',
    salt: 'in',
    googleId: '3586034234122302'
  },
  {
    email: 'vionnisiany@wunderground.com',
    password: 'BeNw3jcJNue4',
    salt: 'hac',
    googleId: '676755756235123354'
  },
  {
    email: 'asnowdingz@github.io',
    password: 'BEE5NPn',
    salt: 'cursus',
    googleId: '490365016616833339'
  },
  {
    email: 'ktissell10@archive.org',
    password: 'aeLkqx40',
    salt: 'nulla',
    googleId: '3574249935358468'
  },
  {
    email: 'ktilbury11@scribd.com',
    password: 'gxAG12x',
    salt: 'vestibulum',
    googleId: '4026888228307609'
  },
  {
    email: 'dmollindinia12@ted.com',
    password: 'o43BpHlv1',
    salt: 'vulputate',
    googleId: '5602257652606085'
  },
  {
    email: 'vhannabuss13@home.pl',
    password: '1VeO9t',
    salt: 'in',
    googleId: '5510351442605092'
  },
  {
    email: 'nrigate14@istockphoto.com',
    password: '3jaFyQ',
    salt: 'potenti',
    googleId: '30240717143578'
  },
  {
    email: 'elestrange15@1688.com',
    password: 'c0yJOH10n',
    salt: 'cum',
    googleId: '6386301320903902'
  },
  {
    email: 'rstedman16@yellowbook.com',
    password: 'CIYJ1Vt',
    salt: 'sapien',
    googleId: '4041593332315'
  },
  {
    email: 'swyld17@wikia.com',
    password: 'eiyojbFx2SH',
    salt: 'cum',
    googleId: '6385339037942343'
  },
  {
    email: 'clilburne18@ning.com',
    password: 'rO8ksmDyg8',
    salt: 'in',
    googleId: '5610749829438087'
  },
  {
    email: 'amuselli19@feedburner.com',
    password: '0nEuxindY',
    salt: 'donec',
    googleId: '30375563198654'
  },
  {
    email: 'bcurd1a@tmall.com',
    password: 'WJJgW2q',
    salt: 'ultrices',
    googleId: '30547245061720'
  },
  {
    email: 'dtheakston1b@mysql.com',
    password: 'Uwt4mPnWZXo',
    salt: 'congue',
    googleId: '201602994754752'
  },
  {
    email: 'eclackers1c@purevolume.com',
    password: 'H0FLf9GR',
    salt: 'sed',
    googleId: '5474936446044951'
  },
  {
    email: 'mdumingo1d@constantcontact.com',
    password: 'OgHeEPecI',
    salt: 'in',
    googleId: '3551989787240655'
  },
  {
    email: 'fadnams1e@reverbnation.com',
    password: 'uuGlCGQZsu',
    salt: 'curae',
    googleId: '5100146726270258'
  },
  {
    email: 'tskittrall1f@vistaprint.com',
    password: 'YBtifdod8Q1C',
    salt: 'quis',
    googleId: '560224117900611869'
  },
  {
    email: 'ccloy1g@mozilla.org',
    password: 'RwTTsPSdnHS',
    salt: 'et',
    googleId: '374283827872748'
  },
  {
    email: 'aganter1h@nih.gov',
    password: 'YP3R6EAKAl',
    salt: 'turpis',
    googleId: '3575054495282267'
  },
  {
    email: 'bjura1i@privacy.gov.au',
    password: '3pq35ubpH33h',
    salt: 'phasellus',
    googleId: '3583062572687613'
  },
  {
    email: 'vsiveyer1j@cocolog-nifty.com',
    password: 'XeeSuq',
    salt: 'eros',
    googleId: '30081834033932'
  },
  {
    email: 'vcuniffe1k@blogs.com',
    password: 'lF9i2Kk',
    salt: 'convallis',
    googleId: '5602225278833524'
  },
  {
    email: 'lkenrack1l@psu.edu',
    password: 'UzdIctKx4z',
    salt: 'ac',
    googleId: '5108757858515633'
  },
  {
    email: 'dteffrey1m@omniture.com',
    password: 'HxXbUPG6bL9C',
    salt: 'aliquet',
    googleId: '58938630662058279'
  },
  {
    email: 'gdoiley1n@noaa.gov',
    password: 'minuXqZqE',
    salt: 'nec',
    googleId: '3537411797030736'
  },
  {
    email: 'imcelwee1o@topsy.com',
    password: 'IVwABxbQjMD6',
    salt: 'scelerisque',
    googleId: '3556779792944234'
  },
  {
    email: 'goswell1p@symantec.com',
    password: 's3hipfdG6',
    salt: 'a',
    googleId: '3587366082489790'
  },
  {
    email: 'ztynemouth1q@fc2.com',
    password: 'R5u1Yy',
    salt: 'porttitor',
    googleId: '340034447079847'
  },
  {
    email: 'mboss1r@harvard.edu',
    password: '0JHHttZU',
    salt: 'vel',
    googleId: '3561630977518843'
  },
  {
    email: 'lbaumann1s@about.me',
    password: 'NaDz8v',
    salt: 'pede',
    googleId: '3580489504896371'
  },
  {
    email: 'ifleischmann1t@xinhuanet.com',
    password: 'fyOZHS7K9nBR',
    salt: 'risus',
    googleId: '5602246990970964'
  },
  {
    email: 'kvelti1u@shinystat.com',
    password: 'THbC1HQ',
    salt: 'in',
    googleId: '3537198756840136'
  },
  {
    email: 'ecumming1v@bloglines.com',
    password: 'YXF43MMtn',
    salt: 'imperdiet',
    googleId: '3579265295024495'
  },
  {
    email: 'ctroyes1w@flavors.me',
    password: '2RlPUX4I',
    salt: 'volutpat',
    googleId: '30272328792824'
  },
  {
    email: 'bditchburn1x@patch.com',
    password: 'j3ULvijvOR',
    salt: 'sed',
    googleId: '3565656625392972'
  },
  {
    email: 'dligoe1y@blogtalkradio.com',
    password: 'mtoX26nas',
    salt: 'lacus',
    googleId: '3532004256505903'
  },
  {
    email: 'eshermar1z@sitemeter.com',
    password: '7fNCm0fz',
    salt: 'nullam',
    googleId: '4844787825181724'
  },
  {
    email: 'mwiz20@addthis.com',
    password: 'ftgouYqHYJw',
    salt: 'vulputate',
    googleId: '30281988909966'
  },
  {
    email: 'ssenechault21@hibu.com',
    password: '7O3xkAXktylF',
    salt: 'at',
    googleId: '5602218077168606'
  },
  {
    email: 'ghiddersley22@archive.org',
    password: 'wozs8vH',
    salt: 'erat',
    googleId: '67060257232828659'
  },
  {
    email: 'aboteman23@domainmarket.com',
    password: 'v640jZw3TNE',
    salt: 'felis',
    googleId: '6761020956905347'
  },
  {
    email: 'esmallbone24@wired.com',
    password: 'wzu5VV53Tne',
    salt: 'hac',
    googleId: '5010120249742142'
  },
  {
    email: 'dsmalls25@gov.uk',
    password: '5z5b4I6TMU',
    salt: 'pede',
    googleId: '30457046854820'
  },
  {
    email: 'bphilippou26@senate.gov',
    password: 's0DRish',
    salt: 'et',
    googleId: '3572298369311594'
  },
  {
    email: 'dcampion27@indiegogo.com',
    password: 'Akivjsn6tPI',
    salt: 'nam',
    googleId: '3538544634070488'
  },
  {
    email: 'kgerger28@skyrock.com',
    password: 'PCQDOTs',
    salt: 'sapien',
    googleId: '3574254883975180'
  },
  {
    email: 'bmacgillavery29@theguardian.com',
    password: 'UHPTNnwi',
    salt: 'pede',
    googleId: '675972871246300229'
  },
  {
    email: 'ndibson2a@dailymotion.com',
    password: 'ce8QyNDiU7',
    salt: 'aenean',
    googleId: '3537307579527313'
  },
  {
    email: 'bjeromson2b@techcrunch.com',
    password: 'dfzAjJa',
    salt: 'vestibulum',
    googleId: '3584222366167763'
  },
  {
    email: 'cantonacci2c@clickbank.net',
    password: '1QGJmSXef9FR',
    salt: 'faucibus',
    googleId: '676289452062267465'
  },
  {
    email: 'acheley2d@prlog.org',
    password: 'cummIS',
    salt: 'ipsum',
    googleId: '3586088949239330'
  },
  {
    email: 'mcovotti2e@jalbum.net',
    password: '29kcNB0',
    salt: 'porttitor',
    googleId: '3547004724863812'
  },
  {
    email: 'mforryan2f@sogou.com',
    password: 'kIr5SEkIAJ',
    salt: 'vel',
    googleId: '5542882974939394'
  },
  {
    email: 'ktague2g@free.fr',
    password: 'kQ1NV299',
    salt: 'suscipit',
    googleId: '3534607038653987'
  },
  {
    email: 'scare2h@ca.gov',
    password: 'BLVAN23PV',
    salt: 'quis',
    googleId: '3557764942506785'
  },
  {
    email: 'bleither2i@mail.ru',
    password: 'C8g5PcVo',
    salt: 'ut',
    googleId: '3570110216833500'
  },
  {
    email: 'ltunesi2j@nbcnews.com',
    password: 'ojOduhmBor',
    salt: 'ipsum',
    googleId: '3550134433207235'
  },
  {
    email: 'anarramor2k@unesco.org',
    password: 'cRdVT1',
    salt: 'quam',
    googleId: '5499345766554451'
  },
  {
    email: 'gketteman2l@theglobeandmail.com',
    password: 'BYcesNgZUHPR',
    salt: 'nunc',
    googleId: '3587924134314018'
  },
  {
    email: 'ccarnegy2m@booking.com',
    password: 'dHcBANmV3s',
    salt: 'turpis',
    googleId: '4405010889904977'
  },
  {
    email: 'echolerton2n@java.com',
    password: 'C7I7Pn30B',
    salt: 'sed',
    googleId: '30316454000757'
  },
  {
    email: 'phowat2o@sciencedirect.com',
    password: 'rNF0g4',
    salt: 'suscipit',
    googleId: '3567946682153146'
  },
  {
    email: 'plargan2p@ocn.ne.jp',
    password: 'Q1XxRJ',
    salt: 'vivamus',
    googleId: '4990554364999938'
  },
  {
    email: 'cmiddlehurst2q@cloudflare.com',
    password: 'Zhwz3Y',
    salt: 'quis',
    googleId: '3557930330971440'
  },
  {
    email: 'ijaxon2r@istockphoto.com',
    password: 'GFzh5qzeeqkM',
    salt: 'nibh',
    googleId: '4913556743332040'
  }
]

// export default users;

module.exports = users
