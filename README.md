# README
## Description

BarStock is a 13-day, four-person project during Mod 4 of 4, for Turing School's Back-End Engineering Program. Our team consists of two Front-End Developers and two Back-End Developers.

Our challenge was to create a web application from idea to inception by integrating our skills as Front-End and Back-End Developers to solve a real-world problem.

Thus, BarStock was born. BarStock is a web application designed to solve the communication challenges between bar owners and distributors when placing inventory orders. In the bar industry, it is frequently common practice to place weekly inventory orders via text messages/emails. Bar owners are not provided with pricing sheets, nor available inventory, and often receive incorrect shipments. BarStock is intended to alleviate this headache by providing bar owners with user interface to view distributor inventory, analyze profit margins, and automate text message/email ordering.

BarStock utilizes React Native, Redux, Jest, and Enzyme, and communicates with the [BarStock Back-End](https://github.com/MRKrog/barstock-ui) via API requests/responses.

<!-- #### [**_Utilizes BarStock Back-End in Production_**](https://barstock-backend.herokuapp.com) -->

## Schema
![Alt text](./public/images/schema.png?raw=true "Database Schema")

## Available Endpoints
All available endpoints have been documented on [Swagger](https://app.swaggerhub.com/apis-docs/BarStock/BarStockBackEnd/1.0.0).
![Alt text](./public/images/swagger_endpoints.png?raw=true "Endpoint Documentation")


## Representative Notifications of Order

Upon creation of an order, both an email and an email and a text message are sent to the distributor's representative.

### Order Email
![Alt text](./public/images/email_sample.png?raw=true "Order Email")

### Order Text Message
![Alt text](./public/images/text_message.jpg?raw=true "Order Text Message")

<!-- ## Getting Started

To run BarStock Back-End on a local machine, navigate to the directory in which you would like the project to be located, then execute the following commands:

```
$ git clone git@github.com:MRKrog/barstock-rn.git
$ cd barstock_backend-rn
``` -->



<!-- ### Running Tests

To run the test suite, execute the following command: -->


<!-- ### Deployment -->


## Tools Utilized:
* React-Native
* Redux
* Jest
* Enzyme

<!--  ## Known Issues
INSERT KNOWN ISSUES HERE -->

## How to Contribute

###### Contributing Code:
1. Fork the project.
2. Write a failing test.
3. Commit that failing tests.
4. Commit changes that fix the tests.
4. Submit a pull request detailing the change that was made.

###### Submitting a Bug:
1. Search the existing [issues](https://github.com/nagerz/quantified_self/issues).
2. Create a new issue if applicable, or contribute to an existing issue.

### Related Links:
###### [**_Agile Project Board_**](https://trello.com/b/jD2vXUGS/barstock)
###### [**_Project Specifications_**](http://backend.turing.io/module4/projects/cross_pollination/cross_pollination_spec)
###### [**_Project Rubric_**](http://backend.turing.io/module4/projects/cross_pollination/cross_pollination_rubric)

### Authors
* [Gabriel Inzurriaga](https://github.com/Inzurriaga)
* [Michael Krog](https://github.com/MRKrog)
* [Julia Marco](https://github.com/juliamarco)
* [Mackenzie Frey](https://github.com/Mackenzie-Frey)

### Acknowledgments
* [David Whitaker](https://github.com/damwhit)
* [Dione Wilson](https://github.com/dionew1)
* [Cory Westerfield](https://github.com/corywest)
* [Will Mitchell](https://github.com/wvmitchell)
