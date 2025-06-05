import { Inject } from '@nestjs/common';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import INetworkRepository, {
  INetworkRepositorySymbol,
} from 'src/domain/repositories/INetworkRepository';
import { DeleteAllMyNetworksQuery } from '../queries/DeleteAllMyNetworksQuery';

@QueryHandler(DeleteAllMyNetworksQuery)
export class DeleteAllMyNetworksQueryHandler
  implements IQueryHandler<DeleteAllMyNetworksQuery>
{
  constructor(
    @Inject(INetworkRepositorySymbol)
    private repository: INetworkRepository,
  ) {}

  async execute(query: DeleteAllMyNetworksQuery) {
    return this.repository.DeleteAllMyNetworksByAddress(query.ipAddress);
  }
}
