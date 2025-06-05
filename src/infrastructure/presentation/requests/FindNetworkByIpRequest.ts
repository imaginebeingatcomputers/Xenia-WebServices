import { ApiProperty } from '@nestjs/swagger';

export class FindNetworkByIpRequest {
  @ApiProperty()
  ipAddress: string;
}
