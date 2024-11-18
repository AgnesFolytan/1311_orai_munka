import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post()
  create(@Body() createPlaylistDto: CreatePlaylistDto) {
    const Lista = [];
    return this.playlistService.create(createPlaylistDto);
  }

  @Get()
  async findAll() {
    return this.playlistService.findAll();
  }

  @Post(':listid/:songid')
  addSong(@Param('listid') listid: string, @Param('songid') songid: string){
    return this.playlistService.addSong(+listid, +songid)
  }

  @Delete(':listid/:songid')
  deleteSong(@Param('listid') listid: string, @Param('songid') songid: string){
    return this.playlistService.deleteSong(+listid, +songid)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playlistService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playlistService.remove(+id);
  }
}
