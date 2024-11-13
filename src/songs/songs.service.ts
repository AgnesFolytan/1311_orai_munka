import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';
import { Song } from './entities/song.entity';
import { count } from 'console';

@Injectable()
export class SongsService {
  db: PrismaService;

  constructor(db: PrismaService) {
    this.db = db;
  }

  create(createSongDto: CreateSongDto) {
    return this.db.song.create({
      data: createSongDto
    })
  }

  async findAll() {
    return await this.db.song.findMany();
  }

  findOne(id: number) {
    return this.db.song.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateSongDto: UpdateSongDto) {
    try{
      return this.db.song.update({
        where: {id},
        data: updateSongDto
      })
    } catch {
      return undefined;
    }
  }

  async remove(id: number) {
    try{
      return await this.db.song.delete({
        where : {
          id
        }
      })
    } catch {
      return undefined;
    }
  }

  findFree(){
    return this.db.song.findMany({
      where: {
        price: 0
      }
    })
  }

  topSongs(count: number){
    return this.db.song.findMany({
      orderBy: {
        rating: 'desc'
      },
      take: count
    })
  }

  async popularArtists(){
    const response = await this.db.song.groupBy({
      by: ['author'], _count: {author: true}, orderBy: {_count: {author: 'desc'}}
    })
    return response.map(x => 'artist: ' + x.author + ', numberOfSongs: ' + x._count.author)
  }
}
