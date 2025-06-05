import IpAddress from 'src/domain/value-objects/IpAddress';
import MacAddress from 'src/domain/value-objects/MacAddress';
import Sdp from 'src/domain/value-objects/Sdp';


export class CreateNetworkCommand {
  constructor(
    public readonly ipAddress: IpAddress,
    public readonly macAddress: MacAddress,
    public readonly sdp: Sdp,
  ) {}
}
