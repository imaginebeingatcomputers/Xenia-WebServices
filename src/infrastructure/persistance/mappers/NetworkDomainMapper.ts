import { Network as NetworkModel } from '../models/NetworkSchema';
import Network from '../../../domain/aggregates/Network';
import { ConsoleLogger, Injectable } from '@nestjs/common';
import IpAddress from 'src/domain/value-objects/IpAddress';
import Sdp from 'src/domain/value-objects/Sdp';


@Injectable()
export default class NetworkDomainMapper {
  constructor(private readonly logger: ConsoleLogger) {}

  public mapToDomainModel(network: NetworkModel): Network {


    return new Network({
      localIpAddress: new IpAddress(network.localIpAddress),
      remoteIpAddress: new IpAddress(network.remoteIpAddress),
      sdp: new Sdp(network.sdp),
    });
  }
}
