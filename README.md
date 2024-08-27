# angry-beaver-oakes-BE

This is the backend server for the Angry Beaver Lodge - small restouran, wich has been the cornerstone of Oakes Main Street for over 20 years.

## Table of Contents

- [Technologies and Libraries](#technologies-and-libraries)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Contact](#contact)

## Technologies and Libraries

This project uses the following technologies and libraries:

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **Mongoose**: ODM for MongoDB.
- **Multer**: Middleware for handling `multipart/form-data`.
- **Joi**: For data validation.
- **dotenv**: For managing environment variables.
- **Morgan**: HTTP request logger middleware.
- **cors**: For enabling Cross-Origin Resource Sharing.

## Installation

1. **Clone the repository:**

```sh
git clone https://github.com/Valerii2022/angry-beaver-oakes-BE.git
cd angry-beaver-aokes-BE
```

2. **Install dependencies:**

```sh
npm install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory and add the necessary environment variables:

```env
DB_HOST=your_database_host
```

4. **Start the server:**

```sh
npm start
```

For development, use:

```sh
npm run dev
```

The server will be available at `http://localhost:3000`.

## API Endpoints

### Order Routes

- `GET /api/orders/:id`: Get order by id.
- `POST /api/orders`: Add order.
- `POST /api/orders/guests/:id`: Add guest to the order.
- `PUT /api/orders/:id`: Update the order.
- `PUT /api/orders/items/:id`: Add item to the order.
- `PUT /api/orders/remove/:id`: Remove item from the order.
- `DELETE /api/orders/:id`: Remove the order.

### Gallery Route

- `GET /api/gallery`: Get images for gallery.

### Products Route

- `GET /api/products`: Get available products for ordering.

### Contact Route

- `POST /api/contacts`: Leave customer contact for communicate.

### Subscribe Route

- `POST /api/subscribe`: Leave customer contact for subscribe.

## Contact

For any questions or feedback, please open an issue on GitHub.
