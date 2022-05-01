import { ProductInput } from '@shared/dtos/products'
import * as ProductRepository from '@repositories/product'
import { validateProductCreation } from '@shared/validations/product'

export class CreateProductService {
  public async execute (creationData: ProductInput): Promise<any> {
    // const { name, description, price, stock } = creationData

    await validateProductCreation({ ...creationData }).then(() => {
      const product = ProductRepository.insert(creationData)
      return {
        statusCode: 200,
        data: product
      }
    })
  }
}
