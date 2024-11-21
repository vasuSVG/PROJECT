import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference, UserPreferenceDocument } from './schemas/user-preference.schema';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';

@Injectable()
export class PreferencesService {
  constructor(
    @InjectModel(UserPreference.name) private readonly userPreferenceModel: Model<UserPreferenceDocument>,
  ) {}

  async create(createUserPreferenceDto: CreateUserPreferenceDto): Promise<UserPreference> {
    const newPreference = new this.userPreferenceModel(createUserPreferenceDto);
    return newPreference.save();
  }
}
