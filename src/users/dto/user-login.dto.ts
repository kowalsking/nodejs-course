import { IsEmail, IsString } from 'class-validator'

export class UserLoginDto {
	@IsEmail({}, { message: 'Bad email!' })
	email: string

	@IsString({ message: 'No Password!' })
	password: string
}
