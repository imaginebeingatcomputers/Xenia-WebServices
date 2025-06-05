import { Inject } from '@nestjs/common';
import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import Network from 'src/domain/aggregates/Network';
import INetworkRepository, {
  INetworkRepositorySymbol,
} from 'src/domain/repositories/INetworkRepository';
import { CreateNetworkCommand } from '../commands/CreateNetworkCommand';

@CommandHandler(CreateNetworkCommand)
export class CreateNetworkCommandHandler
  implements ICommandHandler<CreateNetworkCommand>
{
  constructor(
    @Inject(INetworkRepositorySymbol)
    private repository: INetworkRepository,
  ) {}

  async execute(command: CreateNetworkCommand) {
    const network = Network.create({
      localIpAddress: command.localIpAddress,
      remoteIpAddress: command.remoteIpAddress,
      sdp: command.sdp,
    });

    await this.repository.save(network);

    return network;
  }
}
