// Original practice questions. Each item: topic, question, options (optional), correct answer, explanation.
const SUBJECTS=[
{id:'afr',name:'Afrikaans Taaltoets',date:'5 Nov',topics:['Werkwoorde','Verlede tyd','Toekomende tyd','Voornaamwoorde','Meervoude','Ontkennende vorm','Voegwoorde','Byvoeglike naamwoorde','Selfstandige naamwoorde','Alfabetiese volgorde'],source:'School examination timetable; Grade 4 CAPS Afrikaans language structures.'},
{id:'nst',name:'Natural Sciences',date:'5 Nov',topics:['Features of Earth','Land and water','Atmosphere and habitats','Solar system','The Sun','Orbits'],source:'Provided textbook pages 154–168 and examination timetable.'},
{id:'eng',name:'English Language',date:'6 Nov',topics:['Synonyms','Antonyms','Degrees of comparison','Subject and predicate','Parts of speech','Drama','Tenses','Punctuation'],source:'School examination timetable.'},
{id:'hist',name:'History',date:'6 Nov',topics:['Old communication','Modern communication','Communication change'],source:'School examination timetable: pp. 114–117 mentioned but not supplied.'},
{id:'math',name:'Mathematics',date:'10 Nov',topics:['Fractions','Four operations','Problem solving','Flow diagrams','Money','Viewing objects'],source:'School examination timetable.'},
{id:'life',name:'Life Skills',date:'10 Nov',topics:['SA religions','Water safety','Road safety','Personal health','Healthy environment'],source:'School examination timetable; excluding rivers-and-lakes page.'},
{id:'art',name:'Visual Arts',date:'6 Nov · 1–2 PM',topics:['Art vocabulary','Visual literacy'],source:'School timetable specifies an assessment, but no practical brief has been supplied.'}
];
const Q=[];function add(s,t,q,a,ex,opts){Q.push({id:'q'+(Q.length+1),s,t,q,a,ex,opts:opts||null})}
// Natural sciences – questions based on the supplied book chapters.
add('nst','Features of Earth','What shape is Earth?','A sphere','Earth is approximately spherical, like a ball.',['A cube','A sphere','A flat disc','A triangle']);
add('nst','Features of Earth','What is the hard outer land surface mainly made of?','Rock','Rock forms the hard surface beneath the soil.',['Plastic','Rock','Ice only','Air']);
add('nst','Features of Earth','Why did some people in the past think Earth was flat?','The horizon made Earth look flat','From the ground, the distant horizon can appear flat.',['The Moon was square','The horizon made Earth look flat','There were no oceans','Earth was once a cube']);
add('nst','Features of Earth','What evidence shows that Earth is round?','Photographs taken from space','Space photography clearly shows Earth’s round shape.',['A drawing of a house','Photographs taken from space','A road sign','The sound of rain']);
add('nst','Land and water','About what percentage of Earth’s surface is water?','71%','The supplied textbook shows approximately 71% water and 29% land.',['29%','50%','71%','100%']);
add('nst','Land and water','About what percentage of Earth’s surface is land?','29%','The supplied textbook shows approximately 29% land.',['29%','71%','10%','90%']);
add('nst','Land and water','What do we call one of the seven very large land areas?','Continent','Continents are large landmasses.',['Island','Ocean','Continent','Atmosphere']);
add('nst','Land and water','What is an island?','Land surrounded by water','An island is a piece of land surrounded by water.',['A river','Land surrounded by water','Air over a mountain','An orbit']);
add('nst','Land and water','Which ocean is east of South Africa?','Indian Ocean','The Indian Ocean lies to the east of South Africa.',['Pacific Ocean','Indian Ocean','Arctic Ocean','Atlantic Ocean']);
add('nst','Land and water','Which ocean is west of South Africa?','Atlantic Ocean','The Atlantic Ocean lies to the west of South Africa.',['Atlantic Ocean','Indian Ocean','Southern Ocean','Pacific Ocean']);
add('nst','Land and water','What are most oceans filled with?','Salt water','Ocean water contains dissolved salts.',['Fresh milk','Salt water','Sand only','Rain clouds']);
add('nst','Land and water','Why does water collect in lakes and seas?','It fills low, hollow places','The rocky land extends below water and includes hollows where water collects.',['Water stays on mountain peaks only','It fills low, hollow places','There is no rock underwater','Wind keeps water in the sky']);
add('nst','Land and water','Where does much sand come from?','Rocks breaking down into small pieces','Weathering breaks rocks into smaller pieces, including sand.',['Stars falling to Earth','Rocks breaking down into small pieces','Sunlight turning into sand','Air becoming solid']);
add('nst','Land and water','What is soil?','Rock particles mixed with organic material','Soil includes mineral particles and decayed plant or animal matter.',['Only pure salt','Rock particles mixed with organic material','Only air','Only water']);
add('nst','Atmosphere and habitats','What is the atmosphere?','The layer of air around Earth','The atmosphere is the layer of gases surrounding Earth.',['The deepest ocean','The layer of air around Earth','A ring around Saturn','A continent']);
add('nst','Atmosphere and habitats','Why is the atmosphere important?','It provides air and helps support life','The atmosphere supplies gases necessary for life and helps regulate conditions.',['It stops Earth moving','It provides air and helps support life','It is made of metal','It contains no gases']);
add('nst','Atmosphere and habitats','What is a habitat?','A place where a living thing lives','Habitats meet the needs of particular plants or animals.',['A type of planet','A place where a living thing lives','An ocean current','A school subject']);
add('nst','Atmosphere and habitats','Which habitat is best suited to a fish?','Water','Fish live in aquatic environments.',['Desert sand','Water','Dry roof','Space']);
add('nst','Atmosphere and habitats','What may happen when a habitat is badly polluted?','Living things may struggle to survive','Pollution may damage food, water and shelter.',['All animals become bigger','Living things may struggle to survive','The Sun goes out','Earth stops orbiting']);
add('nst','Solar system','How many planets orbit the Sun in our solar system?','8','The eight planets orbit the Sun; Pluto is classified as a dwarf planet.',['7','8','9','12']);
add('nst','Solar system','Which planet is closest to the Sun?','Mercury','Mercury is first in order from the Sun.',['Venus','Earth','Mercury','Mars']);
add('nst','Solar system','Which planet is third from the Sun?','Earth','The sequence is Mercury, Venus, Earth, Mars.',['Earth','Mars','Venus','Jupiter']);
add('nst','Solar system','Which planet is the largest?','Jupiter','Jupiter is the largest planet in the solar system.',['Earth','Mercury','Jupiter','Neptune']);
add('nst','Solar system','Which planet is famous for its visible rings?','Saturn','Saturn has a striking system of rings, although other planets also have rings.',['Mars','Saturn','Mercury','Venus']);
add('nst','Solar system','Which planet is farthest from the Sun?','Neptune','Neptune is the eighth planet from the Sun.',['Neptune','Uranus','Saturn','Jupiter']);
add('nst','Solar system','Which is the correct order of the first four planets?','Mercury, Venus, Earth, Mars','Remember the planets outward from the Sun.',['Earth, Mars, Venus, Mercury','Mercury, Venus, Earth, Mars','Venus, Earth, Jupiter, Mars','Mars, Earth, Venus, Mercury']);
add('nst','Solar system','Is the Sun a planet or a star?','A star','The Sun is a star because it generates its own heat and light.',['A planet','A moon','A star','An island']);
add('nst','The Sun','Why is the Sun important for life on Earth?','It provides heat and light','Heat and light from the Sun support living things.',['It makes soil disappear','It provides heat and light','It turns Earth into a star','It blocks all air']);
add('nst','The Sun','Which is bigger: Earth or the Sun?','The Sun','The Sun is much larger in diameter than Earth.',['Earth','The Sun','Same size','Neither has a size']);
add('nst','The Sun','Why does the Sun look small in the sky?','It is very far away','Its great distance makes it appear smaller than it is.',['It is smaller than Earth','It is very far away','It is made of paper','Its light is cold']);
add('nst','The Sun','About how far is the Sun from Earth?','150 million kilometres','The textbook gives an approximate distance of 150 million km.',['150 kilometres','1 500 kilometres','150 million kilometres','15 metres']);
add('nst','The Sun','What is the Sun mainly made of?','Very hot gases','At Grade 4 level, the Sun can be described as a giant ball of extremely hot gas.',['Hard soil','Very hot gases','Wood','Liquid seawater']);
add('nst','Orbits','What is an orbit?','The path of an object moving around another','Earth travels along an orbit around the Sun.',['The layer of air','The path of an object moving around another','A very large island','A type of sand']);
add('nst','Orbits','What does Earth orbit?','The Sun','Earth is one of the eight planets that travel around the Sun.',['The Moon','Jupiter','The Sun','The Atlantic Ocean']);
add('nst','Orbits','What is at the centre of the solar system?','The Sun','The planets orbit the Sun.',['Earth','The Sun','The Moon','Neptune']);
// Afrikaans – vocabulary plus grammar and application.
add('afr','Werkwoorde','Watter woord is die werkwoord? “Die seun hardloop vinnig.”','hardloop','“Hardloop” sê wat die seun doen.',['Die','seun','hardloop','vinnig']);
add('afr','Werkwoorde','Watter woord is die werkwoord? “Ons lees elke aand.”','lees','“Lees” is die aksie.',['Ons','lees','elke','aand']);
add('afr','Verlede tyd','Kies die verlede tyd: “Ek speel sokker.”','Ek het sokker gespeel.','Vir baie werkwoorde gebruik ons “het” en die ge-vorm.',['Ek sal sokker speel.','Ek het sokker gespeel.','Ek speel sokker.','Ek is sokker speel.']);
add('afr','Verlede tyd','Kies die verlede tyd: “Sy maak kos.”','Sy het kos gemaak.','“Maak” word “het gemaak” in hierdie sin.',['Sy sal kos maak.','Sy het kos gemaak.','Sy maak kos.','Sy het kos maak.']);
add('afr','Verlede tyd','Kies die verlede tyd: “Hy eet brood.”','Hy het brood geëet.','Die verlede tyd van “eet” is “het geëet”.',['Hy het brood geëet.','Hy sal brood eet.','Hy eet brood.','Hy was brood eet.']);
add('afr','Toekomende tyd','Kies die toekomende tyd: “Ons swem.”','Ons sal swem.','“Sal” dui die toekomende tyd aan.',['Ons het geswem.','Ons sal swem.','Ons swem.','Ons is swem.']);
add('afr','Toekomende tyd','Kies die toekomende tyd: “Ek skryf ’n brief.”','Ek sal ’n brief skryf.','Gebruik “sal” en die werkwoord.',['Ek het ’n brief geskryf.','Ek sal ’n brief skryf.','Ek skryf ’n brief.','Ek brief sal skryf.']);
add('afr','Voornaamwoorde','Vervang “Pieter” met ’n voornaamwoord: “Pieter hardloop.”','Hy','“Hy” kan Pieter vervang.',['Sy','Hulle','Hy','Ons']);
add('afr','Voornaamwoorde','Vervang “Die kinders” met ’n voornaamwoord.','Hulle','“Hulle” verwys na meer as een persoon.',['Ek','Hy','Ons','Hulle']);
add('afr','Meervoude','Wat is die meervoud van “boek”?','boeke','Een boek, twee boeke.',['boeks','boeke','boekies','boekse']);
add('afr','Meervoude','Wat is die meervoud van “kind”?','kinders','Een kind, baie kinders.',['kinde','kinds','kinders','kinderse']);
add('afr','Meervoude','Wat is die meervoud van “boom”?','bome','Een boom, twee bome.',['boome','bome','booms','bomens']);
add('afr','Ontkennende vorm','Kies die ontkennende vorm: “Ek speel.”','Ek speel nie.','Die eenvoudige ontkennende sin eindig op “nie”.',['Ek speel nie.','Ek nie speel.','Ek speel geen.','Ek sal speel.']);
add('afr','Ontkennende vorm','Kies die ontkennende vorm: “Hy eet die appel.”','Hy eet nie die appel nie.','Baie Afrikaanse ontkennende sinne gebruik twee keer “nie”.',['Hy nie eet die appel.','Hy eet nie die appel nie.','Hy eet die appel nie nie.','Hy geen eet appel.']);
add('afr','Voegwoorde','Watter woord is die voegwoord? “Ek hardloop en sy stap.”','en','“En” verbind twee gedagtes.',['Ek','hardloop','en','stap']);
add('afr','Voegwoorde','Kies die voegwoord: “Ek dra ’n jas ___ dit is koud.”','want','“Want” gee ’n rede.',['maar','of','want','en']);
add('afr','Byvoeglike naamwoorde','Watter woord beskryf die hond? “Die groot hond blaf.”','groot','“Groot” sê hoe die hond is.',['Die','groot','hond','blaf']);
add('afr','Byvoeglike naamwoorde','Kies die byvoeglike naamwoord: “Die mooi blom groei.”','mooi','“Mooi” beskryf die blom.',['Die','mooi','blom','groei']);
add('afr','Selfstandige naamwoorde','Watter woord is ’n selfstandige naamwoord?','tafel','“Tafel” is die naam van ’n ding.',['vinnig','spring','tafel','baie']);
add('afr','Selfstandige naamwoorde','Watter woord benoem ’n plek?','skool','“Skool” is ’n plek.',['sag','skool','hardloop','mooi']);
add('afr','Alfabetiese volgorde','Watter woord kom eerste alfabeties?','appel','A kom voor B, K en S.',['son','boom','appel','kat']);
add('afr','Alfabetiese volgorde','Watter lys is in alfabetiese volgorde?','appel, bal, kat, son','Die beginletters volg A, B, K, S.',['kat, appel, son, bal','appel, bal, kat, son','bal, appel, son, kat','son, kat, bal, appel']);
// English
add('eng','Synonyms','Choose a synonym for “happy”.','joyful','Synonyms have similar meanings.',['angry','joyful','sad','tired']);
add('eng','Synonyms','Which word means nearly the same as “tiny”?','small','Tiny and small are synonyms.',['huge','small','loud','slow']);
add('eng','Antonyms','Choose the antonym of “brave”.','afraid','Antonyms have opposite meanings.',['courageous','bold','afraid','strong']);
add('eng','Antonyms','What is the opposite of “ancient”?','modern','Ancient means very old; modern means recent or present-day.',['historic','old','modern','early']);
add('eng','Degrees of comparison','Complete: tall, taller, _____.','tallest','The superlative form is “tallest”.',['most tall','tallest','tallerest','tall']);
add('eng','Degrees of comparison','Complete: good, better, _____.','best','Good has irregular comparison forms.',['goodest','best','more good','betterest']);
add('eng','Subject and predicate','What is the subject in “The little dog chased the ball”?','The little dog','The subject tells us who or what the sentence is about.',['chased the ball','the ball','The little dog','chased']);
add('eng','Subject and predicate','What is the predicate in “My sister reads books”?','reads books','The predicate tells what the subject does.',['My sister','reads books','sister','My']);
add('eng','Parts of speech','Identify the adjective: “A bright star shone.”','bright','An adjective describes a noun.',['A','bright','star','shone']);
add('eng','Parts of speech','Identify the adverb: “She sang softly.”','softly','Softly tells how she sang.',['She','sang','softly','none']);
add('eng','Parts of speech','Identify the pronoun: “They played outside.”','They','A pronoun can replace a noun.',['They','played','outside','none']);
add('eng','Drama','What are stage directions in a play?','Instructions for actors','Stage directions describe actions, movement or delivery.',['The title only','Instructions for actors','A shopping list','The ending only']);
add('eng','Drama','What do we call the words spoken by characters in a play?','Dialogue','Dialogue is speech between characters.',['Setting','Dialogue','Costumes','Props']);
add('eng','Tenses','Choose the past tense: “The girl runs.”','The girl ran.','Ran is the past tense of run.',['The girl will run.','The girl ran.','The girl runs.','The girl running.']);
add('eng','Tenses','Choose the future tense: “We travel.”','We will travel.','Will indicates future time.',['We travelled.','We travel.','We will travel.','We were travelling.']);
add('eng','Punctuation','Which sentence is punctuated correctly?','Where is my bag?','A question takes a question mark.',['where is my bag.','Where is my bag?','Where is my bag!','where is my bag,']);
add('eng','Punctuation','Which sentence uses an apostrophe correctly?','The girl’s book is red.','The apostrophe shows singular possession.',['The girls book is red.','The girl’s book is red.','The girls’s book is red.','The girl book’s is red.']);
// History
add('hist','Old communication','Which method was commonly used before telephones?','Letters carried by messengers or post','Letters could be delivered over a distance before modern telecommunication.',['Video calls','Instant messaging','Letters carried by messengers or post','Social media']);
add('hist','Old communication','Which of these was an early long-distance signalling method?','Smoke signals','Smoke signals have been used to communicate over distances.',['Email','Smoke signals','Smartphones','Websites']);
add('hist','Old communication','What was one limitation of handwritten letters?','Delivery could take a long time','Transporting letters could be slow.',['They needed the internet','Delivery could take a long time','No one could read them','They always arrived instantly']);
add('hist','Modern communication','Which device enables voice calls over long distances?','Telephone','Telephones send voice communications across distances.',['Abacus','Telephone','Compass','Ruler']);
add('hist','Modern communication','What can an email send?','Written messages and files','Emails can carry text and attachments.',['Only smoke','Only handwritten paper','Written messages and files','Only sound']);
add('hist','Modern communication','What is one advantage of a video call?','People can see and hear one another remotely','Video calls carry audio and visual information.',['It cannot connect distant people','People can see and hear one another remotely','It is always delivered by post','It needs no equipment']);
add('hist','Communication change','What is a major change from older to modern communication?','Messages often travel much faster','Electronic technology allows near-instant delivery.',['People no longer communicate','Messages often travel much faster','Letters never existed','Distance became larger']);
add('hist','Communication change','Why should you check information received online?','It may be incorrect or misleading','Modern communication also spreads false information quickly.',['Everything online is always true','It may be incorrect or misleading','Only books can have errors','It saves electricity']);
add('hist','Communication change','Which timeline is oldest to newest?','Smoke signals → letters → telephone → video call','This is a simplified historical sequence of methods.',['Video call → telephone → letters → smoke signals','Smoke signals → letters → telephone → video call','Telephone → smoke signals → video call → letters','Email → smoke signals → letters → phone']);
// Life skills
add('life','SA religions','Which statement about religions in South Africa is correct?','People practise different religions and deserve respect','South Africa has religious diversity and constitutional freedom of religion.',['Everyone follows one religion','People practise different religions and deserve respect','Children may mock beliefs','Only one religion exists']);
add('life','SA religions','Which is a place of worship for Muslims?','Mosque','Muslims may worship at a mosque.',['Library','Mosque','Station','Stadium']);
add('life','SA religions','Which is a place of worship for many Christians?','Church','Christians often gather in churches.',['Church','Airport','Courtroom','Museum']);
add('life','SA religions','Which is a place of worship associated with Hinduism?','Mandir (temple)','A mandir is a Hindu place of worship.',['Hospital','Mandir (temple)','Bank','Post office']);
add('life','Water safety','What should you do before entering a swimming pool?','Check for adult supervision and safe conditions','Children should swim with appropriate adult supervision.',['Dive without looking','Check for adult supervision and safe conditions','Run on wet tiles','Push another swimmer']);
add('life','Water safety','What is the safest response if someone struggles in deep water?','Call an adult or lifeguard immediately','Do not enter dangerous water without training; get help.',['Jump in without thinking','Call an adult or lifeguard immediately','Walk away','Throw rocks']);
add('life','Water safety','Why should you not run beside a swimming pool?','Wet surfaces can cause slips','Slips near water can cause injury.',['It makes you swim faster','Wet surfaces can cause slips','It changes the water colour','It stops rain']);
add('life','Road safety','Where is the safest place to cross a busy road when available?','At a pedestrian crossing','Use designated crossings and check traffic carefully.',['Between parked vehicles','At a pedestrian crossing','At a blind corner','Anywhere']);
add('life','Road safety','What should passengers do in a moving car?','Wear a seat belt','Seat belts reduce risk of injury.',['Stand up','Wear a seat belt','Lean out of windows','Play with the driver']);
add('life','Road safety','Before crossing a road you should…','Stop, look and listen','Look carefully both ways and cross only when safe.',['Run without looking','Stop, look and listen','Close your eyes','Use your phone']);
add('life','Personal health','What helps prevent germs spreading?','Washing hands with soap','Handwashing helps remove germs.',['Sharing toothbrushes','Washing hands with soap','Never bathing','Only eating sweets']);
add('life','Personal health','Which habit supports healthy sleep?','Keeping a regular bedtime','Regular sleep routines support health and learning.',['Staying up all night','Keeping a regular bedtime','Skipping all meals','Drinking lots of energy drinks']);
add('life','Healthy environment','Which action helps the environment?','Putting rubbish in bins and recycling','Good waste management helps prevent pollution.',['Throwing plastic on the ground','Putting rubbish in bins and recycling','Wasting clean water','Burning litter in the classroom']);
add('life','Healthy environment','Why should we save clean water?','It is an important resource for living things','Safe fresh water is important and can be limited.',['It has no use','It is an important resource for living things','It can never be polluted','All water is drinkable']);
// Arts – only general preparatory concepts, not an assumed assessment brief.
add('art','Art vocabulary','Which element of art describes how light or dark something looks?','Value (tone)','Value describes relative lightness or darkness.',['Value (tone)','Speed','Temperature','Rhythm of speech']);
add('art','Art vocabulary','Which are the three traditional primary paint colours?','Red, yellow and blue','Traditional primary paint colours are red, yellow and blue.',['Green, orange and purple','Red, yellow and blue','Black, white and grey','Pink, brown and green']);
add('art','Visual literacy','What does a rough-looking surface show in a drawing?','Texture','Texture refers to surface quality.',['Orbit','Texture','Tense','Fraction']);
// Mathematics: generated problems with exact answers and explanations; seeded fixed question bank.
const maths=[
['Fractions','What is 1/2 of 18?','9','Divide 18 into 2 equal groups: 18 ÷ 2 = 9.',['6','9','12','18']],
['Fractions','What is 1/4 of 28?','7','28 ÷ 4 = 7.',['4','7','8','14']],
['Fractions','Which fraction is equal to 2/4?','1/2','Dividing numerator and denominator of 2/4 by 2 gives 1/2.',['1/4','1/2','2/8','3/4']],
['Fractions','Which is greater?','3/4','With equal denominators, compare numerators; 3/4 is greater than 2/4.',['1/4','2/4','3/4','All equal']],
['Four operations','What is 348 + 276?','624','348 + 276 = 624.',['514','624','634','714']],
['Four operations','What is 803 − 457?','346','803 − 457 = 346.',['356','346','446','364']],
['Four operations','What is 24 × 6?','144','24 × 6 = 144.',['120','124','144','164']],
['Four operations','What is 96 ÷ 8?','12','8 × 12 = 96.',['11','12','14','16']],
['Problem solving','A bus has 42 passengers. 17 get off and 9 get on. How many now?','34','42 − 17 + 9 = 34.',['24','34','36','51']],
['Problem solving','There are 5 boxes with 12 pencils each. How many pencils altogether?','60','5 × 12 = 60 pencils.',['17','50','60','72']],
['Problem solving','Share 45 sweets equally among 5 children. How many each?','9','45 ÷ 5 = 9 sweets.',['5','8','9','10']],
['Flow diagrams','Input 7 → × 4 → + 2 → output. What is the output?','30','7 × 4 + 2 = 30.',['28','30','36','42']],
['Flow diagrams','Input 20 → − 6 → ÷ 2 → output. What is the output?','7','(20 − 6) ÷ 2 = 7.',['7','8','14','17']],
['Flow diagrams','A machine multiplies input by 3. What input produces 27?','9','27 ÷ 3 = 9.',['6','8','9','12']],
['Money','A book costs R35 and a pen costs R12. What is the total?','R47','R35 + R12 = R47.',['R23','R43','R47','R57']],
['Money','You pay R100 for an item costing R67. What is your change?','R33','R100 − R67 = R33.',['R23','R33','R37','R43']],
['Money','Three tickets cost R25 each. How much altogether?','R75','3 × R25 = R75.',['R50','R65','R75','R100']],
['Viewing objects','A view from directly above an object is called a…','top view','A top view shows an object from above.',['side view','front view','top view','back view']],
['Viewing objects','Which view shows an object as if you are standing in front of it?','front view','The front view is the appearance seen from the front.',['top view','front view','rear view','bottom view']],
['Viewing objects','A cube has how many square faces?','6','A cube has six square faces.',['4','5','6','8']]
];maths.forEach(x=>add('math',...x));

// Written-response questions: conservative exact/alias grading, never pretend to grade open essays.
function typed(s,t,question,answer,ex,aliases=[]){add(s,t,question,answer,ex);Q[Q.length-1].type='text';Q[Q.length-1].aliases=aliases}
const T=[
['nst','Features of Earth','What word describes the round shape of Earth?','sphere','A sphere is round, like a ball.',['spherical']],
['nst','Features of Earth','What is the hard material beneath most soil?','rock','The hard surface of Earth is made of rock.',['rocks']],
['nst','Land and water','What percentage of Earth’s surface is covered by water?','71%','About 71% is water and 29% is land.',['71','71 percent','seventy one percent']],
['nst','Land and water','Name the ocean to the east of South Africa.','Indian Ocean','South Africa borders the Indian Ocean to the east.'],
['nst','Land and water','Name the ocean to the west of South Africa.','Atlantic Ocean','South Africa borders the Atlantic Ocean to the west.'],
['nst','Land and water','What do we call a large body of salty water?','ocean','Oceans are large bodies of salt water.',['an ocean','oceans']],
['nst','Land and water','What is a smaller landmass completely surrounded by water called?','island','An island is surrounded by water.',['an island']],
['nst','Atmosphere and habitats','What is the layer of air around Earth called?','atmosphere','The atmosphere surrounds Earth.',['the atmosphere']],
['nst','Atmosphere and habitats','What is the natural home of an animal called?','habitat','A habitat provides the conditions a living thing needs.',['a habitat']],
['nst','Solar system','How many planets orbit the Sun?','8','Our solar system has eight planets.',['eight']],
['nst','Solar system','Name the closest planet to the Sun.','Mercury','Mercury is closest to the Sun.'],
['nst','Solar system','Name the farthest planet from the Sun.','Neptune','Neptune is the eighth planet.'],
['nst','Solar system','Which is the largest planet?','Jupiter','Jupiter is the largest planet.'],
['nst','Solar system','Name the planet famous for its rings.','Saturn','Saturn has a prominent ring system.'],
['nst','The Sun','Is the Sun a star or a planet?','star','The Sun is a star.',['a star']],
['nst','The Sun','What two forms of energy does the Sun give Earth?','heat and light','Sunlight warms and illuminates Earth.',['light and heat']],
['nst','Orbits','What is the path of a planet around the Sun called?','orbit','An orbit is the path followed around another body.',['an orbit']],
['nst','Orbits','Which star is at the centre of our solar system?','Sun','The Sun is at the centre of the solar system.',['the sun']],
['afr','Werkwoorde','Tik die werkwoord: Die kind speel buite.','speel','Speel sê wat die kind doen.'],
['afr','Werkwoorde','Tik die werkwoord: Ons lees boeke.','lees','Lees is die doenwoord.'],
['afr','Verlede tyd','Voltooi: Ek speel. → Ek het ____.','gespeel','Gebruik het + gespeel.'],
['afr','Verlede tyd','Voltooi: Hy werk. → Hy het ____.','gewerk','Gebruik het + gewerk.'],
['afr','Toekomende tyd','Voltooi: Ek sal môre ____. (speel)','speel','Gebruik sal + die gewone werkwoord.'],
['afr','Toekomende tyd','Voltooi: Ons sal ____. (lees)','lees','Lees bly onveranderd na sal.'],
['afr','Voornaamwoorde','Vervang Piet: ____ speel sokker.','Hy','Hy is die voornaamwoord vir Piet.'],
['afr','Voornaamwoorde','Vervang Marie: ____ lees.','Sy','Sy is die voornaamwoord vir Marie.'],
['afr','Meervoude','Wat is die meervoud van boek?','boeke','Boek word boeke.'],
['afr','Meervoude','Wat is die meervoud van kind?','kinders','Kind word kinders.'],
['afr','Ontkennende vorm','Voltooi: Ek speel _____.','nie','Ek speel nie.'],
['afr','Ontkennende vorm','Voltooi: Hy eet nie die appel ____.','nie','Die sin gebruik nie ... nie.'],
['afr','Voegwoorde','Voltooi: Ek hou van appels ____ pere.','en','En verbind die twee woorde.'],
['afr','Voegwoorde','Voltooi: Ek wil speel, ____ dit reën.','maar','Maar wys teenstelling.'],
['afr','Byvoeglike naamwoorde','Tik die beskrywende woord: Die groot hond blaf.','groot','Groot beskryf die hond.'],
['afr','Byvoeglike naamwoorde','Tik die byvoeglike naamwoord: Die mooi blom groei.','mooi','Mooi beskryf die blom.'],
['afr','Selfstandige naamwoorde','Tik die selfstandige naamwoord: Die kat slaap.','kat','Kat is die naam van ’n dier.'],
['afr','Alfabetiese volgorde','Watter woord kom eerste: appel, boom, kat?','appel','A kom voor B en K.'],
['eng','Synonyms','Give a synonym for happy.','glad','Glad means nearly the same as happy.',['joyful','cheerful']],
['eng','Antonyms','Give the opposite of cold.','hot','Hot and cold are opposites.'],
['eng','Degrees of comparison','Complete: tall, taller, ____.','tallest','The superlative of tall is tallest.'],
['eng','Degrees of comparison','Complete: good, better, ____.','best','Good has irregular comparative forms.'],
['eng','Subject and predicate','Name the subject: The dog barks loudly.','The dog','The dog is who the sentence is about.'],
['eng','Parts of speech','What part of speech is the word run in “I run”?','verb','Run is an action word.',['a verb']],
['eng','Drama','What do we call the words characters say?','dialogue','Dialogue is spoken by characters.'],
['eng','Tenses','Complete the past tense: walk → ____.','walked','Regular past tense adds -ed.'],
['eng','Punctuation','Which punctuation mark ends a question?','question mark','A question mark ends a direct question.',['?']],
['hist','Old communication','What do we call a person who carried a message long ago?','messenger','Messengers could carry information between places.',['a messenger','runner']],
['hist','Modern communication','What electronic message can be sent using the internet?','email','Email can carry messages quickly.',['e-mail']],
['hist','Communication change','Which is generally faster over long distances: a letter or email?','email','Email often travels almost instantly.',['e-mail']],
['math','Fractions','What is one half of 36?','18','36 ÷ 2 = 18.'],
['math','Fractions','What is one quarter of 48?','12','48 ÷ 4 = 12.'],
['math','Four operations','Calculate 506 + 287.','793','506 + 287 = 793.'],
['math','Four operations','Calculate 900 − 465.','435','900 − 465 = 435.'],
['math','Four operations','Calculate 17 × 8.','136','17 × 8 = 136.'],
['math','Four operations','Calculate 144 ÷ 12.','12','144 ÷ 12 = 12.'],
['math','Problem solving','A shop has 65 apples and sells 28. How many remain?','37','65 − 28 = 37.'],
['math','Flow diagrams','Input 6 → × 5 → − 4. What is the output?','26','6 × 5 − 4 = 26.'],
['math','Money','You pay R50 for goods costing R37. What is your change in rand?','13','R50 − R37 = R13.',['R13']],
['math','Viewing objects','What view shows an object from above?','top view','The top view is the view from directly overhead.'],
['life','Water safety','Who should supervise children swimming?','adult','A responsible adult should supervise swimming.',['an adult','responsible adult']],
['life','Road safety','What do we fasten when travelling in a car?','seat belt','A seat belt helps keep passengers safe.',['seatbelt']],
['life','Personal health','What should you use with water to wash your hands?','soap','Soap removes dirt and helps wash away germs.'],
['life','Healthy environment','What should you put in a rubbish bin?','litter','Proper disposal prevents pollution.',['rubbish','trash']],
['art','Art vocabulary','What art element describes a surface as smooth or rough?','texture','Texture describes the quality of a surface.']
];T.forEach(x=>typed(...x));
// More MCQs distributed across all topics (distinct from existing prompts).
const extra=[
['nst','Features of Earth','Why did some people once think Earth was flat?','The horizon looks flat','A distant horizon can look like an edge.',['The horizon looks flat','The Moon has no water','Earth is square','The Sun has rings']],
['nst','Land and water','Which covers more of Earth: land or water?','Water','About 71% of Earth is covered in water.',['Land','Water','Both exactly equal','Neither']],
['nst','Atmosphere and habitats','A termite mound is an example of a...','habitat','It provides termites with shelter.',['continent','habitat','planet','ocean']],
['nst','Solar system','Which planet is third from the Sun?','Earth','Mercury, Venus, Earth.',['Mars','Earth','Venus','Jupiter']],
['nst','Solar system','Which planet comes immediately after Mars?','Jupiter','The order is Mercury, Venus, Earth, Mars, Jupiter.',['Saturn','Jupiter','Neptune','Mercury']],
['nst','The Sun','Why does the Sun look smaller than Earth from our viewpoint?','It is very far away','Distance changes apparent size.',['It is very far away','It is smaller than a house','It has no light','It is a moon']],
['nst','Orbits','Which object does Earth orbit?','The Sun','Earth travels around the Sun.',['The Sun','Jupiter','The Moon','Mars']],
['afr','Werkwoorde','Watter woord is ’n werkwoord?','swem','Swem is ’n aksie.',['blou','swem','skool','rooi']],
['afr','Verlede tyd','Kies die verlede tyd: Ons speel.','Ons het gespeel.','Gebruik het en die verlede vorm.',['Ons sal speel.','Ons het gespeel.','Ons speel môre.','Ons is speel.']],
['afr','Toekomende tyd','Kies die toekomende tyd: Sy lees.','Sy sal lees.','Sal wys iets gaan nog gebeur.',['Sy het gelees.','Sy sal lees.','Sy lees gister.','Sy gelees.']],
['afr','Voornaamwoorde','Watter woord is ’n voornaamwoord?','hulle','Hulle vervang mense se name.',['huis','hulle','mooi','hardloop']],
['afr','Meervoude','Kies die meervoud van boom.','bome','Die meervoud is bome.',['booms','bome','boomies','bomen']],
['afr','Ontkennende vorm','Kies die korrekte sin.','Ons lag nie.','Die ontkennende vorm gebruik nie.',['Ons nie lag.','Ons lag nie.','Ons lag geen nie.','Nie ons lag.']],
['afr','Voegwoorde','Watter woord verbind sinne?','want','Want is ’n voegwoord.',['kind','want','groot','huis']],
['afr','Byvoeglike naamwoorde','In “die klein kat”, watter woord beskryf kat?','klein','Klein is die byvoeglike naamwoord.',['die','klein','kat','geen']],
['afr','Selfstandige naamwoorde','Watter woord is ’n selfstandige naamwoord?','skool','Skool is ’n plek.',['vinnig','skool','lees','rooi']],
['afr','Alfabetiese volgorde','Watter woord kom laaste?','son','Appel, boom, son in alfabetiese volgorde.',['appel','boom','son','almal']],
['eng','Synonyms','Which word is closest in meaning to tiny?','small','Tiny means very small.',['large','small','noisy','heavy']],
['eng','Antonyms','What is the opposite of early?','late','Late is the opposite of early.',['late','quick','young','light']],
['eng','Degrees of comparison','What is the comparative of fast?','faster','Comparative forms compare two things.',['fastest','faster','most fast','fastly']],
['eng','Subject and predicate','What is the predicate in “Birds fly”?','fly','The predicate tells what birds do.',['Birds','fly','Birds fly','None']],
['eng','Parts of speech','What part of speech is “beautiful” in “beautiful tree”?','adjective','It describes the noun tree.',['noun','verb','adjective','pronoun']],
['eng','Drama','What tells an actor to walk across the stage?','Stage directions','Stage directions give movement instructions.',['Dialogue','Stage directions','A title','A rhyme']],
['eng','Tenses','Which sentence is future tense?','They will play.','Will often signals future tense.',['They played.','They play.','They will play.','They were playing.']],
['eng','Punctuation','Which mark is used in a list of three items?','Comma','Commas separate items in a list.',['Question mark','Comma','Full stop','Colon only']],
['hist','Old communication','Which method usually requires someone to carry a physical message?','Letter','A posted letter is transported.',['Email','Letter','Video call','Instant message']],
['hist','Modern communication','Which allows two people far apart to see each other live?','Video call','A video call can share sound and images in real time.',['Smoke signal','Video call','Postcard','Clay tablet']],
['hist','Communication change','Why should information online be checked?','It may be incorrect','Speed does not guarantee accuracy.',['It may be incorrect','Everything online is true','Letters cannot be read','Screens are always broken']],
['math','Fractions','Which is larger?','3/4','Three quarters is larger than one quarter.',['1/4','3/4','1/8','They are equal']],
['math','Four operations','What is 12 × 9?','108','12 × 9 = 108.',['98','108','118','120']],
['math','Problem solving','There are 4 trays with 15 muffins on each. How many muffins?','60','4 × 15 = 60.',['19','45','60','75']],
['math','Flow diagrams','Input 9 → + 5 → × 2. Output?','28','(9 + 5) × 2 = 28.',['19','23','28','33']],
['math','Money','What is R10 − R6,50?','R3,50','Subtract the prices in rands and cents.',['R3,50','R4,50','R6,50','R16,50']],
['math','Viewing objects','What is visible in a front view of a box?','Its front face','A front view shows the object from in front.',['Its front face','Only its bottom','Only its inside','All faces at once']],
['life','SA religions','What is a respectful response to different beliefs?','Listen and be respectful','Respectful conduct applies to all classmates.',['Mock classmates','Listen and be respectful','Exclude them','Assume all are the same']],
['life','Water safety','What is the safest first step if someone is struggling in deep water?','Call an adult or lifeguard','Get qualified help rather than attempting an unsafe rescue.',['Jump in immediately','Call an adult or lifeguard','Walk away silently','Push them under']],
['life','Road safety','Where is it safer to cross a busy road?','At a pedestrian crossing','Use designated safe crossings where possible.',['Between parked cars','At a pedestrian crossing','On a blind bend','While looking at a phone']],
['life','Personal health','Which daily action helps protect your teeth?','Brushing them','Regular brushing supports dental health.',['Never cleaning teeth','Brushing them','Eating sweets at bedtime','Sharing toothbrushes']],
['life','Healthy environment','Which action saves water?','Turning off a dripping tap','Fixing leaks and closing taps reduces wastage.',['Leaving taps running','Turning off a dripping tap','Throwing litter in rivers','Washing cars with a running hose']],
['art','Visual literacy','What can artists use to show movement?','Lines and shapes','The arrangement of lines and shapes can suggest movement.',['Lines and shapes','Only spelling','Only numbers','Only silence']]
];extra.forEach(x=>add(...x));
