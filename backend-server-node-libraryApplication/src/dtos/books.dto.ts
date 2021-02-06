import { IsEmail, isNumber, IsString } from 'class-validator';

export class CreateBookDTO {
  @IsEmail()
  public author: string;

  @IsString()
  public genre: string;

  @IsString()
  public title: string;

  @isNumber()
  public ratings: number;

  @isNumber()
  public price: number;

  public image: Buffer;
}
