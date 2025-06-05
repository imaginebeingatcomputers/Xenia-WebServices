import IpAddress from 'src/domain/value-objects/IpAddress';

export class DeleteAllMyNetworksQuery {
  constructor(public readonly ipAddress: IpAddress) {}
}
