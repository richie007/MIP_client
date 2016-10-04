
angular.module('someklone.services').factory('Posts', function($q) {

    var posts = [
        {
            id: 0,
            user: {
                id: 1,
                username: "Richard",
                profileImageSmall: "img/user.jpg"
            },
            image: "img/home.jpg",
            imageThumbnail: "img/home.jpg",
            likes: 892,
            caption: "views",
            tags: ['landscape'],
            comments: [
                {
                    id: 0,
                    user: {
                        id: 2,
                        username: "Rigal"
                    },
                    comment: "Awesome view",
                    userRefs: [],
                    tags: ["view"]
                },
                {
                    id: 1,
                    user: {
                        id: 3,
                        username: "Regan"
                    },
                    comment: "Damn right @Rigal",
                    userRefs: ["POTUS"],
                    tags: []
                },
            ]

        },  {
              id: 0,
              user: {
                  id: 1,
                  username: "Robin",
                  profileImageSmall: "img/mike.png"
              },
              image: "img/home1.jpg",
              imageThumbnail: "img/home1.jpg",
              likes: 892,
              caption: "views",
              tags: ['landscape'],
              comments: [
                  {
                      id: 0,
                      user: {
                          id: 2,
                          username: "Rigal"
                      },
                      comment: "Awesome view",
                      userRefs: [],
                      tags: ["view"]
                  },
                  {
                      id: 1,
                      user: {
                          id: 3,
                          username: "Regan"
                      },
                      comment: "Damn right @Rigal",
                      userRefs: ["POTUS"],
                      tags: []
                  },
              ]

          }
    ]

    return {
        // posts from myself and the from the users i am following
        following: function()
        {
            return $q(function(resolve, reject){
                resolve(posts);
            });
        },
        // most recent posts
        recent: function()
        {
            return $q(function(resolve, reject){
                resolve(posts);
            });
        },
        // search posts based on tags
        searchTag: function()
        {
            return $q(function(resolve, reject){
                resolve(posts);
            });
        },
        // get all posts of single user
        getUserPosts: function(userId)
        {
            return $q(function(resolve, reject){

                // execute the search and return results

                resolve(posts); // placeholder
            });
        }
    };
});
