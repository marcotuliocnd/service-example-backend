import { HealthzController } from '@/presentation/controllers/healthz/healthz-controller'

const makeSut = (): HealthzController => {
  return new HealthzController()
}

describe('HealthzController :: Unit', () => {
  test('Should return 200 OK', async () => {
    const sut = makeSut()
    const response = await sut.handle()
    expect(response.statusCode).toBe(200)
    expect(response.body.healthy).toBe(true)
  })
})
