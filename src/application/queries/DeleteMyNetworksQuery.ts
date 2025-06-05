import IpAddress from 'src/domain/value-objects/IpAddress';

export class DeleteMyNetworksQuery {
  constructor(public readonly ipAddress: IpAddress) {}
}
