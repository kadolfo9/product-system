import { Controller, HttpResponse } from '@shared/protocols/controller'
import { Request } from 'express'
import * as ProductRepository from '@repositories/product'

export class ListProductController implements Controller {
  public async handle (request: Request): Promise<HttpResponse> {
    return {
      statusCode: 200,
      data: await ProductRepository.getAll()
    }
  }
}
