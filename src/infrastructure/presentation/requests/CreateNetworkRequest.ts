import { ApiProperty } from '@nestjs/swagger';

export class CreateNetworkRequest {
  @ApiProperty()
  localIpAddress: string;
  @ApiProperty()
  remoteIpAddress: string;
  @ApiProperty()
  sdp: string;
}
