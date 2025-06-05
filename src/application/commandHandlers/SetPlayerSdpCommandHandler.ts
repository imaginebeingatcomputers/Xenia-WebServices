import { Inject } from '@nestjs/common';
import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import IPlayerRepository, {
  IPlayerRepositorySymbol,
} from 'src/domain/repositories/IPlayerRepository';
import { SetPlayerSdpCommand } from '../commands/SetPlayerSdpCommand';

@CommandHandler(SetPlayerSdpCommand)
export class SetPlayerSdpCommandHandler
  implements ICommandHandler<SetPlayerSdpCommand>
{
  constructor(
    @Inject(IPlayerRepositorySymbol)
    private repository: IPlayerRepository,
  ) {}

  async execute(command: SetPlayerSdpCommand) {
    const player = await this.repository.findByXuid(command.xuid);

    if (!player) {
      return undefined;
    }

    player.setSDP(command.sdp);
    await this.repository.save(player);
  }
}
