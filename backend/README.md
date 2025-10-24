# Matcher Backend API

A secure Express.js backend for user authentication and management.

## Features

🔐 **Secure Authentication**
- JWT token-based authentication
- Password hashing with bcrypt
- Rate limiting for security
- Input validation and sanitization

🛡️ **Security Features**
- Helmet.js for security headers
- CORS protection
- Rate limiting (5 auth attempts per 15 minutes)
- Strong password requirements
- Email validation

🚀 **API Endpoints**
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get current user (protected)
- `GET /api/health` - Health check

## Quick Start

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Setup
Create a `.env` file with:
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
FRONTEND_URL=http://localhost:3000
```

### 3. Start the Server
```bash
# Development (with auto-restart)
npm run dev

# Production
npm start
```

The server will run on `http://localhost:5000`

## API Documentation

### Signup
```bash
POST /api/auth/signup
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "SecurePass123",
  "confirmPassword": "SecurePass123"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "user": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "createdAt": "2025-10-24T...",
    "lastLogin": null
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "createdAt": "2025-10-24T...",
    "lastLogin": "2025-10-24T..."
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### Get Profile (Protected)
```bash
GET /api/auth/profile
Authorization: Bearer <your-jwt-token>
```

## Password Requirements

- Minimum 8 characters
- At least 1 uppercase letter
- At least 1 lowercase letter  
- At least 1 number

## Error Handling

The API returns structured error responses:

```json
{
  "message": "Validation failed",
  "errors": {
    "email": "Email is required",
    "password": "Password must be at least 8 characters"
  }
}
```

## Security Features

- **Rate Limiting**: 5 authentication attempts per 15 minutes per IP
- **Password Hashing**: bcrypt with 12 salt rounds
- **JWT Tokens**: 24-hour expiration
- **Input Validation**: Email format, password strength
- **CORS Protection**: Only allows requests from frontend URL
- **Security Headers**: Helmet.js protection

## Development

### Testing Endpoints
```bash
# Health check
curl http://localhost:5000/api/health

# View all users (dev only)
curl http://localhost:5000/api/users
```

### Data Storage
Currently uses in-memory storage (array). In production, replace with:
- MongoDB with Mongoose
- PostgreSQL with Sequelize
- Any other database of choice

## Production Deployment

1. Set strong `JWT_SECRET` environment variable
2. Set `NODE_ENV=production`
3. Use proper database instead of in-memory storage
4. Set up HTTPS
5. Configure proper CORS origins
6. Set up logging and monitoring

## Tech Stack

- **Express.js** - Web framework
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT tokens
- **helmet** - Security headers
- **express-rate-limit** - Rate limiting
- **cors** - CORS handling
- **dotenv** - Environment variables