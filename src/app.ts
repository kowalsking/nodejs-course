import express, { Express } from 'express'
import { Server } from 'http'
import { inject, injectable } from 'inversify'
import { ILogger } from './logger/logger.interface'
import { TYPES } from './types'
import { UserController } from './users/users.controller'
import 'reflect-metadata'
import { json } from 'body-parser'
import { IConfigService } from './config/config.service.interface'
import { IExceptionFilter } from './errors/exception.filter.iterface'

@injectable()
export class App {
	app: Express
	port: number
	server: Server

	constructor(
		@inject(TYPES.ILogger) private logger: ILogger,
		@inject(TYPES.UserController) private userController: UserController,
		@inject(TYPES.ExceptionFilter) private exceptionFilter: IExceptionFilter,
		@inject(TYPES.ConfigService) private configService: IConfigService,
	) {
		this.app = express()
		this.port = 8080
		this.userController = userController
		this.logger = logger
		this.exceptionFilter = exceptionFilter
	}

	useMiddleware(): void {
		this.app.use(json())
	}

	useRoutes(): void {
		this.app.use('/users', this.userController.router)
	}

	useExceptionFilters(): void {
		this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter))
	}

	public async init(): Promise<void> {
		this.useMiddleware()
		this.useRoutes()
		this.useExceptionFilters()
		this.server = this.app.listen(this.port)

		this.logger.log('Server listening on port ' + this.port)
	}
}
