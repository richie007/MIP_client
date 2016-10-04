angular.module('someklone.services').factory('Users', function($q) {

    var activeUser = {
            id: 1,
            username: "Richard",
            fullName: "Richard Awale",
            profileImageSmall: "img/user.jpg",
            postCount: 6,
            followers: 52,
            following: 20,
            activity: [
                {
                    userId: 2,
                    username: "Rigal",
                    fullName: "Rigal Awale",
                    profileImageSmall: "img/perry.png",
                    type: "commented",
                    comment: "nice view",
                    userRefs: [],
                    tags: ["view"]
                },
                {
                    userId: 3,
                    username: "Regan",
                    fullName: "Regan Clinton",
                    profileImageSmall: "img/mike.png",
                    type: "liked",
                    comment: "",
                    userRefs: [],
                    tags: []
                }
            ]
        };

    var users = [
        {
            id: 1,
            username: "Richard",
            fullName: "Richard Awale",
            profileImageSmall: "img/user.jpg"
        },
        {
            id: 2,
            username: "Rigal",
            fullName: "Rigal Awale",
            profileImageSmall: "img/perry.png"
        },
        {
            id: 3,
            username: "Regan",
            fullName: "Regan Clinton",
            profileImageSmall: "img/mike.png"
        }
    ];

    return {
        searchUser: function(searchWord) {

            var upperCaseSearchWord = searchWord.toUpperCase();
            return $q(function(resolve, reject){
                if(searchWord.length > 0)
                {
                    var matches = users.filter(function(u){
                        var testString = u.username.toUpperCase();
                        return testString.includes(upperCaseSearchWord);
                    });

                    resolve(matches);
                }
                else
                {
                    reject();
                }
            });
        },
        getOne: function(key)
        {
            return $q(function(resolve, reject){
                for(var i = 0; i < users.length; i++)
                {
                    if(users[i].id == key)
                    {
                        resolve(users[i]);
                    }
                }
                reject();

            });
        },
        getActiveUser: function()
        {
            return activeUser;
        },
        getActiveUserActivity: function()
        {
            return activeUser.activity;
        }

    };
})
