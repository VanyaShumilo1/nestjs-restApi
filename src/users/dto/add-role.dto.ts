import {IsNumber, IsString} from "class-validator";

export class AddRoleDto {
    @IsString({message: "value should be a string"})
    readonly value;

    @IsNumber({}, {message: "userId should be a number"})
    readonly userId: number;
}
