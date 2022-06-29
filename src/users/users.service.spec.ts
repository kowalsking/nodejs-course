import { Container } from 'inversify'
import { IConfigService } from '../config/config.service.interface'
import { TYPES } from '../types'
import { UserService } from './user.service'
import { IUserService } from './user.service.interface'
import { IUsersRepository } from './users.repository.interface'

const ConfigServiceMock: IConfigService = {
	get: jest.fn(),
}

const UsersRepositoryMock: IUsersRepository = {
	find: jest.fn(),
	create: jest.fn(),
}

const container = new Container()
let configService: IConfigService
let usersRepository: IUsersRepository
let usersService: IUserService

beforeAll(() => {
	container.bind<IUserService>(TYPES.UserService).to(UserService)
	container.bind<IConfigService>(TYPES.ConfigService).toConstantValue(ConfigServiceMock)
	container.bind<IUsersRepository>(TYPES.UsersRepository).toConstantValue(UsersRepositoryMock)

	configService = container.get<IConfigService>(TYPES.ConfigService)
	usersRepository = container.get<IUsersRepository>(TYPES.UsersRepository)
	usersService = container.get<IUserService>(TYPES.UserService)
})

describe('UserService', () => {
	it('createUser', async () => {
		const createdUser = await usersService.createUser({
			email: 'g@g.com',
			name: 'Godblessed',
			password: 'azov',
		})
	})
})
