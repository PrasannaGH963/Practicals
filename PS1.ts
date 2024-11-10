db.createCollection("Student")

db.Student.insertMany([
    { Roll_No: "A01", Name: "Alice", Class: "TE", Marks: 85, Address: "123 St", Enrolled_Courses: ["DBMS", "TOC"] },
    { Roll_No: "A02", Name: "Bob", Class: "SE", Marks: 45, Address: "234 St", Enrolled_Courses: ["DBMS"] },
])

db.Student.find({ Enrolled_Courses: { $in: ["DBMS", "TOC"] } }, { Name: 1 })


db.Student.find({ $or: [{ Marks: { $gt: 50 } }, { Class: "TE" }] }, { Roll_No: 1, Class: 1 })


db.Student.updateOne({ Roll_No: "A10" }, { $set: { Name: "Updated Name", Class: "Updated Class", Marks: 100, Address: "Updated Address", Enrolled_Courses: ["Updated Course"] } })


db.Student.find({}, { Name: 1, _id: 0 }).sort({ Marks: -1 }).skip(2).limit(2)


db.Student.deleteMany({ Marks: { $lt: 20 } })


db.Student.deleteOne({})

