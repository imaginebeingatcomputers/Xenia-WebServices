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
        MacAddress: network.macAddress.value,
      },
      this.networkPersistanceMapper.mapToDataModel(network),
      {
        upsert: true,
        new: true,
      },
    );
  }

  public async findByMacAddress(macAddress: MacAddress): Promise<Network> {
    if (!macAddress) {
      return undefined;
    }

    const network = await this.NetworkModel.findOne({
      macAddress: macAddress.value,
    });

    if (!network) {
      return undefined;
    }

    return this.networkDomainMapper.mapToDomainModel(network);
  }

  public async findByIpAddress(ip: IpAddress): Promise<Network> {
    const network = await this.NetworkModel.findOne({
      ipAddress: ip.value,
    });

    if (!network) {
      return undefined;
    }

    return this.networkDomainMapper.mapToDomainModel(network);
  }

  public async findBySdp(sdp: Sdp): Promise<Network> {
    const network = await this.NetworkModel.findOne({
      sdp: sdp.value,
    });

    return this.networkDomainMapper.mapToDomainModel(network);
  }

  public async DeleteAllMyNetworksByAddress(ip: IpAddress): Promise<Network[]> {
    const network_docs = await this.NetworkModel.find({
      hostAddress: ip.value,
    });
  
    const networks: Network[] = network_docs.map((document) => {
      return this.networkDomainMapper.mapToDomainModel(document);
    });
  
    await this.NetworkModel.deleteMany({
      hostAddress: ip.value,
    });
  
    return networks;
  }
}

