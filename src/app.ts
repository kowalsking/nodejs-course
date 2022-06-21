import express, { Express } from 'express'
import { Server } from 'http'
import { ExceptionFilter } from './errors/exception.filter'
import { LoggerService } from './logger/logger.service'
import { UserController } from './users/users.controller'

export class App {
  app: Express
  port: number
  server: Server
  logger: LoggerService
  userController: UserController
  exceptionFilter: ExceptionFilter

  constructor(
      logger: LoggerService,
      userController: UserController,
      exceptionFilter: ExceptionFilter
    ) {
    this.app = express()
    this.port = 8080
    this.userController = userController
    this.logger = logger
    this.exceptionFilter = exceptionFilter
  }

  useRoutes() {
    this.app.use('/users', this.userController.router)
  }

  useExceptionFilters() {
    this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter))
  }

  public async init() {
    this.useRoutes()
    this.useExceptionFilters()
    this.server = this.app.listen(this.port)

    this.logger.log('Server listening on port ' + this.port)
  }
}