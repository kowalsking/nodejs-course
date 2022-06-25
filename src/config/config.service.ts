import { IConfigService } from './config.service.interface'
import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv'
import { inject, injectable } from 'inversify'
import { TYPES } from '../types'
import { ILogger } from '../logger/logger.interface'

@injectable()
export class ConfigService implements IConfigService {
	private config: DotenvConfigOutput

	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		const result: DotenvConfigOutput = config()
		if (result.error) {
			this.logger.error('[ConfigService] Bad .env')
		} else {
			this.logger.log('[ConfigService] All good with .env')
			this.config = result.parsed as DotenvParseOutput
		}
	}

	get(key: string): string {
		// @ts-ignore
		return this.config[key]
	}
}
