import { Test, TestingModule } from '@nestjs/testing';
import { DocumentpaymentService } from './documentpayment.service';

describe('DocumentpaymentService', () => {
  let service: DocumentpaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentpaymentService],
    }).compile();

    service = module.get<DocumentpaymentService>(DocumentpaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
