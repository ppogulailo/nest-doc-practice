import {Controller, Get, ParseIntPipe, Query} from '@nestjs/common';
import {CardsService} from "./cards.service";

@Controller('cards')
export class CardsController {
    constructor(private readonly cardsService: CardsService) {}
    @Get()
    async findOne(@Query('id', ParseIntPipe) id: number) {
        return this.cardsService.findOne(id);
    }
}
