import axios from "axios";

const getDefaultState = () => {
  return {
    cars: { status: false, data: [] },
  };
};

const state = getDefaultState();

const getters = {
  allCars: (state) => state.cars,
};

const actions = {
  getStageList({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("./data.json")
        .then((response) => {
          if (response.status == 200) {
            commit("setCars", response.data);
            resolve(response);
          }
          reject(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

};
const mutations = {
  resetGeneralState(state) {
    Object.assign(state, getDefaultGeneralState());
  },
  setCars: (state, stages) => {
    state.cars.status = true;
    state.car.data = stages;
  },
  
};

export default {
  state,
  getters,
  actions,
  mutations,
};
