import { Inject } from '@nestjs/common';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import INetworkRepository, {
  INetworkRepositorySymbol,
} from 'src/domain/repositories/INetworkRepository';
import { GetNetworkByIpQuery } from '../queries/GetNetworkByIpQuery';

@QueryHandler(GetNetworkByIpQuery)
export class GetNetworkByIpQueryHandler implements IQueryHandler<GetNetworkByIpQuery> {
  constructor(
    @Inject(INetworkRepositorySymbol)
    private repository: INetworkRepository,
  ) {}

  async execute(query: GetNetworkByIpQuery) {
    return this.repository.findByIpAddress(query.localIpAddress, query.remoteIpAddress);
  }
}
