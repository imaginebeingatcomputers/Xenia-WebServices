import IpAddress from 'src/domain/value-objects/IpAddress';
import Sdp from 'src/domain/value-objects/Sdp';


export class CreateNetworkCommand {
  constructor(
    public readonly localIpAddress: IpAddress,
    public readonly remoteIpAddress: IpAddress,
    public readonly sdp: Sdp,
  ) {}
}
