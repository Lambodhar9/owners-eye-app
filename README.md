# 🎬 Owner's Eye

Cinema Owner Management Platform.

This is a frontend MVP built with:

- React
- TypeScript
- Vite
- Material UI
- Recharts

## Features

### Authentication

Demo login:

Email:
owner@cinema.com

Password:
demo

### Dashboard

Displays:

- Today's gross collection
- Ticket collection
- F&B collection
- Parking
- Expenses
- Net collection
- Occupancy
- Screen performance
- 7-day collection chart
- Business alerts

### Collection

Displays:

- Gross collection
- Ticket collection
- F&B
- Parking
- Expenses
- Net collection
- Cash
- UPI
- Card
- Online booking

### Shows

Displays:

- Movie
- Screen
- Show time
- Tickets sold
- Capacity
- Occupancy
- Collection

### Theatres

Displays:

- Theatre
- City
- Number of screens
- Status

### Users

Supports:

- User listing
- Add user
- Role selection
- Theatre selection
- Mock user creation

### Roles & Permissions

Roles:

- Owner
- Theatre Manager
- Accountant
- Operator

Permissions can be switched on/off.

### Reports

Supports:

- From date
- To date
- Collection report
- Screen-wise report
- Movie-wise report
- Occupancy report
- Expense report
- Profit summary
- PDF action
- Excel action
- CSV action

The current version uses mock download actions.

### AI Insights

Includes:

- Revenue forecast
- Confidence score
- Revenue growth insight
- Low occupancy recommendation
- F&B opportunity
- Owner recommendation

### Alerts

Includes:

- Cash variance
- Low occupancy
- Target crossed

### Settings

Includes:

- Theatre profile
- Owner profile
- WhatsApp daily report
- Email reports
- Save settings

## Installation

Install Node.js.

Recommended:

Node.js 20 LTS+

Then:

npm install

Run:

npm run dev

Open:

http://localhost:5173

## Build

npm run build

## Production preview

npm run preview

## Backend Integration

The frontend is intentionally structured so the mock services can later be replaced by Spring Boot REST APIs.

Expected backend:

Spring Boot
Java 21
MySQL
JWT Authentication

Example:

VITE_API_URL=http://localhost:8080/api