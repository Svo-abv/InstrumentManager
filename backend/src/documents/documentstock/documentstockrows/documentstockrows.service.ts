import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateDocumentStockRowsDto } from './dto/documentstockrows.dto';
import { DocumentStockRows } from './schemas/documentstockrows.entity';

@Injectable()
export class DocumentStockRowsService {

    constructor(@InjectRepository(DocumentStockRows)
    private documentStockRowsRepository: Repository<DocumentStockRows>) { }

    async getAllByDocument(id: number): Promise<DocumentStockRows[]> {
        return await this.documentStockRowsRepository.find({ where: { document: id }, relations: ["item"] });//, relations: ["itemId"] 
    }
    async getRowById(id: number): Promise<DocumentStockRows> {
        return await this.documentStockRowsRepository.findOne(id, { relations: ["item"] });//, 
    }
    async createBlunkRow(id: number): Promise<DocumentStockRows> {

        const newRow = new DocumentStockRows();
        newRow.documentId = id;
        return await this.documentStockRowsRepository.save(newRow);
    }
    async deleteByIdRow(id: number): Promise<DeleteResult> {
        return await this.documentStockRowsRepository.delete(id);
    }
    async updateRow(data: CreateDocumentStockRowsDto): Promise<DocumentStockRows> {
        const curr = this.documentStockRowsRepository.create(data);
        curr.summ = curr.price * curr.count;
        return await this.documentStockRowsRepository.save(curr);
    }
    async saveAllRows(data: CreateDocumentStockRowsDto[]): Promise<DocumentStockRows[]> {
        return await this.documentStockRowsRepository.save(data);
    }
}
