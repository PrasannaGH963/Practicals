db.createCollection("Student_Data")

db.Student_Data.insertMany([
    { Student_ID: "S01", Student_Name: "Alice", Department: "Computer Science", Marks: 85 },
    { Student_ID: "S02", Student_Name: "Bob", Department: "Electrical Engineering", Marks: 78 },
    { Student_ID: "S03", Student_Name: "Charlie", Department: "Mechanical Engineering", Marks: 92 },
    { Student_ID: "S04", Student_Name: "David", Department: "Civil Engineering", Marks: 70 },
    { Student_ID: "S05", Student_Name: "Eva", Department: "Computer Science", Marks: 88 },
    { Student_ID: "S06", Student_Name: "Frank", Department: "Electrical Engineering", Marks: 65 },
    { Student_ID: "S07", Student_Name: "Grace", Department: "Mechanical Engineering", Marks: 81 },
    { Student_ID: "S08", Student_Name: "Hank", Department: "Civil Engineering", Marks: 74 },
    { Student_ID: "S09", Student_Name: "Ivy", Department: "Computer Science", Marks: 91 },
    { Student_ID: "S10", Student_Name: "Jack", Department: "Electrical Engineering", Marks: 60 }
]);


db.Student_Data.aggregate([
    {
        $group: {
            _id: "$Department",  // Group by the Department field
            averageMarks: { $avg: "$Marks" },  // Calculate the average Marks
            students: { $push: { Student_ID: "$Student_ID", Student_Name: "$Student_Name", Marks: "$Marks" } }  // Collect student details
        }
    }
]);

db.Student_Data.aggregate([
    {
        $group: {
            _id: "$Department",  // Group by the Department field
            numberOfStudents: { $sum: 1 }  // Count the number of students in each department
        }
    }
]);

db.Student_Data.aggregate([
    {
        $sort: { Marks: -1 }  // Sort documents by Marks in descending order
    },
    {
        $group: {
            _id: "$Department",  // Group by Department
            highestMarks: { $first: "$Marks" },  // Take the highest Marks for each department
            student: { $first: { Student_ID: "$Student_ID", Student_Name: "$Student_Name", Marks: "$Marks" } }  // Take the student with the highest marks
        }
    },
    {
        $sort: { highestMarks: -1 }  // Sort the result by highest marks in descending order
    }
]);


db.Student_Data.createIndex({ Student_ID: 1 })


db.Student_Data.createIndex({ Student_Name: 1, Department: 1 })


db.Student_Data.dropIndex("Student_ID_1")


db.Student_Data.dropIndex("Student_Name_1_Department_1")