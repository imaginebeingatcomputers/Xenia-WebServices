import IpAddress from '../value-objects/IpAddress';
import Sdp from '../value-objects/Sdp'

interface NetworkProps {
  localIpAddress: IpAddress;
  remoteIpAddress: IpAddress;
  sdp: Sdp;
}

interface CreateProps {
  localIpAddress: IpAddress;
  remoteIpAddress: IpAddress;
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
    this.props.remoteIpAddress = this.remoteIpAddress;
  }

  public setSDP(sdp: Sdp) {
    this.props.sdp = sdp
  }

  get localIpAddress() {
    return this.props.localIpAddress;
  }

  get remoteIpAddress() {
    return this.props.remoteIpAddress;
  }

  get sdp() {
    return this.props.sdp;
  }

}
