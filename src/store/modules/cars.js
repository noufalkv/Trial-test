import axios from "axios";

const getDefaultState = () => {
    return {
        cars: { status: false, data: [] },
    };
};

const state = getDefaultState();

const getters = {
    allCars: (state) => state.cars,
    getCarByFilter: (state) => (field, value) => {
        return state.cars.data.filter(car =>
            car[field] == value
        )
    },
    getCarById: (state) => (id) => {
        console.log(id);
        return state.cars.data.find(car => car.id == 3)
    }
};

const actions = {
    loadCars({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get("/data.json")
                .then((response) => {
                    console.log(response.data);
                    commit("setCars", response.data);
                    resolve(response);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

};
const mutations = {
    resetState(state) {
        Object.assign(state, getDefaultState());
    },
    setCars: (state, cars) => {
        state.cars.status = true;
        state.cars.data = cars;
    },

};

export default {
    state,
    getters,
    actions,
    mutations,
};
