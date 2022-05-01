import { Request } from 'express'
import { Controller, HttpResponse } from '@shared/protocols/controller'
import { CreateProductService } from '@services/create-product'

export class CreateProductController implements Controller {
  constructor (private readonly productCreationService: CreateProductService) { }

  public async handle (request: Request): Promise<HttpResponse> {
    const { name, description, price, stock } = request.body

    const productCreationService = await this.productCreationService.execute({
      name, description, price, stock
    })
    console.log(productCreationService)

    return productCreationService
  }
}
