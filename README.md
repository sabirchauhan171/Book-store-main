# Book-store-main
# Book Store Management System – Project Description

## Introduction

The **Book Store Management System** is a web-based application developed to simplify the management of books in a bookstore or library environment. The system is built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **EJS**, providing a complete full-stack solution for storing and managing book information. It allows users to perform all essential operations such as adding new books, viewing available books, updating book details, and deleting books from the database.

The primary objective of this project is to automate the traditional manual process of maintaining book records and provide an easy-to-use interface for efficient book management. The application follows a structured architecture, making it scalable, maintainable, and suitable for learning modern web development technologies.

## Features

The Book Store Management System provides the following features:

* Add new books with complete information such as title, author, price, category, and description.
* Display all books stored in the database in an organized manner.
* Edit or update existing book details whenever required.
* Delete books that are no longer available or required.
* Upload and manage book cover images using Multer.
* Store all data securely in a MongoDB database using Mongoose.
* Render dynamic web pages using the EJS template engine.
* Support HTTP PUT and DELETE operations through Method-Override.
* Provide a user-friendly interface for easy navigation and management.

## Technologies Used

The project is developed using the following technologies:

* **Frontend:** HTML, CSS, JavaScript, EJS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **File Upload:** Multer
* **HTTP Method Handling:** Method-Override

## Working of the System

When the application starts, the Express server connects to the MongoDB database and begins listening for user requests. Users can access the application through a web browser and perform various operations related to book management.

Whenever a user adds a new book, the information entered in the form is validated and stored in the MongoDB database. If an image is uploaded, it is saved in the designated uploads directory and linked with the corresponding book record.

The application retrieves data from the database and displays it dynamically using EJS templates. Users can modify existing book details through the edit functionality, and the updated information is saved back into the database. Similarly, users can delete unwanted records, ensuring that the database remains organized and up to date.

The use of Express routing and Mongoose models makes the application modular and easy to maintain while following modern web development practices.

## Objectives

The main objectives of this project are:

1. To develop a complete CRUD (Create, Read, Update, Delete) application.
2. To learn full-stack web development using Node.js and Express.js.
3. To integrate MongoDB as a NoSQL database for data storage.
4. To implement dynamic page rendering using EJS.
5. To provide a simple and efficient system for managing bookstore records.
6. To understand file uploading and database integration in web applications.

## Advantages

* Reduces manual effort in maintaining book records.
* Provides quick access to book information.
* Easy to update and delete records.
* Supports image uploading for better visualization.
* Uses a structured and scalable architecture.
* Simple and user-friendly interface.
* Demonstrates practical implementation of modern web technologies.

## Conclusion

The **Book Store Management System** is an efficient and practical web application that demonstrates the implementation of full-stack development concepts using **Node.js, Express.js, MongoDB, Mongoose, and EJS**. It successfully performs CRUD operations, manages book information effectively, and provides a responsive and organized platform for bookstore management. This project serves as an excellent learning resource for understanding backend development, database connectivity, routing, template rendering, and file handling in modern web applications.


![project screenshot](https://github.com/sabirchauhan171/Book-store-main/blob/972250948f26a6d4cf78c6e10aef42b0bab8e24c/Screenshot%202026-06-15%20124017.png
)

![project screenshot](https://github.com/sabirchauhan171/Book-store-main/blob/972250948f26a6d4cf78c6e10aef42b0bab8e24c/Screenshot%202026-06-15%20124643.png
)

![project screenshot](https://github.com/sabirchauhan171/Book-store-main/blob/972250948f26a6d4cf78c6e10aef42b0bab8e24c/Screenshot%202026-06-15%20123959.png
)

