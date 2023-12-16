CREATE TABLE Students (
    ID INT PRIMARY KEY,
    Name VARCHAR(100),
    Age INT,
    GradeLevel INT
);

INSERT INTO Students (ID, Name, Age, GradeLevel)
VALUES (1, 'John Doe', 15, 10),
       (2, 'Jane Smith', 16, 11),
       (3, 'Emily Johnson', 14, 9),
       (4, 'Michael Brown', 17, 12);
