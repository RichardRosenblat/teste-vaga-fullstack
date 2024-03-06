import { Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Contract } from './entities/contract.entity';
import { Model } from 'mongoose';

@Injectable()
export class ContractsService {
  constructor(
    @InjectModel(Contract.name) private contractModel: Model<Contract>,
  ) {}

  public async create(createContractDto: CreateContractDto) {
    const createdContract = new this.contractModel(createContractDto);
    return createdContract.save();
  }

  public async findAll(): Promise<Contract[]> {
    return this.contractModel.find().exec();
  }

  public async findOne(id: string): Promise<Contract> {
    return this.contractModel.findById(id).exec();
  }

  public async update(id: string, updateContractDto: UpdateContractDto) {
    return this.contractModel.findByIdAndUpdate(id, updateContractDto).exec();
  }

  public async remove(id: string): Promise<Contract> {
    return this.contractModel.findByIdAndDelete(id).exec();
  }
}
