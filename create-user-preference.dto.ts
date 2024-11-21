import { IsBoolean, IsEmail, IsNotEmpty, IsString, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class Channels {
  @IsBoolean()
  email: boolean;

  @IsBoolean()
  sms: boolean;

  @IsBoolean()
  push: boolean;
}

class Preferences {
  @IsBoolean()
  marketing: boolean;

  @IsBoolean()
  newsletter: boolean;

  @IsBoolean()
  updates: boolean;

  @IsEnum(['daily', 'weekly', 'monthly', 'never'])
  frequency: 'daily' | 'weekly' | 'monthly' | 'never';

  @ValidateNested()
  @Type(() => Channels)
  channels: Channels;
}

export class CreateUserPreferenceDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ValidateNested()
  @Type(() => Preferences)
  preferences: Preferences;

  @IsNotEmpty()
  @IsString()
  timezone: string;
}
