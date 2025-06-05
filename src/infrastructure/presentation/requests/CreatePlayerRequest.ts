import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerRequest {
  @ApiProperty()
  xuid: string;
  @ApiProperty()
  gamertag: string;
  @ApiProperty()
  machineId: string;
  @ApiProperty()
  hostAddress: string;
  @ApiProperty()
  sdp: string;
  @ApiProperty()
  macAddress: string;
}
