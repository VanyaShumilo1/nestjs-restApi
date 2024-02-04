import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsEmail({},{message: 'Invalid email'})
    readonly email: string;

    @IsString()
    @Length(4, 16, {message: 'Password length must be between 4 and 16 characters'})
    readonly password: string;
}
