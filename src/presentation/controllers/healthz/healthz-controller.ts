import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import * as HttpHelpers from '@/presentation/helpers/http-helper'

export class HealthzController implements Controller {
  async handle (): Promise<HttpResponse> {
    try {
      return HttpHelpers.ok({
        healthy: true
      })
    } catch (error) {
      return HttpHelpers.serverError()
    }
  }
}
