# Shipping Label Maker

This app contains a Wizard that enables a User to fill out of form. Please see the app specification for implementation details.

## Installation

Once you've placed this folder in your file system somewhere, run:

    yarn

## Usage

To run this project and view in browser, use:

    yarn start

If you don't get immediately redirected to the browser, navigate to `localhost:3000`..

To run tests, use:

    yarn test

If for some reason you need to create a production build of the app, use:

    yarn build

## Note to the test writers

### 1. The Component Header

Several elements of this assignments raised questions, and unfortunately I found them somewhat confusing.

The first issue was that of the Header. The header is initally described as a simple component title that does not change between different steps, but in the `propTypes`, it is defined as a function, rather than a text field.

No explanation of what this `header` function should do is provided, so I'm assuming that function is a typo and in fact it's just text.

### 2. Multiple Issues with Steps

The top level `propTypes` defines `steps` as an array, but then a further `propTypes` declaration of `steps` shows that it is in fact and `object`. Furthermore, `steps` declares `wizardContext` as a property, even though `wizardContext` was already defined at the top level props.

This would mean that `wizardContext` is defined in two separate places, which I believe is not good coding practice (Single Source of Truth).

Maybe this is a test to see if a job applicant picks up on these issues, but if so, it's not ideal, since the applicant doesn't have a tech person to ask for clarification, so I'm guessing that these are likely mistakes.

### 3. Inconsistent Naming Conventions

In step 2 of the Exercise Instructions, it says the following:

> rename all files/folders to lower case (with dashes if
> needed) to follow our file naming conventions.

In step 4 though, the instructions tell us to use PascalCase

> This is where you will create the
> ShippingLabelMaker component as well as the steps and the ShippingLabel component.

So which naming convention should we use?

Please let me know if I misunderstood these issues.

### Regarding an Auth Component

The bonus section asks us to create a login screen which uses some type of authentication. If it's just a "Enter your password" text field which then does a string comparison against a stored value, then it's fine, but that doesn't require any knowledge about industry-quality authentication.

Of course, we could store the password in local storage or a cookie, but both of these are completely insecure.

Authentication is a complex process that generally utilizes a server, and since this is a front-end only application, I can't do that.

Although I'm not a security expert by any means, here is a very simple approach to writing your own Auth module, which I completely do not recommend. Auth should be taken care of by a 3rd-party specialized service which is well-known and trusted by industry.

1. Send an encrypted version of the username and password to the server
2. On the server, compare the hashed username and password to the corresponding values stored in the database, which are also encrypted
3. If there is a match, return the Session ID to the client and store it in a cookie with HttpOnly set to true
4. For all server requests and other Auth purposes, use this cookie value as an auth token of sorts
5. For each request, check that the session attached to the session ID stored in the cookie is still valid. If it isn't, then reject the request and inform the User that they need to log in again.
6. Make sure that after a certain amount of time or some other criteria, you expire the session and delete it. Stale sessions lying around could be taken advantage of by hackers.

## Tech Stack Used

I've implemented the following tech for this assignment since I believe that it's the best fit for the job.

-   Styled Components - helps me write more semantic and modular JSX & CSS
-   TypeScript - catches type-related developer-caused bugs
-   Jest - unit testing

## Exercise Instuctions

[x] - Create a blank project called `shipping-label-maker` using `create-react-app`

[x] - Remove all components except App. Clean up the render method of App.js so that you have a blank screen. In the src folder, rename all files/folders to lower case (with dashes if needed) to follow our file naming conventions.

[x] - Create a folder called `core/components/wizard`. This is where you will create the Wizard component. The core folder is intended for reusable components.

[x] - Create a folder called `features/shipping-label-maker`. This is where you will create the `ShippingLabelMaker` component as well as the steps and the `ShippingLabel` component. The feature folder is intended for implementing application specific features.

[] - Implement the basic Wizard component so that it can accept some steps and react to prev, next and end actions from the steps. Don’t worry about styling or passing wizardContext at this time.

[] - Implement passing of the wizardContext and filling the sender’s address using the first step.

[] - Implement the remaining steps based on the wireframe provided. You should be able to fill in how the remaining steps look.

[] - [Bonus] Beautify your UI using raw CSS or any UI library of your choice.

[] - [Bonus] Add meaningful validations to your steps.

[] - [Bonus] Write the following tests using your favorite testing framework:
a. Wizard moves backwards and forwards based on actions sent by steps.
b. Wizard calls onComplete() of the parent when a step sends the end action.
c. Shipping Label maker prints the shipping label when onComplete() is called.
d. Shipping cost is printed correctly as specified by the formula above.

[] - [Bonus] Create a login screen that will authenticate the user using a username and password. The wizard should be shown only after successful authentication. Build the authentication as a Higher-Order Component.

[] - Update the README.md file to tell us anything special about your solution. This will help us evaluate your solution in the best light.
