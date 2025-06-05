import { Injectable } from '@nestjs/common';
import Network from '../../../domain/aggregates/Network';
import { Network as NetworkModel } from '../models/NetworkSchema';

@Injectable()
export default class NetworkPersistanceMapper {
  public mapToDataModel(network: Network): NetworkModel {
    return {
      ipAddress: network.ipAddress.value,
      macAddress: network.macAddress.value,
      sdp: network.sdp.value,
    };
  }
}
