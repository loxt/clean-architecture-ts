import { LastRankingLoader } from '@/domain/usecases'
import { LoadLastRankingRepository } from '@/data/contracts'
import { RankingScore } from '@/domain/entities'
import { RankingUnavailableError } from '@/domain/errors/ranking-unavailable'

export class LastRankingLoaderService implements LastRankingLoader {
  constructor (private readonly loadLastRankingRepository: LoadLastRankingRepository) {}

  async load (): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankingUnavailableError()
    }
    return this.loadLastRankingRepository.loadLastRanking()
  }
}
