"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Ad boş olamaz' }),
    (0, class_validator_1.IsString)({ message: 'Ad bir metin olmalıdır' }),
    (0, class_validator_1.MinLength)(8, { message: 'Ad en az 8 karakter olmalıdır' }),
    (0, class_validator_1.Matches)(/^[^\d]+$/, { message: 'Ad numeric karakter içeremez' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Email boş olamaz' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Geçerli bir email adresi giriniz' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Parola boş olamaz' }),
    (0, class_validator_1.MinLength)(8, { message: 'Parola en az 8 karakter olmalıdır' }),
    (0, class_validator_1.Matches)(/^(?=.*[A-Z])(?=.*\d).+$/, {
        message: 'Parola en az bir büyük harf ve bir numeric karakter içermelidir',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Yetki boş olamaz' }),
    (0, class_validator_1.IsIn)(['admin', 'editor'], {
        message: 'Geçerli bir yetki seçiniz (admin veya editor)',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "authorization", void 0);
//# sourceMappingURL=create-user.dto.js.map