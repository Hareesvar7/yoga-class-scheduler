# Yoga Classes
## About the App
* Frontend : ReactJS
* Backend : Express, NodeJS
* Database : MongoDB
## Features
* Accepts the user data, does basic validations.
* Only people within the age limit of 18-65 can enroll for the monthly classes and they will
be paying the fees on a month on month basis. I.e. an individual will have to pay the fees
every month and he can pay it any time of the month.
* They can enroll any day but they will have to pay for the entire month. The monthly fee is
500/- Rs INR.
* There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. The
participants can choose any batch in a month and can move to any other batch next
month. I.e. participants can shift from one batch to another in different months but in
same month they need to be in same batch.
* Return the response to front-end depending on the payment response from
CompletePayment() function.
* Use of REST-API


## ENVIRONMENT VARIABLE REQUIRED FOR RUNNING THIS APPLICATION LOCALLY
* MONGODB_URI 
* JWT_SECRET
* PORT

## API USED :
1. /home    (Home page)
2. /signin (Page for Existing user to sign in again)
3. /signup (Page for Registering)
4. /chooseplan ( Page for choosing the batch and payment)
5. /profile ( Display all the users data in Profile Page) 








|   Profile     |    
| ------------- |
|![alt text][Profile]  | 

