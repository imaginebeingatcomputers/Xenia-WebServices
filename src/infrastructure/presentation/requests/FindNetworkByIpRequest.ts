import { ApiProperty } from '@nestjs/swagger';

export class FindNetworkByIpRequest {
  @ApiProperty()
  localIpAddress: string;
  port: number;
}
