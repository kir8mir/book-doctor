import { DocsService } from './docs.service';
import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

@Controller('docs')
export class DocsController {
  constructor(private readonly docsService: DocsService) {}

  @Post()
  addDoc(
    @Body('name') docName: string,
    @Body('position') docPosition: string,
  ): any {
    return this.docsService.insertDoc(docName, docPosition);
  }

  @Get()
  async getAllDocs() {
    return await this.docsService.fetchDocs();
  }

  @Get(':id')
  getDoc(@Param('id') docId: string) {
    return this.docsService.fetchOneDoc(docId);
  }

  @Patch(':id')
  async updateDoc(
    @Param('id') docId: string,
    @Body('name') docName: string,
    @Body('position') docPosition: string,
  ) {
    return await this.docsService.updateDoc(docId, docName, docPosition);
  }

  @Delete(':id')
  async deleteDoc(@Param('id') docId: string) {
    return await this.docsService.removeDoc(docId);
  }
}
