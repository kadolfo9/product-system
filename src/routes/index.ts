import { CreateProductController } from '@controllers/create-product'
import { ListProductController } from '@controllers/list-products'
import { controllerAdapter } from '@shared/protocols/controller'
import { Router } from 'express'
import { CreateProductService } from '@services/create-product'

export const Routes = Router()
const createProductService = new CreateProductService()

Routes.get('/products', controllerAdapter(new ListProductController()))
Routes.post('/products', controllerAdapter(new CreateProductController(createProductService)))
