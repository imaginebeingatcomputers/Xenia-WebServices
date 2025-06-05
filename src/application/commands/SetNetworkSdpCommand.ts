import IpAddress from 'src/domain/value-objects/IpAddress';
import Sdp from 'src/domain/value-objects/Sdp';

export class SetNetworkSdpCommand {
  constructor(
    public readonly ipAddress: IpAddress,
    public readonly sdp: Sdp,
  ) {}
}
