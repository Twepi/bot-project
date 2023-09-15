import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type NotificationDocument = HydratedDocument<Notification>;

export class FromWhom {
  profileId: mongoose.Schema.Types.ObjectId;
  type: string;
}

export class ToWhom {
  fromId: mongoose.Schema.Types.ObjectId;
  type: string;
}

@Schema()
export class Notification {
  @Prop({ type: FromWhom })
  fromWhom: FromWhom;

  @Prop({ type: ToWhom })
  toWhom: ToWhom;

  @Prop({ type: Object })
  message: object;

  @Prop()
  isReceived: boolean;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
