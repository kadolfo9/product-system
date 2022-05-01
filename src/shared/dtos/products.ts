export interface ProductInput {
  id?: number
  name: string
  description?: string
  price?: number
  stock: number
}

export interface ProductOutput {
  name: string
  description?: string
  price?: number
  stock: number
}
