import IpAddress from '../value-objects/IpAddress';
import Sdp from '../value-objects/Sdp'

interface NetworkProps {
  localIpAddress: IpAddress;
  port: number;
  sdp: Sdp;
}

interface CreateProps {
  localIpAddress: IpAddress;
  port: number;
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
    this.props.localIpAddress = this.localIpAddress;
    this.props.port = this.port;
  }

  public setSDP(sdp: Sdp) {
    this.props.sdp = sdp
  }

  get localIpAddress() {
    return this.props.localIpAddress;
  }

  get port() {
    return this.props.port;
  }

  get sdp() {
    return this.props.sdp;
  }

}
