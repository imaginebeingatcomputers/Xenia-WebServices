import IpAddress from '../value-objects/IpAddress';
import MacAddress from '../value-objects/MacAddress';
import Sdp from '../value-objects/Sdp'

interface NetworkProps {
  ipAddress: IpAddress;
  macAddress: MacAddress;
  sdp: Sdp;
}

interface CreateProps {
  ipAddress: IpAddress;
  macAddress: MacAddress;
  sdp: Sdp;
}

export default class Network {
  private readonly props: NetworkProps;

  public constructor(props: NetworkProps) {
    this.props = props;
  }

  public static create(props: CreateProps) {
    return new Network({
      ...props,
    });
  }

  public updateNetwork(props: NetworkProps) {
    this.props.ipAddress = this.ipAddress;
    this.props.macAddress = this.macAddress;
    this.props.sdp = this.sdp;
  }

  public setSDP(sdp: Sdp) {
    this.props.sdp = sdp
  }

  get ipAddress() {
    return this.props.ipAddress;
  }

  get macAddress() {
    return this.props.macAddress;
  }

  get sdp() {
    return this.props.sdp;
  }

}
