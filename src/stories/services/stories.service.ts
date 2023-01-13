import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Story } from '../entities/stories.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class StoriesService {
  constructor(
    @InjectRepository(Story)
    private storyRepository: Repository<Story>,
  ) {}

  async findAll(): Promise<Story[]> {
    return await this.storyRepository.find({
      relations: {
        usuario: true,
      },
    });
  }

  async findById(id: number): Promise<Story> {
    let story = await this.storyRepository.findOne({
      where: {
        id,
      },
      relations: {
        usuario: true,
      },
    });

    if (!story)
      throw new HttpException('Story não encontrado !', HttpStatus.NOT_FOUND);

    return story;
  }

  async create(story: Story): Promise<Story> {
    return await this.storyRepository.save(story);
  }

  async update(story: Story): Promise<Story> {
    let updateStory: Story = await this.findById(story.id);

    if (!updateStory)
      throw new HttpException('Story Não Encontrado !', HttpStatus.NOT_FOUND);

    return await this.storyRepository.save(story);
  }

  async delete(id: number): Promise<DeleteResult> {
    let searchStory = await this.findById(id);

    if (!searchStory)
      throw new HttpException('Story não encontrado :(', HttpStatus.NOT_FOUND);

    return await this.storyRepository.delete(id);
  }
}
