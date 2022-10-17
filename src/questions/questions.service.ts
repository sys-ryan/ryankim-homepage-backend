import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { UpdateQuestionDto } from "./dto/update-question.dto";
import { Questions } from "./entities/questions.entity";

@Injectable()
export class QuestionsService {
  constructor(@InjectRepository(Questions) private questionsRepository: Repository<Questions>) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<void> {
    const question = await this.questionsRepository.create(createQuestionDto);
    await this.questionsRepository.save(question);
  }

  // TODO: Guard
  async findAll(): Promise<Questions[]> {
    const questions = await this.questionsRepository.find();
    return questions;
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
