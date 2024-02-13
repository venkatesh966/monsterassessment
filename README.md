# Monster Assessment Project

## Description
The project is a web application developed using Angular framework. It serves as a platform for managing flight details, allowing users to input information such as airline, arrival date, arrival time, flight number, number of guests, and additional comments. The application also includes a feature for user authentication and logout.

## KEY FEATURES
- **User Authentication**: Users can log in to the application using Firebase Authentication. Implemented email verification for new user registrations.
- **Session Management**: Implemented session storage to track the user's session by encrypting and storing their unique identifier (UID) from Firebase using a simple JavaScript function. If the session storage is empty (e.g., when the user closes the browser), we automatically log out the user from Firebase upon reopening the browser. This approach allows us to control the user session from our end.
- **Route Guards**: Implemented two guard services for both private and public routes. If the user is already logged in, the login page is not shown, redirecting to the dashboard page. If the user is not logged in, they can't access the dashboard page and the form. (This can be optimized)
- **Scss**: Utilized SCSS for maintaining proper structure of CSS, ensuring that class overriding does not occur. Additionally, defined theme colors for the project in the global scope


## Technologies Used
- **Angular**: Front-end framework used for building the application.
- **TypeScript**: Programming language used for developing Angular components.
- **HTML/CSS**: Markup and styling languages used for designing the user interface.
- **Firebase Authentication**: Authentication service provided by Firebase.

## Setup Instructions
1. Clone the repository to your local machine.
2. Install Node.js and npm if not already installed.
3. Navigate to the project directory in the terminal.
4. Run `npm install` to install project dependencies.
5. Run `ng serve` to start the development server.
6. Open a web browser and navigate to [http://localhost:4200](http://localhost:4200) to view the application.

## Usage
1. Log in/Register to the application using your Google account.
2. Enter flight details in the provided form fields.
3. Click on the "Submit" button to submit the flight details.
4. If the arrival date is in the past, an error message will be displayed.
5. Log out of the application when done.

## Deployment
The application is deployed on Firebase and can be accessed [here](https://flight-tracker-ad367.web.app/login).

## Contributors
- [Venkatesh Morpoju](https://github.com/venkatesh966)

