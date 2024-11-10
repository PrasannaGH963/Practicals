db.createCollection("Student");

db.Student.insertMany([
  { "roll_no": 1, "name": "Alice", "class": "TE", "dept": "Computer", "aggregate_marks": 85 },
  { "roll_no": 2, "name": "Bob", "class": "SE", "dept": "Mechanical", "aggregate_marks": 92 },
  { "roll_no": 3, "name": "Charlie", "class": "TE", "dept": "Electrical", "aggregate_marks": 75 },
  { "roll_no": 4, "name": "David", "class": "SE", "dept": "Computer", "aggregate_marks": 88 },
  { "roll_no": 5, "name": "Eve", "class": "BE", "dept": "Mechanical", "aggregate_marks": 80 },
  { "roll_no": 6, "name": "Frank", "class": "TE", "dept": "Computer", "aggregate_marks": 90 },
  { "roll_no": 7, "name": "Grace", "class": "SE", "dept": "Electrical", "aggregate_marks": 95 },
  { "roll_no": 8, "name": "Hannah", "class": "BE", "dept": "Electrical", "aggregate_marks": 78 },
  { "roll_no": 9, "name": "Ivy", "class": "TE", "dept": "Mechanical", "aggregate_marks": 82 },
  { "roll_no": 10, "name": "Jack", "class": "BE", "dept": "Computer", "aggregate_marks": 70 }
]);


db.Student.aggregate([
  { $match: { class: "TE" } },  // Filter for "TE" class
  { $group: {
    _id: "$dept",               // Group by department
    totalMarks: { $sum: "$aggregate_marks" }  // Sum the aggregate_marks for each department
  }}
]);


db.Student.aggregate([
  { $match: { class: "SE" } },  // Filter for "SE" class
  { $group: {
    _id: "$dept",  // Group by department
    highestMarks: { $max: "$aggregate_marks" }  // Find the highest marks in each department
  }}
]);


db.Student.aggregate([
  { $match: { class: "BE" } },  // Filter for "BE" class
  { $group: {
    _id: "$dept",  // Group by department
    totalMarks: { $sum: "$aggregate_marks" },  // Sum the marks
    count: { $sum: 1 }  // Count the number of students in each department
  }},
  { $project: {
    _id: 1,  // Include department
    averageMarks: { $divide: ["$totalMarks", "$count"] }  // Calculate average marks
  }}
]);