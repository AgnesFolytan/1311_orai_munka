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
      data: CreatePlaylistDto
    })
  }

  async findAll() {
    return await this.db.playlist.findMany();
  }

  findOne(id: number) {
    return this.db.playlist.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return `This action updates a #${id} playlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} playlist`;
  }
}
