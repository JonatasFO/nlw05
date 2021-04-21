import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {

  private settingsRepository: Repository<Setting>

  constructor() {
    this.settingsRepository = getCustomRepository(SettingRepository);
  }

  async create({ chat, username } : ISettingsCreate) {

    const userALreadyExists = await this.settingsRepository.findOne({ username });

    if (userALreadyExists) {
      throw new Error("User already exists!");
    }
  
    const settings = this.settingsRepository.create({
      chat,
      username,
    })
  
    await this.settingsRepository.save(settings);

    return settings;

  }

}

export { SettingsService };