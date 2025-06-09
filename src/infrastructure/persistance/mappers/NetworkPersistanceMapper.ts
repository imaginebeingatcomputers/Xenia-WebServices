import { Injectable } from '@nestjs/common';
import Network from '../../../domain/aggregates/Network';
import { Network as NetworkModel } from '../models/NetworkSchema';

@Injectable()
export default class NetworkPersistanceMapper {
  public mapToDataModel(network: Network): NetworkModel {
    return {
      localIpAddress: network.localIpAddress.value,
      port: network.port,
      sdp: network.sdp.value,
    };
  }
}
