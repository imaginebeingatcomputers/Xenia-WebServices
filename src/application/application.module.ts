import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Session,
  SessionSchema,
} from 'src/infrastructure/persistance/models/SessionSchema';
import { PersistanceModule } from 'src/infrastructure/persistance/persistance.module';
import { CreatePlayerCommandHandler } from './commandHandlers/CreatePlayerCommandHandler';
import { CreateSessionCommandHandler } from './commandHandlers/CreateSessionCommandHandler';
import { AddSessionContextCommandHandler } from './commandHandlers/AddSessionContextCommandHandler';
import { AddSessionPropertyCommandHandler } from './commandHandlers/AddSessionPropertyCommandHandler';
import {
  DeleteSessionCommandHandler,
  DeleteSessionsCommandHandler,
} from './commandHandlers/DeleteSessionCommandHandler';
import { JoinSessionCommandHandler } from './commandHandlers/JoinSessionCommandHandler';
import { LeaveSessionCommandHandler } from './commandHandlers/LeaveSessionCommandHandler';
import { MigrateSessionCommandHandler } from './commandHandlers/MigrateSessionCommandHandler';
import { ModifySessionCommandHandler } from './commandHandlers/ModifySessionCommandHandler';
import { SetPlayerSessionIdCommandHandler } from './commandHandlers/SetPlayerSessionIdCommandHandler';
import { SetPlayerSdpCommandHandler } from './commandHandlers/SetPlayerSdpCommandHandler';
import { UpdateLeaderboardCommandHandler } from './commandHandlers/UpdateLeaderboardCommandHandler';
import { FindLeaderboardsQueryHandler } from './queryHandlers/FindLeaderboardsQueryHandler';
import { FindPlayerQueryHandler } from './queryHandlers/FindPlayerQueryHandler';
import { FindPlayerSessionQueryHandler } from './queryHandlers/FindPlayerSessionQueryHandler';
import { GetPlayerQueryHandler } from './queryHandlers/GetPlayerQueryHandler';
import { GetSessionsQueryHandler } from './queryHandlers/GetSessionQueryHandler';
import { SessionSearchQueryHandler } from './queryHandlers/SessionSearchQueryHandler';
import { AggregateSessionCommandHandler } from './commandHandlers/AggregateSessionCommandHandler';
import { ProcessClientAddressCommandHandler } from './commandHandlers/ProcessClientAddressCommandHandler';
import { GetPlayersQueryHandler } from './queryHandlers/GetPlayersQueryHandler';
import { UpdatePlayerCommandHandler } from './commandHandlers/UpdatePlayerCommandHandler';
import { GetPlayerGamertagQueryHandler } from './queryHandlers/GetPlayerGamertagQueryHandle';
import { XStorageUploadCommandHandler } from './commandHandlers/XStorageUploadCommandHandler';
import { XStorageDownloadCommandHandler } from './commandHandlers/XStorageDownloadCommandHandler';
import { XStorageDeleteCommandHandler } from './commandHandlers/XStorageDeleteCommandHandler';
import { XStorageBuildServerPathCommandHandler } from './commandHandlers/XStorageBuildServerPathCommandHandler';
import { GetTitleSessionsQueryHandler } from './queryHandlers/GetTitleSessionsQueryHandler';
import { DeleteMyProfilesQueryHandler } from './queryHandlers/DeleteAllMyProfilesQueryHandler';
import { CreateNetworkCommandHandler } from './commandHandlers/CreateNetworkCommandHandler';
import { ModifyNetworkCommandHandler } from './commandHandlers/ModifyNetworkCommandHandler';
import { GetNetworkByIpQueryHandler } from './queryHandlers/GetNetworkByIpQueryHandler';
import { DeleteAllMyNetworksQueryHandler } from './queryHandlers/DeleteAllMyNetworksQueryHandler';

export const queryHandlers = [
  GetSessionsQueryHandler,
  SessionSearchQueryHandler,
  FindPlayerQueryHandler,
  FindPlayerSessionQueryHandler,
  GetPlayerQueryHandler,
  GetPlayersQueryHandler,
  UpdatePlayerCommandHandler,
  FindLeaderboardsQueryHandler,
  GetPlayerGamertagQueryHandler,
  XStorageDeleteCommandHandler,
  XStorageUploadCommandHandler,
  XStorageDownloadCommandHandler,
  XStorageBuildServerPathCommandHandler,
  GetTitleSessionsQueryHandler,
  DeleteMyProfilesQueryHandler,
  DeleteAllMyNetworksQueryHandler,
  GetNetworkByIpQueryHandler,
];

export const commandHandlers = [
  CreateSessionCommandHandler,
  ModifySessionCommandHandler,
  JoinSessionCommandHandler,
  LeaveSessionCommandHandler,
  CreatePlayerCommandHandler,
  DeleteSessionCommandHandler,
  DeleteSessionsCommandHandler,
  SetPlayerSessionIdCommandHandler,
  SetPlayerSdpCommandHandler,
  UpdateLeaderboardCommandHandler,
  MigrateSessionCommandHandler,
  AddSessionContextCommandHandler,
  AddSessionPropertyCommandHandler,
  AggregateSessionCommandHandler,
  ProcessClientAddressCommandHandler,
  CreateNetworkCommandHandler,
  ModifyNetworkCommandHandler,
];

@Module({
  imports: [
    CqrsModule,
    PersistanceModule,
    MongooseModule.forFeature([{ name: Session.name, schema: SessionSchema }]),
  ],
  providers: [...queryHandlers, ...commandHandlers],
})
export class ApplicationModule {}
