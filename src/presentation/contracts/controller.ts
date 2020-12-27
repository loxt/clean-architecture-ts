import { HttpResponse } from '@/presentation/contracts/http'

export interface Controller {
  handle: () => Promise<HttpResponse>
}
