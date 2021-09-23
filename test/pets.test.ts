import {strict as assert} from 'assert'
import { PetController } from '../api/controller/pet.controller';

describe('Pet', function () {
    it('can be received by id', async function () {
        const id = 1
        const pet = await new PetController().getById(id)

        assert(id === pet.id, `Expected returned pet id to be ${id}`)
    })

    it('can be received by status', async function () {
        const status = 'sold'
        const pets = await new PetController().findByStatus(status)
        
        assert(pets.length > 0, `Expected returned pet status like a ${status}`)

    })
})

