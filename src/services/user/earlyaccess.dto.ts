import {
    IsEmail,
    IsString,
    IsDefined,
    IsOptional,
} from "class-validator";

/**
 * Data transfer object (DTO) with expected fields for early access
 */
class EarlyAccessDto {

    @IsString()
    @IsOptional()
    public firstName: string;

    @IsEmail()
    @IsDefined()
    public email: string;
}

export default EarlyAccessDto;
