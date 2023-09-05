import {
    IsBoolean,
    IsDate,
    IsNotEmpty,
} from 'class-validator';
import { FromWhom } from '../schemas/fromWhom.schema';
import { ToWhom } from '../schemas/toWhom.schema';


export class CreateNotificationDto {
    @IsNotEmpty()
    fromWhom: FromWhom

    @IsNotEmpty()
    toWhom: ToWhom

    @IsNotEmpty()
    message: Object

    @IsNotEmpty()
    @IsBoolean()
    isReceived: boolean

    @IsNotEmpty()
    @IsDate()
    created_at: Date

    @IsNotEmpty()
    @IsDate()
    updated_at: Date
}