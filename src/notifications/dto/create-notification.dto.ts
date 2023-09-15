import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';
import { FromWhom, ToWhom } from '../entities/notification.schema';


export class CreateNotificationDto {
  @IsNotEmpty()
  fromWhom: FromWhom;

  @IsNotEmpty()
  toWhom: ToWhom;

  @IsNotEmpty()
  message: object;

  @IsNotEmpty()
  @IsBoolean()
  isReceived: boolean;

  @IsNotEmpty()
  @IsDate()
  created_at: Date;

  @IsNotEmpty()
  @IsDate()
  updated_at: Date;
}
