import { IsNotEmpty, IsString } from "class-validator"
import { Song } from "src/songs/entities/song.entity"

export class CreatePlaylistDto {
    @IsNotEmpty()
    @IsString()
    name: string
}
