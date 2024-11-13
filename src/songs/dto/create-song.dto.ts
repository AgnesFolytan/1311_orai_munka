import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class CreateSongDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsInt()
    lenght: number;

    @IsNotEmpty()
    @IsInt()
    price: number;

    @IsNotEmpty()
    @IsInt()
    @Max(5)
    @Min(0)
    rating: number
}
