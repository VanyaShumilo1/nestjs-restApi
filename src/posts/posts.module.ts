import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Post} from "./post.model";
import {FilesModule} from "../files/files.module";

@Module({
  imports: [
      SequelizeModule.forFeature([User, Post]),
      FilesModule
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
