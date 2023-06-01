import { HealthzController } from '@/presentation/controllers/healthz/healthz-controller'
import { Controller } from '@/presentation/protocols/controller'

export const makeHealthzController = (): Controller => {
  const controller = new HealthzController()
  return controller
}
