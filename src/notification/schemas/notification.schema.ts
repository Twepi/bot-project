import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';
import { FromWhom } from "./fromWhom.schema";
import { ToWhom } from "./toWhom.schema";
import * as mongoose from 'mongoose';

export type NotificationDocument = HydratedDocument<Notification>

@Schema()
export class Notification {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'FromWhom' })
    fromWhom: FromWhom

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ToWhom' })
    toWhom: ToWhom

    @Prop({ type: Object })
    message: Object

    @Prop()
    isReceived: boolean

    @Prop()
    created_at: Date

    @Prop()
    updated_at: Date
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);