import { Model } from 'mongoose';
import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import INetworkRepository from 'src/domain/repositories/INetworkRepository';
import Network from 'src/domain/aggregates/Network';
import NetworkDomainMapper from '../mappers/NetworkDomainMapper';
import NetworkPersistanceMapper from '../mappers/NetworkPersistanceMapper';
import { NetworkDocument } from '../models/NetworkSchema';
import IpAddress from 'src/domain/value-objects/IpAddress';
import MacAddress from 'src/domain/value-objects/MacAddress';
import Sdp from 'src/domain/value-objects/Sdp';

@Injectable()
export default class NetworkRepository implements INetworkRepository {
  constructor(
    private readonly logger: ConsoleLogger,
    @InjectModel(Network.name)
    private NetworkModel: Model<NetworkDocument>,
    private readonly networkDomainMapper: NetworkDomainMapper,
    private readonly networkPersistanceMapper: NetworkPersistanceMapper,
  ) {
    this.logger.setContext(NetworkRepository.name);
  }

  public async save(network: Network) {
    await this.NetworkModel.findOneAndUpdate(
      {
        localIpAddress: network.localIpAddress.value,
        remoteIpAddress: network.remoteIpAddress.value,
        sdp: network.sdp.value,
      },
      this.networkPersistanceMapper.mapToDataModel(network),
      {
        upsert: true,
        new: true,
      },
    );
  }

  public async findByIpAddress(localIpAddress: IpAddress, remoteIpAddress: IpAddress): Promise<Network> {
    const network = await this.NetworkModel.findOne({
      localIpAddress: localIpAddress.value,
      remoteIpAddress: remoteIpAddress.value,
    });

    if (!network) {
      return undefined;
    }

    return this.networkDomainMapper.mapToDomainModel(network);
  }

  public async DeleteAllMyNetworksByAddress(ip: IpAddress): Promise<Network[]> {
    const network_docs = await this.NetworkModel.find({
      localIpAddress: ip.value,
    });
  
    const networks: Network[] = network_docs.map((document) => {
      return this.networkDomainMapper.mapToDomainModel(document);
    });
  
    await this.NetworkModel.deleteMany({
      localIpAddress: ip.value,
    });
  
    return networks;
  }
}

