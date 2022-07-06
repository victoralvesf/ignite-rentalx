import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import { resolve } from 'path'

const swaggerDocument = YAML.load(resolve(__dirname, '..', 'swagger.yaml'))

const swaggerRoutes = Router()

swaggerRoutes.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export { swaggerRoutes }
