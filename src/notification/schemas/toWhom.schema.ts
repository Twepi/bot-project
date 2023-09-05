import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';

export type ToWhomDocument = HydratedDocument<ToWhom>

@Schema()
export class ToWhom {
    @Prop()
    fromID: mongoose.Schema.Types.ObjectId

    @Prop()
    type: string
}

export const ToWhomSchema = SchemaFactory.createForClass(ToWhom);