db.createCollection("Social_Media");

db.Social_Media.insertMany([
  { "UserId": 1, "UserName": "Alice", "NoOfPosts": 150, "FriendsList": ["Bob", "Charlie", "David"], "Interests": ["Music", "Travel"] },
  { "UserId": 2, "UserName": "Bob", "NoOfPosts": 50, "FriendsList": ["Alice", "Charlie"], "Interests": ["Sports", "Reading"] },
  { "UserId": 3, "UserName": "Charlie", "NoOfPosts": 120, "FriendsList": ["Alice", "Bob"], "Interests": ["Cooking", "Technology"] },
  { "UserId": 4, "UserName": "David", "NoOfPosts": 200, "FriendsList": ["Alice", "Eve"], "Interests": ["Gaming", "Movies"] },
  { "UserId": 5, "UserName": "Eve", "NoOfPosts": 80, "FriendsList": ["David", "Alice"], "Interests": ["Fitness", "Cooking"] },
  { "UserId": 6, "UserName": "Frank", "NoOfPosts": 30, "FriendsList": ["George", "Henry"], "Interests": ["Photography", "Travel"] },
  { "UserId": 7, "UserName": "George", "NoOfPosts": 90, "FriendsList": ["Frank", "Henry"], "Interests": ["Music", "Fitness"] },
  { "UserId": 8, "UserName": "Henry", "NoOfPosts": 100, "FriendsList": ["Frank", "George"], "Interests": ["Movies", "Art"] },
  { "UserId": 9, "UserName": "Ivy", "NoOfPosts": 60, "FriendsList": ["Jack", "Karen"], "Interests": ["Cooking", "Hiking"] },
  { "UserId": 10, "UserName": "Jack", "NoOfPosts": 110, "FriendsList": ["Ivy", "Karen"], "Interests": ["Gaming", "Reading"] },
  { "UserId": 11, "UserName": "Karen", "NoOfPosts": 140, "FriendsList": ["Ivy", "Jack"], "Interests": ["Photography", "Fitness"] },
  { "UserId": 12, "UserName": "Liam", "NoOfPosts": 80, "FriendsList": ["Mia", "Nora"], "Interests": ["Movies", "Reading"] },
  { "UserId": 13, "UserName": "Mia", "NoOfPosts": 120, "FriendsList": ["Liam", "Nora"], "Interests": ["Art", "Travel"] },
  { "UserId": 14, "UserName": "Nora", "NoOfPosts": 70, "FriendsList": ["Liam", "Mia"], "Interests": ["Fitness", "Cooking"] },
  { "UserId": 15, "UserName": "Oscar", "NoOfPosts": 130, "FriendsList": ["Peter", "Quinn"], "Interests": ["Technology", "Gaming"] },
  { "UserId": 16, "UserName": "Peter", "NoOfPosts": 140, "FriendsList": ["Oscar", "Quinn"], "Interests": ["Music", "Movies"] },
  { "UserId": 17, "UserName": "Quinn", "NoOfPosts": 160, "FriendsList": ["Oscar", "Peter"], "Interests": ["Sports", "Fitness"] },
  { "UserId": 18, "UserName": "Rita", "NoOfPosts": 90, "FriendsList": ["Steve", "Tina"], "Interests": ["Hiking", "Travel"] },
  { "UserId": 19, "UserName": "Steve", "NoOfPosts": 110, "FriendsList": ["Rita", "Tina"], "Interests": ["Music", "Photography"] },
  { "UserId": 20, "UserName": "Tina", "NoOfPosts": 130, "FriendsList": ["Rita", "Steve"], "Interests": ["Art", "Reading"] }
]);


db.Social_Media.find().pretty();


db.Social_Media.find({ "NoOfPosts": { $gt: 100 } });


db.Social_Media.find({}, { "UserName": 1, "FriendsList": 1 });


db.Social_Media.find(
  { $expr: { $gt: [{ $size: "$FriendsList" }, 5] } },
  { "UserId": 1, "FriendsList": 1 }
);


db.Social_Media.find().sort({ "NoOfPosts": -1 });