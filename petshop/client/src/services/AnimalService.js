import axios from 'axios';

const url = 'http://localhost:3001/api/animals/';


class AnimalService{

    static getAnimals(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(animal => ({
                        ...animal
                    }))
                );
            }catch(err){
                reject(err);
            }
        });
    }

    static insertAnimal(animal){
        var name = animal.name;
        var type = animal.type;
        var breed = animal.breed;
        var size = animal.size;
        var weight = animal.weight;
        var age = animal.age;

        return axios.post(url, {name, type, breed, size, weight, age});
    }
}

export default AnimalService;