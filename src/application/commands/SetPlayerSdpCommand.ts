import Sdp from 'src/domain/value-objects/Sdp';
import Xuid from 'src/domain/value-objects/Xuid';

export class SetPlayerSdpCommand {
  constructor(
    public readonly xuid: Xuid,
    public readonly sdp: Sdp,
  ) {}
}
