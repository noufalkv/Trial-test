import axios from "axios";

const getDefaultState = () => {
    return {
        cars: { status: false, data: [] },
    };
};

const state = getDefaultState();

const getters = {
    allCars: (state) => state.cars,
    getCarData: (state) => (field) => {
        return state.cars.data.map(car => car[field])
    },
    getCarById: (state) => (id) => {
        return state.cars.data.find(car => car.id == id)
    }
};

const actions = {
    loadCars({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get("/data.json")
                .then((response) => {
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
