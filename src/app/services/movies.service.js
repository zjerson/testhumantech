// import ApiBaseService from "./apiBase";

import MOVIES from "app/mocks/movies.data";

class Movies {
    counterMovie = 1000;
    constructor() {
        if (!Movies.instance) { Movies.instance = this; }
        return Movies.instance;
    }

    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(MOVIES);
                // resolve([]);
                // reject(true);
            }, 3000);
        });
        // return ApiBaseService.get(`resources/caso/${id}`);
    }

    create(payload) {
        this.counterMovie = this.counterMovie + 100;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ ...payload, id: this.counterMovie });
                // resolve([]);
                // reject(true);
            }, 3000);
        });
    }

    update(id, payload) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(payload);
                // resolve([]);
                // reject(true);
            }, 3000);
        });
    }

    delete(id) {
        // return ApiBaseService.delete(`resources/caso/eliminar/${id}`);
    }

}

const MovieService = new Movies();

export default MovieService;