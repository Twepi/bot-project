import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { Notification } from "./schemas/notification.schema";

@Injectable()
export class NotificationService {
    constructor(@InjectModel(Notification.name) private notificationModel: Model<Notification>) {}

    async create(createNotificationDto: CreateNotificationDto): Promise<Notification> {
        const newNotification = new this.notificationModel(createNotificationDto)
        return newNotification.save()
    }

    async findAll(): Promise<Notification[]> {
        return this.notificationModel.find().exec()
    }
}