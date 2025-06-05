import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NetworkDocument = Network & Document;

@Schema()
export class Network {
  @Prop({ required: true })
  ipAddress: string;
  @Prop({ required: true })
  macAddress: string;
  @Prop()
  sdp?: string;
}

export const NetworkSchema = SchemaFactory.createForClass(Network);
