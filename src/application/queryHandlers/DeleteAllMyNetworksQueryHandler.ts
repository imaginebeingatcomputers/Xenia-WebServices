import { Inject } from '@nestjs/common';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import INetworkRepository, {
  INetworkRepositorySymbol,
} from 'src/domain/repositories/INetworkRepository';
import { DeleteMyNetworksQuery } from '../queries/DeleteMyNetworksQuery';

@QueryHandler(DeleteMyNetworksQuery)
export class DeleteMyNetworksQueryHandler
  implements IQueryHandler<DeleteMyNetworksQuery>
{
  constructor(
    @Inject(INetworkRepositorySymbol)
    private repository: INetworkRepository,
  ) {}

  async execute(query: DeleteMyNetworksQuery) {
    return this.repository.DeleteAllMyNetworksByAddress(query.ipAddress);
  }
}
