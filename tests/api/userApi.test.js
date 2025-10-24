/**
 * API tests for user endpoints
 * These tests demonstrate REST API testing using Jest and Supertest
 */

const request = require('supertest');
const app = require('../../src/api/server');

describe('User API Endpoints', () => {
  
  describe('GET /api/users', () => {
    test('should return all users', async () => {
      const response = await request(app)
        .get('/api/users')
        .expect(200);
      
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });

    test('should return users with correct structure', async () => {
      const response = await request(app)
        .get('/api/users')
        .expect(200);
      
      const user = response.body[0];
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('email');
    });
  });

  describe('GET /api/users/:id', () => {
    test('should return a specific user by id', async () => {
      const response = await request(app)
        .get('/api/users/1')
        .expect(200);
      
      expect(response.body).toHaveProperty('id', 1);
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('email');
    });

    test('should return 404 for non-existent user', async () => {
      const response = await request(app)
        .get('/api/users/9999')
        .expect(404);
      
      expect(response.body).toHaveProperty('error', 'User not found');
    });
  });

  describe('POST /api/users', () => {
    test('should create a new user', async () => {
      const newUser = {
        name: 'Test User',
        email: 'test@example.com',
      };

      const response = await request(app)
        .post('/api/users')
        .send(newUser)
        .expect(201);
      
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('name', newUser.name);
      expect(response.body).toHaveProperty('email', newUser.email);
    });

    test('should return 400 when name is missing', async () => {
      const invalidUser = {
        email: 'test@example.com',
      };

      const response = await request(app)
        .post('/api/users')
        .send(invalidUser)
        .expect(400);
      
      expect(response.body).toHaveProperty('error', 'Name and email are required');
    });

    test('should return 400 when email is missing', async () => {
      const invalidUser = {
        name: 'Test User',
      };

      const response = await request(app)
        .post('/api/users')
        .send(invalidUser)
        .expect(400);
      
      expect(response.body).toHaveProperty('error', 'Name and email are required');
    });
  });

  describe('PUT /api/users/:id', () => {
    test('should update an existing user', async () => {
      const updates = {
        name: 'Updated Name',
        email: 'updated@example.com',
      };

      const response = await request(app)
        .put('/api/users/1')
        .send(updates)
        .expect(200);
      
      expect(response.body).toHaveProperty('id', 1);
      expect(response.body).toHaveProperty('name', updates.name);
      expect(response.body).toHaveProperty('email', updates.email);
    });

    test('should return 404 for non-existent user', async () => {
      const updates = {
        name: 'Updated Name',
      };

      const response = await request(app)
        .put('/api/users/9999')
        .send(updates)
        .expect(404);
      
      expect(response.body).toHaveProperty('error', 'User not found');
    });
  });

  describe('DELETE /api/users/:id', () => {
    test('should delete an existing user', async () => {
      await request(app)
        .delete('/api/users/2')
        .expect(204);
    });

    test('should return 404 when deleting non-existent user', async () => {
      const response = await request(app)
        .delete('/api/users/9999')
        .expect(404);
      
      expect(response.body).toHaveProperty('error', 'User not found');
    });
  });

  describe('GET /health', () => {
    test('should return health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);
      
      expect(response.body).toHaveProperty('status', 'OK');
      expect(response.body).toHaveProperty('timestamp');
    });
  });
});
