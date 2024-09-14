# Inventory Management System

## Overview
This application is designed to help employees manage and track perishable inventory. It allows users to view, update, and manage products with expiration dates, helping to ensure items are appropriately handled. Employees can track upcoming expiration dates, discount items close to expiration, and remove them for donation three days prior to expiration.

## Application Details
The system enables users to manage perishable inventory efficiently. Users can add, edit, and remove items while viewing important details such as product numbers, categories, and expiration dates. The application also supports sorting and filtering based on various product attributes.

## Features
- Inventory management with expiration tracking
- User authentication with role-based access (Admin and Member)
- Add, update, and delete products
- Sort and filter products by expiration date or category
- Visual indicators for products nearing or past expiration dates

## Technologies Used
- Java and Spring Boot for the backend
- MongoDB for database management
- JWT for secure authentication
- React.js for the frontend
- Vite for optimized development
- Tailwind CSS for responsive styling

## Example Images
- Login/Register Page:
    - Login page for returning users and option to register an account if a new user.
    - ![Login Page](https://github.com/Andi-Cast/inventory-app/blob/main/Screenshots/Login_Page.png)
     - ![Register Page](https://github.com/Andi-Cast/inventory-app/blob/main/Screenshots/Create_Account_Page.png)
- Product List:
    - Displays all products, allowing employees to see expiration dates and other important information at a glance.
    - ![Product List](https://github.com/Andi-Cast/inventory-app/blob/main/Screenshots/ADMIN_Account_Page.png)
- Add Product:
    - Employees can add new products, specifying details such as product number, name, category, and expiration date.
    - ![Add Product](https://github.com/Andi-Cast/inventory-app/blob/main/Screenshots/Add_Product_Form.png)
- Filter and Sorting Options
    - Employees are able to filter and sort products based on product attributes.
    - ![Filter Option](https://github.com/Andi-Cast/inventory-app/blob/main/Screenshots/Filter_Options.png)
    - ![Sort Option](https://github.com/Andi-Cast/inventory-app/blob/main/Screenshots/Sort_Options.png)
- Update Product Form
    - Employees are able to edit existing product information.
    - ![Update Product Form](https://github.com/Andi-Cast/inventory-app/blob/main/Screenshots/Edit_Product_Form.png)
- User List
    - Employees with ADMIN accounts are able to interact with other users accounts. 
    - The Users options only shows up in ADMIN accounts.
    - ![User List](https://github.com/Andi-Cast/inventory-app/blob/main/Screenshots/User_List.png)
- Update User Form
    - ADMIN accounts are able to modify the account types of other users, changing their account access.
    - ![Update User Form](https://github.com/Andi-Cast/inventory-app/blob/main/Screenshots/Edit_User.png)
- Edit Profile Page
    - Employees are able to modify their accounts through the Edit Profile page.
    - ![Edit Profile Page](https://github.com/Andi-Cast/inventory-app/blob/main/Screenshots/Edit_Profile.png)


## Getting Started
### Prerequisites
- Node.js
- Java (JDK 17+)
- MongoDB
- Inventory API (https://github.com/Andi-Cast/inventory-app-api)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd inventory-management-system
