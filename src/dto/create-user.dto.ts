import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'example@mail.com', description: 'Email' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @ApiProperty({ example: '12345', description: 'password' })
  @IsString({ message: 'Should be a string' })
  @Length(4, 20, { message: 'Password should be in length range 4-20.' })
  readonly password: string;
}
