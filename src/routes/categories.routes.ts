import { Router } from 'express'

import { importCategoriesMiddleware } from '../modules/cars/middlewares/ImportCategoriesMiddleware'

import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'
import { importCategoryController } from '../modules/cars/useCases/importCategory'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response))

categoriesRoutes.get('/', (request, response) => listCategoriesController.handle(request, response))

categoriesRoutes.post('/import', importCategoriesMiddleware, (request, response) => importCategoryController.handle(request, response))

export { categoriesRoutes }
