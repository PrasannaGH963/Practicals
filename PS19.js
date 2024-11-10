db.createCollection("Movies_Data");

db.Movies_Data.insertMany([
  { "Movie_ID": 1, "Movie_Name": "Inception", "Director": "Christopher Nolan", "Genre": "Sci-Fi", "BoxOfficeCollection": 830000000 },
  { "Movie_ID": 2, "Movie_Name": "The Dark Knight", "Director": "Christopher Nolan", "Genre": "Action", "BoxOfficeCollection": 1000000000 },
  { "Movie_ID": 3, "Movie_Name": "Interstellar", "Director": "Christopher Nolan", "Genre": "Sci-Fi", "BoxOfficeCollection": 677000000 },
  { "Movie_ID": 4, "Movie_Name": "Avatar", "Director": "James Cameron", "Genre": "Action", "BoxOfficeCollection": 2800000000 },
  { "Movie_ID": 5, "Movie_Name": "Titanic", "Director": "James Cameron", "Genre": "Romance", "BoxOfficeCollection": 2200000000 },
  { "Movie_ID": 6, "Movie_Name": "The Avengers", "Director": "Joss Whedon", "Genre": "Action", "BoxOfficeCollection": 1500000000 },
  { "Movie_ID": 7, "Movie_Name": "The Matrix", "Director": "The Wachowskis", "Genre": "Sci-Fi", "BoxOfficeCollection": 465000000 }
]);


db.Movies_Data.aggregate([
  { $group: { _id: "$Director", movieCount: { $sum: 1 } } }
]);


db.Movies_Data.aggregate([
  { $group: {
    _id: "$Genre",
    highestBoxOffice: { $max: "$BoxOfficeCollection" }
  }},
  { $lookup: {
    from: "Movies_Data",
    localField: "highestBoxOffice",
    foreignField: "BoxOfficeCollection",
    as: "MovieDetails"
  }},
  { $unwind: "$MovieDetails" },
  { $project: {
    Genre: "$_id",
    Movie_Name: "$MovieDetails.Movie_Name",
    Director: "$MovieDetails.Director",
    BoxOfficeCollection: "$MovieDetails.BoxOfficeCollection"
  }}
]);


db.Movies_Data.aggregate([
  { $group: {
    _id: "$Genre",
    highestBoxOffice: { $max: "$BoxOfficeCollection" }
  }},
  { $lookup: {
    from: "Movies_Data",
    localField: "highestBoxOffice",
    foreignField: "BoxOfficeCollection",
    as: "MovieDetails"
  }},
  { $unwind: "$MovieDetails" },
  { $project: {
    Genre: "$_id",
    Movie_Name: "$MovieDetails.Movie_Name",
    Director: "$MovieDetails.Director",
    BoxOfficeCollection: "$MovieDetails.BoxOfficeCollection"
  }},
  { $sort: { "BoxOfficeCollection": 1 } }
]);


db.Movies_Data.createIndex({ "Movie_Name": 1, "Director": 1 });


db.Movies_Data.createIndex({ "Movie_id": 1 });


db.Movies_Data.dropIndex({ "Movie_Name": 1, "Director": 1 });


db.Movies_Data.dropIndex({ "Movie_id": 1 });