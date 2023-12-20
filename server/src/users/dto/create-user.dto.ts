import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
  IsIn,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Ad boş olamaz' })
  @IsString({ message: 'Ad bir metin olmalıdır' })
  @MinLength(8, { message: 'Ad en az 8 karakter olmalıdır' })
  @Matches(/^[^\d]+$/, { message: 'Ad numeric karakter içeremez' })
  name: string;

  @IsNotEmpty({ message: 'Email boş olamaz' })
  @IsEmail({}, { message: 'Geçerli bir email adresi giriniz' })
  email: string;

  @IsNotEmpty({ message: 'Parola boş olamaz' })
  @MinLength(8, { message: 'Parola en az 8 karakter olmalıdır' })
  @Matches(/^(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'Parola en az bir büyük harf ve bir numeric karakter içermelidir',
  })
  password: string;

  @IsNotEmpty({ message: 'Yetki boş olamaz' })
  @IsIn(['admin', 'editor'], {
    message: 'Geçerli bir yetki seçiniz (admin veya editor)',
  })
  authorization: string;
}
