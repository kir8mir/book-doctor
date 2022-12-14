import { Injectable } from '@nestjs/common';
import { Doc } from './docs.model';
import { v4 as uuid } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DocsService {
  constructor(@InjectModel('Docs') private readonly docsModel: Model<Doc>) {}

  async insertDoc(
    name: string,
    position: string,
    img: string,
    availableTime: string[],
    visitsDoc: object[],
  ) {
    const newDoc = new this.docsModel({
      name,
      position,
      img,
      availableTime,
      visitsDoc,
    });
    return await newDoc.save();
  }

  async fetchDocs() {
    const docs = await this.docsModel.find().exec();

    return docs.map((doc) => ({
      id: doc.id,
      name: doc.name,
      position: doc.position,
      img: doc.img,
      availableTime: doc.availableTime,
      visitsDoc: doc.visitsDoc,
    }));
  }

  async fetchOneDoc(docId: string) {
    const aDoc = await this.findDoc(docId);
    return {
      id: aDoc.id,
      name: aDoc.name,
      position: aDoc.position,
      img: aDoc.img,
      availableTime: aDoc.availableTime,
      visitsDoc: aDoc.visitsDoc,
    };
  }

  async updateDoc(
    docId: string,
    name: string,
    position: string,
    img: string,
    availableTime: string[],
    visitsDoc: object[],
  ) {
    const updatedDoc = await this.findDoc(docId);

    if (name) {
      updatedDoc.name = name;
    }
    if (position) {
      updatedDoc.position = position;
    }
    if (img) {
      updatedDoc.img = img;
    }

    if (availableTime) {
      updatedDoc.availableTime = availableTime;
    }

    if (visitsDoc) {
      updatedDoc.visitsDoc = visitsDoc;
    }

    updatedDoc.save();
  }

  async removeDoc(docId: string) {
    this.docsModel.deleteOne({ _id: docId }).exec();
  }

  private async findDoc(docId: string): Promise<Doc> {
    let aDoc;

    try {
      aDoc = await this.docsModel.findById(docId);
    } catch (err) {
      throw new Error('Not Found');
    }

    if (!aDoc) {
      throw new Error('Doc not found');
    }

    return aDoc;
  }
}
