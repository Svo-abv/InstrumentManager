import { Test, TestingModule } from '@nestjs/testing';
import { DocumentpaymentController } from './documentpayment.controller';

describe('DocumentpaymentController', () => {
  let controller: DocumentpaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentpaymentController],
    }).compile();

    controller = module.get<DocumentpaymentController>(DocumentpaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
