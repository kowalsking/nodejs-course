import { IsEmail, IsString } from 'class-validator'

export class UserRegisterDto {
	@IsEmail({}, { message: 'Bad email!' })
	email: string

	@IsString({ message: 'No Password!' })
	password: string

	@IsString({ message: 'No Name!' })
	name: string
}
