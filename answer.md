1. Why is db.json not suitable as a database for real projects?

db.json is just a file used to store data. It works for small practice projects, but it is not good for real applications.

Limitations:

Performance: Every time data is read or written, the whole file is accessed, which makes it slow when data increases.

Scalability: It cannot handle large data or many users at the same time.

Reliability: If the server crashes while writing data, the file can get corrupted.

There is no backup, recovery, or transaction support.

Because of these problems, db.json should be used only for learning or small demos, not real-world projects.

2. What are the ideal characteristics of a database system?

A good database system should do more than just store data.

Ideal characteristics:

Performance: Data should be stored and retrieved quickly.

Concurrency: Many users should be able to access data at the same time without conflicts.

Reliability: Data should not be lost even if the system crashes.

Data Integrity: The database should keep data correct and consistent.

Scalability: It should work well even when data and users increase.

Fault Tolerance: The system should continue working even if some part fails.

3. How many types of databases are there? What are their use cases?

There are mainly two types of databases:

1. Relational Databases (SQL)

Data is stored in tables with rows and columns.

They follow a fixed structure.

Examples: MySQL, PostgreSQL, Oracle

Use cases:

Banking systems

E-commerce websites

Student or employee management systems

Best for: Structured data and applications that need strong data accuracy.

2. Non-Relational Databases (NoSQL)

Data is stored in flexible formats like documents or key-value pairs.

Schema is not fixed.

Examples: MongoDB, Redis, Cassandra

Use cases:

Social media apps

Chat applications

Big data and real-time systems

Best for: Large-scale applications and fast-changing data.
