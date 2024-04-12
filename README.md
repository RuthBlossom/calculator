# Express Calculator App

This is a simple calculator web application built using Express.js. It allows users to perform basic arithmetic operations by sending HTTP POST requests with two operands to the server.

## Features
- **Addition**: Perform addition operation on two numbers.
- **Subtraction**: Perform subtraction operation on two numbers.
- **Multiplication**: Perform multiplication operation on two numbers.
- **Division**: Perform division operation on two numbers.

## Prerequisites
- Node.js installed on your system.
- npm (Node Package Manager) for installing dependencies.

## Installation
1. Clone this repository to your local machine:
   ```
   git clone https://github.com/your-username/express-calculator.git
   ```
2. Navigate to the project directory:
   ```
   cd express-calculator
   ```
3. Install dependencies using npm:
   ```
   npm install
   ```

## Usage
1. Start the server:
   ```
   node app.js
   ```
2. Access the calculator app in your web browser at `http://localhost:3000`.
3. Enter two numbers and select an operation to perform.
4. Submit the form to see the result of the calculation.

## API Endpoints
- **GET /**: Display the calculator web interface.
- **POST /**: Handle the calculation request by adding, subtracting, multiplying, or dividing two numbers.

## Request Body Format
- The HTTP POST request to `/` should contain the following parameters in the request body:
  - `num1`: The first operand (number).
  - `num2`: The second operand (number).

## Response Format
- Upon receiving a valid calculation request, the server responds with a message indicating the result of the calculation.


---

