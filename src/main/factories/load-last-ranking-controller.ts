import { Controller } from '@/presentation/contracts'
import { FakeRankingRepository } from '@/infra/repositories'
import { LastRankingLoaderService } from '@/data/services'
import { LoadLastRankingController } from '@/presentation/controllers'

export const makeLoadLastRankingController = (): Controller => {
  const repo = new FakeRankingRepository()
  const loader = new LastRankingLoaderService(repo)
  return new LoadLastRankingController(loader)
}
