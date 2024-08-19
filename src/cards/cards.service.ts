import { Injectable } from '@nestjs/common';

@Injectable()
export class CardsService {
    async findOne(id:number){
        return `one card with ${id}`
    }
}
