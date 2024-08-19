import { Injectable } from '@nestjs/common';

@Injectable()
export class CardsService {
    async findOne(id:number | string){
        return `one card with ${id}`
    }
}
