import { JsonRequest } from '../request.old';
import type { definitions } from '../../.temp/types';

export class PetController {
    async getById(id: string | number){
    return (
        await new JsonRequest()
        .url(`https://petstore.swagger.io/v2/pet/${id}`)
        .send()
    ).body
    }

    async findByStatus(status: string | string []) {
        return (
            await new JsonRequest()
            .url(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)
            .send()
            ).body
    }
}
