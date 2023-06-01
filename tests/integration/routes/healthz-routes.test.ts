import request from 'supertest'
import app from '@/main/config/app'

describe('Healthz Routes :: Integration', () => {
  describe('GET /healthz', () => {
    test('Should return 200', async () => {
      await request(app)
        .get('/v1/healthz')
        .expect(200)
        .expect({ healthy: true })
    })
  })
})
