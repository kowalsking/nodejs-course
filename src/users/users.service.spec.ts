import 'reflect-metadata'
import { UserModel } from '@prisma/client'
import { Container } from 'inversify'
import { IConfigService } from '../config/config.service.interface'
import { TYPES } from '../types'
import { User } from './user.entity'
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

let createdUser: UserModel | null

describe('UserService', () => {
	it('createUser', async () => {
		configService.get = jest.fn().mockReturnValueOnce('azov')
		usersRepository.create = jest.fn().mockImplementationOnce(
			(user: User): UserModel => ({
				name: user.name,
				email: user.email,
				password: user.password,
				id: 1,
			}),
		)
		createdUser = await usersService.createUser({
			email: 'g@g.com',
			name: 'Godblessed',
			password: 'azov',
		})

		expect(createdUser?.id).toEqual(1)
		expect(createdUser?.password).not.toEqual('azov')
	})

	it('validateUser - success', async () => {
		usersRepository.find = jest.fn().mockReturnValueOnce(createdUser)
		const result = await usersService.validateUser({
			email: 'g@g.com',
			password: 'azov',
		})
		expect(result).toBeTruthy()
	})

	it('validateUser - wrong password', async () => {
		usersRepository.find = jest.fn().mockReturnValueOnce(createdUser)
		const result = await usersService.validateUser({
			email: 'g@g.com',
			password: 'azov1',
		})
		expect(result).toBeFalsy()
	})

	it('validateUser - wrong user', async () => {
		usersRepository.find = jest.fn().mockReturnValueOnce(null)
		const result = await usersService.validateUser({
			email: 'g@q.com',
			password: 'azov1',
		})
		expect(result).toBeFalsy()
	})
})
