import dbCommon from './common.js'
import dbDogs from './dogs.js'
import dbShows from './shows.js'
import dbDogsAwards from './dogsAwards.js'
import dbLitters from './litters.js'
import dbLittersPuppies from './littersPuppies.js'

export default {
    getShow (id) {
        return Object.assign({}, dbShows[id], {id: id})
    },
    getShows () {
        let result = {}
        for (let id in dbShows) {
            result[id] = this.getShow(id)
        }
        return result
    },
    getCommon () {
        return dbCommon
    },
    getLitters () {
        let result = dbLitters
        return result
    },
    getLitterGenderCount (idOrPuppies) {
        let puppies = Array.isArray(idOrPuppies)
            ? idOrPuppies
            : dbLittersPuppies[idOrPuppies]
        return puppies.reduce((res, puppy) => {
            res[puppy.gender == 'male' ? 'male' : 'female']++
            res.total++
            return res
        }, { total: 0, male: 0, female: 0 })
    },
    getLitter (id) {
        let result = dbLitters[id]
        result.puppies = dbLittersPuppies[id]
        result.genders = this.getLitterGenderCount(result.puppies)
        return result
    },
    getDogById (id) {
        if (id && dbDogs[id]) {
            let result = Object.assign({id: id}, dbDogs[id])
            result.isMale = result.gender == 'male'
            return result
        }
    },
    getDogsList (filter) {
        let isFilter = (item) => {
            if (filter) for(let fKey in filter) {
                if (filter[fKey] != item[fKey]) {
                    return false
                }
            }
            return true
        }
        let result = {}
        for (let id in dbDogs) {
            let dog = this.getDogById(id)
            if (dog && isFilter(dog)) {
                result[id] = dog
            }
        }
        return result
    },
    getDogAwards(id) {
        return dbDogsAwards[id]
    },
    getPedigree (idOrMother, idFather) {
        let result = {}
        if (!idFather) {
            let rootObj = dbDogs[idOrMother]
            idOrMother = rootObj.mother
            idFather = rootObj.father
        }
        
        Object.assign(result, this.getParents({
            mother: idOrMother,
            father: idFather
        }))
        if (result.father) {
            Object.assign(result.father, this.getParents(result.father))
            if (result.father.father) {
                Object.assign(result.father.father, this.getParents(result.father.father))
            }
            if (result.father.mother) {
                Object.assign(result.father.mother, this.getParents(result.father.mother))
            }
        }
        if (result.mother) {
            Object.assign(result.mother, this.getParents(result.mother))
            if (result.mother.father) {
                Object.assign(result.mother.father, this.getParents(result.mother.father))
            }
            if (result.mother.mother) {
                Object.assign(result.mother.mother, this.getParents(result.mother.mother))
            }
        }
        return result
    },
    getParents (dog) {
        return {
            father: this.getDogById(dog.father),
            mother: this.getDogById(dog.mother),
        }
    }
}