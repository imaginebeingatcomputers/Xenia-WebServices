import Network from '../aggregates/Network';
import IpAddress from '../value-objects/IpAddress';
import Sdp from '../value-objects/Sdp'

export default interface INetworkRepository {
  findByIpAddress: (hostAddress: IpAddress) => Promise<Network | undefined>;
  findBySdp: (sdp: Sdp) => Promise<Network | undefined>;
  save: (network: Network) => Promise<void>;
  DeleteAllMyNetworksByAddress: (ipAddress: IpAddress) => Promise<Network[]>;
}

export const INetworkRepositorySymbol = Symbol('INetworkRepository');
