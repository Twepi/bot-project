import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Notification, NotificationSchema } from "./schemas/notification.schema";
import { ToWhom, ToWhomSchema } from "./schemas/toWhom.schema";
import { FromWhom, FromWhomSchema } from "./schemas/fromWhom.schema";
import { NotificationService } from "./notification.service";
import { NotificationController } from "./notification.controller";


@Module({
    imports: [MongooseModule.forFeature([
        {
            name: Notification.name,
            schema: NotificationSchema
        },
        {
            name: ToWhom.name,
            schema: ToWhomSchema
        },
        {
            name: FromWhom.name,
            schema: FromWhomSchema
        }
    ])],

    controllers: [NotificationController],

    providers: [NotificationService],

    exports: [NotificationService]
})
export class NotificationModule{}