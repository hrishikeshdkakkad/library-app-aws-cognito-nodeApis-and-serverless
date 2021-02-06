import { IsEmail, isIn, isInt, isNotEmpty, isNumber, IsString } from 'class-validator';

export class CreateBookDTO {
  @IsEmail()
  public author: string;

  @IsString()
  public genre: string;

  @IsString()
  public title: string;

  public ratings: number;

  public price: number;

  public image: Buffer;
}
