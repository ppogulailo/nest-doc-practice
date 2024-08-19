import {Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Query} from '@nestjs/common';
import {CardsService} from "./cards.service";

@Controller('cards')
export class CardsController {
    constructor(private readonly cardsService: CardsService) {}
    @Get()
    async findOne(@Query('id', ParseIntPipe) id: number) {
        return this.cardsService.findOne(id);
    }

    @Get(':uuid')
    async findOneWithUUID(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
        return this.cardsService.findOne(uuid);
    }
}
