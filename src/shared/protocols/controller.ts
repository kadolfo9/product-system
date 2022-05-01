import { Request, Response, RequestHandler } from 'express'

export interface HttpResponse<T = any> {
  statusCode: number
  data: T
}

export interface Controller {
  handle: (request: Request, response?: Response) => Promise<HttpResponse>
}

type Adapter = (controller: Controller) => RequestHandler

export const controllerAdapter: Adapter = controller => async (request: Request, response?: Response): Promise<Response> => {
  try {
    const dispatchController = await controller.handle(request)
    return response.status(200).send(dispatchController)
  } catch (error) {
    if (process.env.NODE_ENV === 'dev') {
      console.log(error)
    }

    return response.status(error.statusCode || 500).send({
      message: error.errorMessage || 'Internal Server Error',
      params: error.params || undefined
    })
  }
}
