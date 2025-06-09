import { ApiProperty } from '@nestjs/swagger';

export class CreateNetworkRequest {
  @ApiProperty()
  localIpAddress: string;
  @ApiProperty()
  port: number;
  @ApiProperty()
  sdp: string;
}
