// // Characters



// var mrGreen = {
//   first_name:   "Jacob",
//   last_name:    "Green”",
//   colors:        'green',
//   descriptions:  'He has a lot of connections',
//   age:          45,
//   image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
//   occupation:   'Entrepreneur',
//   }
  
//   var drOrchid = {
//   first_name:   'Doctor',
//   last_name:    'Orchid',
//   colors:        'white',
//   descriptions:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
//   age:          26,
//   image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
//   ocupation:   'Scientist'
//   }
  
//   var profPlum = {
//   first_name:   'Victor',
//   last_name:    'Plum',
//   colors:        'purple',
//   descriptions:  'Billionare video game designer',
//   age:          22,
//   image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
//   occupation:   'Designer'
//   }
//   var missScarlet = {
//   first_name:   'Kasandra',
//   last_name:    'Scarlet',
//   colors:        'red',
//   descriptions:  'She is an A-list movie star with a dark past',
//   age:          31,
//   image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
//   occupation:   'Actor'
//   }
  
//   var mrsPeacock = {
//   first_name:   'Eleanor',
//   last_name:    'Peacock',
//   colors:        'blue',
//   descriptions:  'She is from a wealthy family and uses her status and money to earn popularity',
//   age:          36,
//   image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
//   occupation:   'Socialité'
//   }
  
//   var mrMustard = {
//   first_name:   'Jack',
//   last_name:    'Mustard',
//   colors:        'yellow',
//   descriptions:  'He is a former football player who tries to get by on his former glory',
//   age:          62,
//   image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
//   occupation:   'Retired Football player'
//   }
  

// let charactersArrayOriginal = [] 
// charactersArrayOriginal.push(mrMustard, mrsPeacock)



  
//   // Weapons
//   var weaponsArray = [
//    {name: 'rope',       wigth:  10},
//    {name: 'knife',      wigth:  8},
//    {name: 'candlestick',wigth:  2},
//    {name: 'dumbell',    wigth:  30},
//    {name: 'poison',     wigth:  2},
//    {name: 'axe',        wigth: 15},
//    {name: 'bat',        wigth: 13},
//    {name: 'trophy',     wigth:  25},
//    {name: 'pistol',     wigth:  20}
//   ]

// var roomsArray = [
// {name: 'Dinning Room'},
// {name: 'Conservatory'},
// {name: 'Kitchen'},
// {name: 'Study'},
// {name: 'Library'},
// {name: 'Billiard Room'},
// {name: 'Ballroom'},
// {name: 'Hall'},
// {name: 'Spa'},
// {name: 'Observatory'},
// {name: 'Theater'},
// {name: 'Guest House'},
// {name: 'Patio'},
// ]

// // Characters Collection
// var charactersArray = [];

// function character(name,lastName,color,description,age,image,occupation){
//   this.first_name = name;
//   this.last_name= lastName;
//   this.colors = color;
//   this.descriptions = description;
//   this.age = age;
//   this.image = image;
//   this.occupation=occupation;
// }
// var mrGreen = new character('Victor','Geen','green','He has a lot of connections',45,'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg','Entrepreneur')
// //charactersArray[charactersArray.length] = mrGreen;
// var drOrchid = new character('Doctor','Orchid','white','PhD in plant toxicology. Adopted daughter of Mr. Boddy', 26,'http://www.radiotimes.com/uploads/images/Original/111967.jpg','Scientist')
// //charactersArray[charactersArray.length] = drOrchid;

// var profPlum = new character('Victor','Plum','purple','Billionare video game designer', 22,'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg','Designer')
// //charactersArray[charactersArray.length] = profPlum;

// var mrsPeacock = new character('Kasandra','Scarlet','red','She is an A-list movie star with a dark past',31,'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg','Actor')
// //charactersArray[charactersArray.length] = profPlum;

// var profPlum = new character('Eleanor','Peacock','blue','She is from a wealthy family and uses her status and money to earn popularity',36,'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg','Socialité')
// //charactersArray[charactersArray.length] = profPlum;

// var mrMustard = new character('Jack','Mustard','yellow','He is a former football player who tries to get by on his former glory',62,'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg','Retired Football player')
// ///charactersArray[charactersArray.length] = profPlum;
// charactersArray.push(mrGreen, drOrchid)


// function randomSelector(arr){
//   var random = Math.floor(Math.random()* arr.length)+1;
//     return array[random];
// }






var mrGreen = {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur",
  }
  
  var drOrchid = {
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:   "Scientist"
  } 
  
  var profPlum = {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
  }
  var missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
  }
  
  var mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
  }
  
  var mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
  }
  
  
  
  
  
  // Weapons
  var weaponsArray = [
    {name: 'rope', weight:10},
    {name: 'knife', weight: 8},      
    {name: 'candlestick', weight: 2},
    {name: 'dumbell', weight: 30},
    {name: 'poison', weight: 2},
    {name: 'axe', weight: 15},       
    {name: 'bat', weight: 13},       
    {name: 'trophy', weight: 25},     
    {name: 'pistol', weight: 2},    
  ]
  
  // Rooms
  var roomsArray = [
    {name: 'dining room'},
    {name: 'conservatory'},
    {name: 'kitchen'},
    {name: 'study'},
    {name: 'library'},
    {name: 'billiard room'},
    {name: 'ballroom'},
    {name: 'hall'},
    {name: 'spa'},
    {name: 'observatory'},
    {name: 'theater'},
    {name: 'guest house'},
    {name: 'patio'}
  ]
  
  // Characters Collection
  var charactersArray = [];
  
  
  
  function pushCharacters(charObjects) {
  charactersArray.push(mrGreen, drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard); 
  return charactersArray;
  }
  
  
  pushCharacters();
  
  
  function randomSelector(array) {
    var randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  }
  
  
  
  
  var randomCharacter;
  var randomWeapon;
  var randomRoom;
  
  function pickMistery() {
    var misteryEnvelope = [];
    misteryEnvelope.push(randomSelector(charactersArray));
    misteryEnvelope.push(randomSelector(weaponsArray));
    misteryEnvelope.push(randomSelector(roomsArray));
    return misteryEnvelope;
  }
  misteryEnvelope = pickMistery();
  
  function revealMistery(misteryEnvelope){
    return a =misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + " killed Mr.Boddy using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2].name + "!!!!";
  }
  
  revealMistery(misteryEnvelope);
  

