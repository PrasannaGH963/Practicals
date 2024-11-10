db.bookCollection.insertMany([
   {
      Title: "To Kill a Mockingbird",
      Author_name: "Harper Lee",
      Borrowed_status: false,
      Price: 350
   },
   {
      Title: "1984",
      Author_name: "George Orwell",
      Borrowed_status: true,
      Price: 500
   },
   {
      Title: "The Great Gatsby",
      Author_name: "F. Scott Fitzgerald",
      Borrowed_status: false,
      Price: 250
   },
   {
      Title: "Moby Dick",
      Author_name: "Herman Melville",
      Borrowed_status: true,
      Price: 600
   }
]);


db.bookCollection.aggregate([
   {
      $group: {
         _id: "$Author_name", // Group by the Author_name field
         books: { $push: "$Title" } // Collect the titles of books into an array
      }
   },
   {
      $project: {
         _id: 0, // Exclude the _id field from the output
         Author_name: "$_id", // Rename the _id field to Author_name
         books: 1 // Include the books array
      }
   }
]);


db.bookCollection.aggregate([
   {
      $match: { Borrowed_status: true } // Filter books where Borrowed_status is true
   },
   {
      $group: {
         _id: "$Author_name", // Group by the Author_name field
         books: { $push: "$Title" } // Collect book titles into an array for each author
      }
   },
   {
      $project: {
         _id: 0, // Exclude the _id field from the output
         Author_name: "$_id", // Include the author's name
         books: 1 // Include the books array
      }
   }
]);


db.bookCollection.aggregate([
   {
      $match: { price: { $gt: 300 } } // Filter books where price is greater than 300
   },
   {
      $group: {
         _id: "$Author_name", // Group by the Author_name field
         books: { $push: "$Title" } // Collect book titles into an array
      }
   },
   {
      $project: {
         _id: 0, // Exclude the _id field from the output
         Author_name: "$_id", // Rename _id to Author_name
         books: 1 // Include the books array
      }
   }
]);