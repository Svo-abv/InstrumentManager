import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateDocStockDto } from './dto/documentstock.dto';
import { DocumentStock } from './schemas/documentstock.entity';
import { getConnection } from "typeorm";
import { DocumentStockRows } from './documentstockrows/schemas/documentstockrows.entity';

@Injectable()
export class DocumentStockService {
    constructor(@InjectRepository(DocumentStock)
    private documentStockPrepository: Repository<DocumentStock>) { }

    async getAll(): Promise<DocumentStock[]> {
        return await this.documentStockPrepository.find({ relations: ["status", "type", "warehouse", "organization", "client", "user"] });
    }

    async getById(id: string): Promise<DocumentStock> {

        return await this.documentStockPrepository.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {

        return await this.documentStockPrepository.delete(id);
    }

    // async createBlunk(): Promise<DocumentStock> {
    //     return await this.documentStockPrepository.save();
    // }

    async create(dto: CreateDocStockDto): Promise<DocumentStock> {

        const Doc = this.documentStockPrepository.create(dto);
        const summ = await getConnection()
            .createQueryBuilder()
            .addSelect('sum(summ) as summ')
            .from(DocumentStockRows, "document_stock_rows")
            .where('documentId= :id', { id: Doc.id })
            .getOne();
        Doc.summ = summ.summ;

        return await this.documentStockPrepository.save(Doc);
    }

    async update(dto: CreateDocStockDto): Promise<DocumentStock> {
        const Doc = this.documentStockPrepository.create(dto);
        const summ = await getConnection()
            .createQueryBuilder()
            .addSelect('sum(summ) as summ')
            .from(DocumentStockRows, "document_stock_rows")
            .where('documentId= :id', { id: Doc.id })
            .getOne();
        Doc.summ = summ.summ;
        return await this.documentStockPrepository.save(Doc);
    }
}
