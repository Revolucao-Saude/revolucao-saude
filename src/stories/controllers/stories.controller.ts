import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { StoriesService } from "../services/stories.service";
import { JwtAuthGuard } from "src/auth/guard/jwt.auth.guard";
import { Story } from "../entities/stories.entity";
import { DeleteResult } from "typeorm";

@ApiTags('Story')
@Controller('/stories')
export class StoriesController{
    constructor(private readonly storyService: StoriesService){}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('/todos')
    @HttpCode(HttpStatus.OK)
    findAll():Promise<Story[]>{
        return this.storyService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id:number):Promise<Story>{
        return this.storyService.findById(id);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Post('/criar-story')
    @HttpCode(HttpStatus.CREATED)
    create(@Body() story: Story): Promise<Story>{
        return this.storyService.create(story);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Put('/editar')
    @HttpCode(HttpStatus.OK)
    update(@Body() story:Story): Promise<Story>{
        return this.storyService.update(story);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id:number): Promise<DeleteResult>{
        return this.storyService.delete(id);
    }
}
