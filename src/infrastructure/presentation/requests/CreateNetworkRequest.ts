import { ApiProperty } from '@nestjs/swagger';

export class CreateNetworkRequest {
  @ApiProperty()
  ipAddress: string;
  @ApiProperty()
  sdp: string;
  @ApiProperty()
  macAddress: string;
}
