import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlaylistService {

  db: PrismaService;

  constructor(db: PrismaService) {
    this.db = db;
  }
  create(createPlaylistDto: CreatePlaylistDto) {
    return this.db.playlist.create({
      data: createPlaylistDto
    })
  }

  async findAll() {
    return await this.db.playlist.findMany();
  }

  findOne(id: number) {
    return this.db.playlist.findUnique({
      where: {
        id
      }, include: {songs: true}
    });
  }

  addSong(listid: number, songid: number){
    return this.db.playlist.update({
      where: {id: listid},
      data: {songs: {connect: {id: songid}}}
    })
  }

  deleteSong(listid: number, songid: number){
    return this.db.playlist.update({
      where: {id: listid},
      data: {songs: {disconnect: {id: songid}}}
    })
  }

  async remove(id: number) {
    try{
      return await this.db.playlist.delete({
        where : {
          id
        }
      })
    } catch {
      return undefined;
    }
  }
}
