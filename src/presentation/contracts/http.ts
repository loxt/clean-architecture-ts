export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export const rejected = (err: Error): HttpResponse => ({
  statusCode: 500,
  data: err.stack
})

export const resolved = (data: any): HttpResponse => ({
  statusCode: 200,
  data
})
