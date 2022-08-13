import { IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Should be a string' })
  readonly title: string;
  @IsString({ message: 'Should be a string' })
  readonly content: string;
  userId: number;
}
