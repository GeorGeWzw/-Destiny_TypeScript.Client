import { IServcerTreeReturn } from '../../dto/pagequerydto/serverReturndto';
import { Pagination } from '../../dto/pagequerydto/querydto';
import {MenuOutTreeDto} from "@/core/domain/dto/menudto/MenuResultDto"

export interface IMenuService {
    GetTree(): Promise<IServcerTreeReturn>;
} 