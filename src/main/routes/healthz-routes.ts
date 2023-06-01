import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeHealthzController } from '@/main/factories/controllers/healthz-controller-factory'

export default (router: Router): void => {
  router.get('/healthz', adaptRoute(makeHealthzController()))
}
