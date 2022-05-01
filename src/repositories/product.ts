import { ProductInput } from '@shared/dtos/products'
import { prismaClient } from '@database/index'

export const get = async (id: number): Promise<any> => {
  const product = await prismaClient.product.findFirst({
    where: {
      id: id
    }
  })

  return product
}

export const insert = async (product: ProductInput): Promise<any> => {
  const { name, stock, description, price } = product

  const productData = await prismaClient.product.create({
    data: { name, stock, description, price }
  })
  return productData
}

export const getAll = async (): Promise<any> => {
  const products = await prismaClient.product.findMany()
  return products
}
