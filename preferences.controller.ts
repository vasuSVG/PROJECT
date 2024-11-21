import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { PreferencesService } from './preferences.service';
import { Controller, Post, Body,  ValidationPipe } from '@nestjs/common';


@Controller('preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createUserPreferenceDto: CreateUserPreferenceDto) {
    // The validated DTO object is automatically injected here
    return this.preferencesService.create(createUserPreferenceDto);
  }
}
