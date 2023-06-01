import 'module-alias/register'
import env from './config/env'

const bootstrap = async (): Promise<void> => {
  const app = (await import('./config/app')).default
  app.listen(env.port, () => console.log(`Server running at port ${env.port}`))
}

bootstrap()
