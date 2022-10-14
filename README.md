# Restaurant Reservation System

## Live Application
https://reserve-system-front.herokuapp.com/

## Application Description
This is a full stack project for Thinful's engineering program. The application allows restaurants to create, edit, track, and manage reservations including tables that are free or used. Existing reservations can be booked, seated, finished, and can be searched via phone number or by date. Tables are displayed on the dashboard with a status of Free or Occupied. The project was given the following prompt:
> You have been hired as a full stack developer at _Periodic Tables_, a startup that is creating a reservation system for fine dining restaurants.
> The software is used only by restaurant personnel when a customer calls to request a reservation.
> At this point, the customers will not access the system online.

## Installation

1. Fork and clone this repository.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your ElephantSQL database instance.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5001`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.

## Running tests


