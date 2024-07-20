import { createSlice, current } from "@reduxjs/toolkit";
import { People, valormodificado } from "../../Data";

const InitalState = {
  usuario: valormodificado,
  next: 5,
  previus: 0,
  NextModal: 5,
  Favoritos: [],
  encontrados: [],
  Favoritos: [],
  FavEncontrados: [],
};

export const usuarioSlice = createSlice({
  name: "usuario",
  initialState:
    JSON.parse(localStorage.getItem("storeusuarios")) || InitalState,
  reducers: {
    incremntnext: (state, action) => {
      if (state.next < state.usuario.length) {
        state.next += action.payload;
      }
    },
    decremnetvi: (state, action) => {
      if (state.next > 5) {
        state.next -= action.payload;
      }
    },
    buscar: (state, payload) => {
      console.log(payload);
    },
    RecibirData: (state, action) => {
      state.encontrados = action.payload;
    },
    Ascendente: (state, action) => {
      const ordenar = state.encontrados.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

      console.log(current(ordenar));
    },
    Descedente: (state, action) => {
      console.log("mogollon");
      console.log(current(state.encontrados));
      state.encontrados.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    },

    OrdenarPorCategoria: (state, action) => {
      const ordenar = state.encontrados.sort((a, b) => {
        if (a.category > b.category) {
          return 1;
        }
        if (a.category < b.category) {
          return -1;
        }
        return 0;
      });

      console.log(current(ordenar));
    },

    DecrementarporCategoria: (state, action) => {
      state.encontrados.sort((a, b) => {
        if (a.category < b.category) {
          return 1;
        }
        if (a.category > b.category) {
          return -1;
        }
        return 0;
      });
    },
    AsendenteLvl: (state, action) => {
      state.encontrados.sort((a, b) => {
        if (a.levelOfHappiness > b.levelOfHappiness) {
          return 1;
        }
        if (a.levelOfHappiness < b.levelOfHappiness) {
          return -1;
        }
        return 0;
      });
    },

    Descendetelvl: (state, action) => {
      state.encontrados.sort((a, b) => {
        if (a.levelOfHappiness < b.levelOfHappiness) {
          return 1;
        }
        if (a.levelOfHappiness > b.levelOfHappiness) {
          return -1;
        }
        return 0;
      });
    },
    addlista: (state, action) => {
      const Id = action.payload.id;

      state.Favoritos = [action.payload, ...state.Favoritos];
      state.encontrados = state.encontrados.map((item) =>
        item.id === Id ? { ...item, estado: true } : item
      );
    },
    EliminarLista: (state, action) => {
      const Id = action.payload.id;
      console.log(action.payload);
      state.Favoritos = state.Favoritos.filter((item) => item.id != Id);
      state.encontrados = state.encontrados.map((item) =>
        item.id === Id ? { ...item, estado: false } : item
      );
    },

    LocalStorage: (state, action) => {
      localStorage.setItem("storeusuarios", JSON.stringify(state));
    },

    incremntnext2: (state, action) => {
      console.log("byscar");
      if (state.NextModal < state.Favoritos.length) {
        state.NextModal += action.payload;
      }
    },
    decremnetvi2: (state, action) => {
      if (state.NextModal > 5) {
        state.NextModal -= 5;
      }
    },

    BuscarDatosParametro: (state, action) => {
      // console.log(action.payload)
      const { Nico, Inputformulario } = action.payload;
      if (Nico == "Nombre") {
        const Encontrados = state.Favoritos.filter((item) =>
          item.name.includes(Inputformulario)
        );
        state.FavEncontrados = Encontrados;
        // console.log(current(state.FavEncontrados));
      }
      if (Nico == "Categoria") {
        console.log("categoria");
        const Encontrados = state.Favoritos.filter((item) =>
          item.category.includes(Inputformulario)
        );
        state.FavEncontrados = Encontrados;
      // console.log(current(state.FavEncontrados));
      }
      if (Nico == "Empresa") {
        console.log("categoria");
        const Encontrados = state.Favoritos.filter((item) =>
          item.Empresa.includes(Inputformulario)
        );
        state.FavEncontrados = Encontrados;
        // console.log(current(state.FavEncontrados));
      }
    },
  },
});

export const {
  pintar,
  incremntnext,
  decremnetvi,
  RecibirData,
  Ascendente,
  Descedente,
  OrdenarPorCategoria,
  DecrementarporCategoria,
  AsendenteLvl,
  Descendetelvl,
  addlista,
  EliminarLista,
  LocalStorage,
  incremntnext2,
  decremnetvi2,
  BuscarDatosParametro,
} = usuarioSlice.actions;
