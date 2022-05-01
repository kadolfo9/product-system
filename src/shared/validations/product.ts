import { ProductInput } from '@shared/dtos/products'
import { BadRequestException } from '@shared/exceptions/BadRequestException'
import * as yup from 'yup'

export const validateProductCreation = async (input: ProductInput): Promise<void> => {
  try {
    const schema = yup.object({
      name: yup.string()
        .required('Campo \'nome\' é obrigatório.')
        .min(1, 'Minimo de 1 caractere.')
        .max(255, 'Maximo de 255 caracteres.'),

      description: yup.string()
        .optional(),

      price: yup.number()
        .optional(),

      stock: yup.number()
        .positive('O número precisa ser positivo.')
    })

    await schema.validate(input)
  } catch (error) {
    throw new BadRequestException(error.message, {
      [error.path]: error.message
    })
  }
}
