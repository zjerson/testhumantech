// import ApiBaseService from "./apiBase";

import MOVIES from "app/mocks/movies.data";

class Movies {
    constructor() {
        if (!Movies.instance) { Movies.instance = this; }
        return Movies.instance;
    }

    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(MOVIES);
                // resolve([]);
                // reject(true);
            }, 3000);
        });
        // return ApiBaseService.get(`resources/caso/${id}`);
    }

    create(body) {
        // return ApiBaseService.post('resources/caso/crear', body);
    }

    update(id, body) {
        // return ApiBaseService.put(`resources/caso/editar/${id}`, body);
    }

    delete(id) {
        // return ApiBaseService.delete(`resources/caso/eliminar/${id}`);
    }

}

const MovieService = new Movies();

export default MovieService;