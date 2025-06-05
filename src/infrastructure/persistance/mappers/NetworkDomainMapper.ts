import { Network as NetworkModel } from '../models/NetworkSchema';
import Network from '../../../domain/aggregates/Network';
import { ConsoleLogger, Injectable } from '@nestjs/common';
import IpAddress from 'src/domain/value-objects/IpAddress';
import MacAddress from 'src/domain/value-objects/MacAddress';
import Sdp from 'src/domain/value-objects/Sdp';


@Injectable()
export default class NetworkDomainMapper {
  constructor(private readonly logger: ConsoleLogger) {}

  public mapToDomainModel(network: NetworkModel): Network {


    return new Network({
      ipAddress: new IpAddress(network.ipAddress),
      macAddress: new MacAddress(network.macAddress),
      sdp: new Sdp(network.sdp),
    });
  }
}
