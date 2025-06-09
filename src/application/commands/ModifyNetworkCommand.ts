import IpAddress from 'src/domain/value-objects/IpAddress';
import MacAddress from 'src/domain/value-objects/MacAddress';
import Sdp from 'src/domain/value-objects/Sdp';

export class ModifyNetworkCommand {
  constructor(
    public readonly localIpAddress: IpAddress,
    public readonly port: number,
    public readonly sdp: Sdp,
  ) {}
}
