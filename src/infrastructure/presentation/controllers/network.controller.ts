import {
    Controller,
    Post,
    Body,
    NotFoundException,
    ConsoleLogger,
    Get,
  } from '@nestjs/common';
  import { CommandBus, QueryBus } from '@nestjs/cqrs';
  import { ApiTags } from '@nestjs/swagger';
  import { CreateNetworkCommand } from 'src/application/commands/CreateNetworkCommand';
  import { CreateNetworkRequest } from '../requests/CreateNetworkRequest';
  import Sdp from 'src/domain/value-objects/Sdp';
  import IpAddress from 'src/domain/value-objects/IpAddress';
  import MacAddress from 'src/domain/value-objects/MacAddress';
  import { NetworkResponse } from '../responses/NetworkResponse';
  import Network from 'src/domain/aggregates/Network';
  import _ from 'lodash';
  import { GetNetworkByIpQuery } from 'src/application/queries/GetNetworkByIpQuery';
  import { ProcessClientAddressCommand } from 'src/application/commands/ProcessClientAddressCommand';
  import { RealIP } from 'nestjs-real-ip';
  import { DeleteMyNetworksQuery } from 'src/application/queries/DeleteMyNetworksQuery';
  import { ModifyNetworkCommand } from 'src/application/commands/ModifyNetworkCommand';
  import { ModifyNetworkRequest } from 'src/infrastructure/presentation/requests/ModifyNetworkRequest';
  import { FindNetworkByIpRequest } from 'src/infrastructure/presentation/requests/FindNetworkByIpRequest';

  
  @ApiTags('Network')
  @Controller('/networks')
  @Controller()
  export class NetworkController {
    constructor(
      private readonly logger: ConsoleLogger,
      private readonly queryBus: QueryBus,
      private readonly commandBus: CommandBus,
    ) {
      this.logger.setContext(NetworkController.name);
    }
  
    @Post()
    async createNetwork(@Body() request: CreateNetworkRequest) {
        await this.commandBus.execute(
        new CreateNetworkCommand(
          new IpAddress(request.localIpAddress),
          new IpAddress(request.remoteIpAddress),
          new Sdp(request.sdp),        
          ),
      );
    }
  
    @Post('/find')
    async findNetwork(
      @Body() request: FindNetworkByIpRequest,
    ): Promise<NetworkResponse> {
  
      const network = await this.queryBus.execute(
        new GetNetworkByIpQuery(new IpAddress(request.localIpAddress), new IpAddress(request.remoteIpAddress)),
      );
  
      if (!network) {
        throw new NotFoundException('Network not found.');
      }
  
      return {
        localIpAddress: network.localIpAddress.value,
        remoteIpAddress: network.remoteIpAddress.value,
        sdp: network.sdp.value,
      };
    }
  
    @Post('/setsdp')
    async modifyNetwork(
      @Body() request: ModifyNetworkRequest,
    ) {
      const network = await this.commandBus.execute(
        new ModifyNetworkCommand(
          new IpAddress(request.localIpAddress),
          new IpAddress(request.remoteIpAddress),
          new Sdp(request.sdp),
        ),
      );
  
      if (!network) {
        throw new NotFoundException(
          `Failed to modify network ${IpAddress} was not found.`,
        );
      }
    }
  
    @Get('/deletemynetworks')
    async DeleteAllMyNetworks(@RealIP() ip: string) {
      const ipv4 = await this.commandBus.execute(
        new ProcessClientAddressCommand(ip),
      );
  
      const networks: Network[] = await this.queryBus.execute(
        new DeleteMyNetworksQuery(new IpAddress(ipv4)),
      );
  
      const deleted_networks: Array<[string, string, string]> = [];
  
      for (const network of networks) {
        deleted_networks.push([network.localIpAddress.value, network.remoteIpAddress.value, network.sdp.value]);
      }
  
      return deleted_networks;
    }
  }
  