import { DocsSchema } from './docs.model';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Docs', schema: DocsSchema }])],
  controllers: [DocsController],
  providers: [DocsService],
})
export class DocsModule {}
