import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';

import { DocsModule } from './docs/docs.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    DocsModule,
    MongooseModule.forRoot(
      'mongodb+srv://kir8mir:1239875@cluster0.rm6m5of.mongodb.net/book-doctorDB?retryWrites=true&w=majority',
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
