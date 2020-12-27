import { Controller, HttpResponse, rejected, resolved } from '@/presentation/contracts'
import { RankingScoreViewModel } from '@/presentation/view-models'
import { LastRankingLoader } from '@/domain/usecases'

export class LoadLastRankingController implements Controller {
  constructor (private readonly lastRankingLoader: LastRankingLoader) {}

  async handle (): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.load()

      return Promise.resolve(resolved(RankingScoreViewModel.mapCollection(ranking)))
    } catch (err) {
      return rejected(err)
    }
  }
}
