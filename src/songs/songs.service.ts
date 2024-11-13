import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';
import { Song } from './entities/song.entity';

@Injectable()
export class SongsService {
  db: PrismaService;

  constructor(db: PrismaService) {
    this.db = db;
  }

  song: Song[] = [
    {
      id: 1,
      title: "első szám",
      author:  "első előadó",
      lenght: 126,
      price: 0,
    },
    {
      id: 2,
      title: "második szám",
      author:  "második előadó",
      lenght: 241,
      price: 1500,
    },
    {
      id: 3,
      title: "hamradik  szám",
      author:  "harmadik előadó",
      lenght: 513,
      price: 235,
    },
  ];

  NextId = this.song.length;
  
  create(createSongDto: CreateSongDto) {
    return 'This action adds a new song';
  }

  findAll() {
    return `This action returns all songs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
