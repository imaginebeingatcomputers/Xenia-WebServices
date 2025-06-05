import { Inject } from '@nestjs/common';
import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import INetworkRepository, {
  INetworkRepositorySymbol,
} from 'src/domain/repositories/INetworkRepository';
import { ModifyNetworkCommand } from '../commands/ModifyNetworkCommand';

@CommandHandler(ModifyNetworkCommand)
export class ModifyNetworkCommandHandler
  implements ICommandHandler<ModifyNetworkCommand>
{
  constructor(
    @Inject(INetworkRepositorySymbol)
    private repository: INetworkRepository,
  ) {}

  async execute(command: ModifyNetworkCommand) {
    const network = await this.repository.findByIpAddress(
      command.ipAddress
    );

    if (!network) {
      return undefined;
    }

    network.updateNetwork({
      ipAddress: command.ipAddress,
      macAddress: command.macAddress,
      sdp: command.sdp,
    });

    await this.repository.save(network);

    return network;
  }
}
