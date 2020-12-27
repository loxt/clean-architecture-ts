export class RankingUnavailableError extends Error {
  constructor () {
    super('Rankings unavailable')
    this.name = 'RankingUnavailableError'
  }
}
