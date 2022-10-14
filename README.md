# Restaurant Reservation System

## Live Application
https://reserve-system-front.herokuapp.com/

## Application Description
This is a full stack project for Thinful's engineering program. The application allows restaurants to create, edit, track, and manage reservations including tables that are free or occupied. Existing reservations can be booked, seated, finished, and can be searched via phone number or by date. Tables are displayed on the dashboard with a status of Free or Occupied. The project was given the following prompt:
> You have been hired as a full stack developer at _Periodic Tables_, a startup that is creating a reservation system for fine dining restaurants.
> The software is used only by restaurant personnel when a customer calls to request a reservation.
> At this point, the customers will not access the system online.

## User Stories

This application was developed using user stories given by a figurative manager. The user stories are briefly explained next with attached screenshots:
- The Dashboard view is the home page view of the application and displays the restaurant reservations for the current day, but the user can also search for a certain date or use the previous or next buttons to iterate through the days. The tables will also be displayed on the dashboard.

*Current Date*

![image](https://user-images.githubusercontent.com/78841093/195773845-83a3368c-5c44-4208-809a-a8112453fbf9.png)

*Specific date*

![image](https://user-images.githubusercontent.com/78841093/195773482-5f61e1b1-3e77-43a1-b635-71909ccf439f.png)

- Search for a reservation given a customer phone number

![image](https://user-images.githubusercontent.com/78841093/195774008-05d2ac5a-f62c-4bb8-8905-e0f85a2725c8.png)

- Create a new reservation with new details ( a validation error is shown for non buisness hours)

![image](https://user-images.githubusercontent.com/78841093/195774178-420e20fe-64c9-47d1-b24a-e936f059a310.png)

- Instances of tables can be created and assigned to parties as they arrive with their reservations

![image](https://user-images.githubusercontent.com/78841093/195775593-aee91785-9198-4086-b92a-df3975a8ae74.png)

![image](https://user-images.githubusercontent.com/78841093/195775694-448a67a0-92d9-42c9-8266-a629efb41bfc.png)

## API Documentation

API Url: https://reserve-system-back.herokuapp.com/

| Endpoint | Description |
| - | - |
| `GET /reservations` | returns all reservations |
| `POST /reservations` | creates and returns a new reservation |
| `GET /reservations?date='YYYY-MM-DD'` | returns reservations by date (sorted asc) |
| `GET /reservations?mobile_number=123` | returns reservations by partial match of phone number |
| `GET /reservations/:reservationId` | returns reservation matching the reservationId |
| `PUT /reservations/:reservationId` | updates and returns the reservation matching the reservationId |
| `PUT /reservations/:reservationId/status` | updates only the status of a reservation |
| `GET /tables` | returns all Tables |
| `POST /tables` | creates and returns a new table |
| `PUT /tables:table_id/seat` | updates a table with a reservationId and changes status to "occupied" |
| `Delete /tables:table_id/seat` | updates a table by deleting reservationId and changes status to "free" |

## Technologies used

*Front-end*
- Bootstrap
- HTML
- CSS
- React
- e2e tests
- JavaScript

*Back-end*
- Node.js
- Express.js
- Knex
- PostgreSQL
- Heroku
- JavaScript
- 
## Installation

1. Fork and clone this repository.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your ElephantSQL database instance.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5001`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.
