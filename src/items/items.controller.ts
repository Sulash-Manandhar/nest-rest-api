import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interface/items.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.createOne(createItemDto);
  }

  @Put(':id')
  update(@Param('id') id, @Body() params: CreateItemDto): Promise<Item> {
    return this.itemsService.update(id, params);
  }
  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.deleteOne(id);
  }
}
