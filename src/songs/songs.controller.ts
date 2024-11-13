import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode, Query } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get('top')
  topSong(@Query('count') count: number = 10){
    return this.songsService.topSongs(+count)
  }

  @Get('free')
  findFree(){
    return this.songsService.findFree()
  }

  @Get('popularArtists')
  async popularArtists(){
    return this.songsService.popularArtists()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const song = this.songsService.findOne(+id);
    if (!song) throw new NotFoundException('No song with this ID' + id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    const song = await this.songsService.update(+id, updateSongDto);
    if (!song) throw new NotFoundException('No song with this ID' + id);

    return song;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const success = await this.songsService.remove(+id);
    if (success) {
      throw new NotFoundException('No song with this ID' + id);
    }
  }

}
