var app = angular.module('starter.services', [])

app.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Richard Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Rigal Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Bickey Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Rickey Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Miken Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
app.factory('Postvars', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var postvars = [{
    id: 0,
    name: 'Richard Sparrow',
    lastText: 'You on your way?',
    date: '20 Sep 2016',
    smallimg: 'img/user.jpg',
    bigimg: 'img/home.jpg'
  }, {
    id: 1,
    name: 'Richard Sparrow',
    lastText: 'Nature #peace',
    date: '20 Aug 2016',
    smallimg: 'img/user.jpg',
    bigimg: 'img/home1.jpg'
  },
  {
    id: 2,
    name: 'Richard Sparrow',
    lastText: 'Sunset',
    date: '18 Aug 2016',
    smallimg: 'img/user.jpg',
    bigimg: 'img/home2.jpg'
  },
  {
    id: 3,
    name: 'Richard Sparrow',
    lastText: 'Top 10 lists',
    date: '14 Aug 2016',
    smallimg: 'img/user.jpg',
    bigimg: 'img/home3.jpg'
  }, {
    id: 4,
    name: 'Richard Sparrow',
    lastText: 'Winter is coming',
    date: '12 Sep 2015',
    smallimg: 'img/user.jpg',
    bigimg: 'img/home4.jpg'

  }];

  return {
    all: function() {
      return postvars;
    },
    remove: function(postvar) {
      postvars.splice(postvars.indexOf(postvar), 1);
    },
    get: function(postvarId) {
      for (var i = 0; i < postvars.length; i++) {
        if (postvars[i].id === parseInt(postvarId)) {
          return postvars[i];
        }
      }
      return null;
    }
  };
});
