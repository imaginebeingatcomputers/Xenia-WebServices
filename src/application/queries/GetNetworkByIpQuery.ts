import IpAddress from 'src/domain/value-objects/IpAddress';

export class GetNetworkByIpQuery {
  constructor(
    public readonly ipAddress: IpAddress,
  ) {}
}
