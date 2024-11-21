import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PreferencesService } from './preferences.service';
import { PreferencesController } from './preferences.controller';
import { UserPreference, UserPreferenceSchema } from './schemas/user-preference.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserPreference.name, schema: UserPreferenceSchema }]),
  ],
  controllers: [PreferencesController],
  providers: [PreferencesService],
})
export class PreferencesModule {}
