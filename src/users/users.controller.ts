import { Response, Request, NextFunction } from 'express';
import { BaseController } from '../common/base.controller';
import { IControllerRoute } from '../common/route.interface';
import { HTTPError } from '../errors/http-error.class';
import { LoggerService } from '../logger/logger.service';

export class UserController extends BaseController {
  protected routes: IControllerRoute[]

  constructor(logger: LoggerService) {
    super(logger)

    this.bindRoutes([
      { path: '/register', method: 'post', func: this.register },
      { path: '/login', method: 'post', func: this.login },
    ])
  }

  login(req: Request, res: Response, next: NextFunction) {
    next(new HTTPError(401, 'Not registered!', 'login'))
  }

  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'register')
  }
}