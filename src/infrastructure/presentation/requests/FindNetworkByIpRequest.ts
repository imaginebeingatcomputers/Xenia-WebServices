import { ApiProperty } from '@nestjs/swagger';

export class FindNetworkByIpRequest {
  @ApiProperty()
  localIpAddress: string;
  remoteIpAddress: string;
}
