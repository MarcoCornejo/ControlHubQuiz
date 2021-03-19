# ControlHubQuiz

## Exercise Instructions
Scenario: There is a need for a Rest (or Rest-like) API that can receive an index "n" and returns the Fibonacci value that corresponds to the given index, and you have been tasked with implementing the first version of this API.

Examples: the first values of the Fibonacci sequence are 0, 1, 1, 2, 3, 5, 8, 13, ..., so, if we were to give the API the index n=3, we should get the response value "2", and if we request n=6, we should get "8" as the response, and so on.

Please deliver to us your API as a link to a repo (Gitlab, Github, etc...) with your code and a README file (plaintext or markdown).

The code project can be developed in the programming language of your choice.

## Thought Process

At first I solved the fibonacci sequence with recursion, but then I quickly realized this was an inefficient solution, so I redid it with a for loop for an O(N) solution.

The index.js exposes my app in port 3000, we could improve this to expose to app a port specified in an env variable.
My app.js has a single endpoint, so I took the liberty to add it there, even though for a production application, the endpoints should be specified in a router file

The endpoint then makes a call to the FibonacciController which performs some validations before calling the business logic in fibonacci.js
This could be further improved by having a validator middleware that does the actual validation, instead of having that code in the Controller.

Also, fibonacci should be a Model, therefore it should be a class, but because of time my focus was on developing a simple working app, and not a production ready one.

An authorization middleware should also be considered, and endpoints should enforce it.
The app should also enable CORS before moving to Production.
Finally, the api should place a prefix on its endpoints e.g. /api/v1  This should be applied in the Router.


Thanks.

## Local Execution Steps
1. Clone the Repo
2. Run npm install
3. Run npm start
4. App is now running locally on port 3000.