import Network from '../aggregates/Network';
import IpAddress from '../value-objects/IpAddress';
import Sdp from '../value-objects/Sdp'

export default interface INetworkRepository {
  findByIpAddress: (localIpAddress: IpAddress, remoteIpAddress: IpAddress) => Promise<Network | undefined>;
  save: (network: Network) => Promise<void>;
  DeleteAllMyNetworksByAddress: (localIpAddress: IpAddress) => Promise<Network[]>;
}

export const INetworkRepositorySymbol = Symbol('INetworkRepository');
