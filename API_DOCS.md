# YEMELINK API Documentation

## Environment Setup

Create `.env.local` with:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_OPENAI_API_KEY=your_openai_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
```

## Supabase Tables Schema

### users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  name VARCHAR NOT NULL,
  avatar_url VARCHAR,
  bio TEXT,
  role VARCHAR DEFAULT 'user',
  is_premium BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### projects
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY,
  title VARCHAR NOT NULL,
  description TEXT NOT NULL,
  images TEXT[] NOT NULL,
  url VARCHAR,
  client_name VARCHAR,
  tech_stack TEXT[] NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### posts
```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY,
  author_id UUID REFERENCES users(id),
  content TEXT NOT NULL,
  media_url VARCHAR,
  media_type VARCHAR,
  type VARCHAR NOT NULL,
  likes INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### comments
```sql
CREATE TABLE comments (
  id UUID PRIMARY KEY,
  post_id UUID REFERENCES posts(id),
  author_id UUID REFERENCES users(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### articles
```sql
CREATE TABLE articles (
  id UUID PRIMARY KEY,
  title VARCHAR NOT NULL,
  slug VARCHAR UNIQUE NOT NULL,
  body TEXT NOT NULL,
  author_id UUID REFERENCES users(id),
  tags TEXT[] NOT NULL,
  published_at TIMESTAMP DEFAULT NOW()
);
```

## API Endpoints

### Auth
- `POST /auth/signup` - Register new user
- `POST /auth/signin` - Login
- `POST /auth/logout` - Logout
- `POST /auth/reset-password` - Reset password

### Projects
- `GET /projects` - List all projects
- `GET /projects/:id` - Get project details
- `POST /projects` - Create project (admin only)

### Posts (Community)
- `GET /feed?page=1` - Get feed posts
- `POST /posts` - Create post
- `POST /posts/:id/like` - Like post
- `POST /posts/:id/comment` - Add comment

### Articles
- `GET /articles` - List articles
- `GET /articles/:slug` - Get article

### Chat
- `POST /chat` - Send AI message

### Payments
- `POST /stripe/session` - Create checkout
- `GET /payments/:sessionId` - Get payment status

## Request Examples

### Create Post
```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Authorization: Bearer token" \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Hello community!",
    "type": "text"
  }'
```

### Send Chat Message
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Authorization: Bearer token" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What services do you offer?"
  }'
```

### Create Checkout Session
```bash
curl -X POST http://localhost:3000/api/stripe/session \
  -H "Authorization: Bearer token" \
  -H "Content-Type: application/json" \
  -d '{
    "priceId": "price_xyz",
    "email": "user@example.com"
  }'
```

## Error Responses

All errors return JSON:
```json
{
  "error": "Description of error",
  "code": "ERROR_CODE",
  "status": 400
}
```

Common status codes:
- `200` - Success
- `400` - Bad request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not found
- `429` - Rate limited
- `500` - Server error

## Rate Limits

- Posts: 20/hour per user
- Comments: 100/hour per user
- Chat messages: 200/hour per user
- Auth attempts: 5/15min per IP

## Webhooks

### Stripe Webhook
```json
{
  "type": "payment_intent.succeeded",
  "data": {
    "object": {
      "id": "pi_xxx",
      "amount": 10000,
      "currency": "usd"
    }
  }
}
```

## Support

For API issues:
- Email: yemelink@gmail.com
- GitHub Issues: Create issue
