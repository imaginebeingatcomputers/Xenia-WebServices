import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NetworkDocument = Network & Document;

@Schema()
export class Network {
  @Prop({ required: true })
  localIpAddress: string;
  @Prop({ number: true })
  port: number;
  @Prop()
  sdp?: string;
}

export const NetworkSchema = SchemaFactory.createForClass(Network);

NetworkSchema.index({ localIpAddress: 1, port: 1, sdp: 1 }, { unique: true });
