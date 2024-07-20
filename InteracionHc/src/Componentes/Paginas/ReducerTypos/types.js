export const Type = {
  add: "add",
  eliminar: "eliminar",
  agregar: "agregar",
  aumentarCarrito: "aumentarCarrito",
  RestarCarrito: "RestarCarrito",
  BorrarTodo: "eliminartodo",
};

export const intialState = {
  produc: [
    { id: 1, stock: 10, nombre: "jhon", precio: 2000 },
    { id: 2, stock: 10, nombre: "Oroco", precio: 1000 },
    { id: 3, stock: 10, nombre: "Sintasol", precio: 5000 },
  ],
  carritos: [],
  actual: {},
};

export const FuncionReductora = (state, action) => {
  if (action.type == Type.add) {
    return {
      ...state,
      actual: action.payload,
    };
  }

  if (action.type == Type.agregar) {
    let Id = action.payload.id;
    const Encontrar = state.carritos.find((item) => item.id == Id);
    if (!Encontrar) {
      return {
        ...state,

        produc: state.produc.map((pro) =>
          pro.id === Id ? { ...pro, stock: pro.stock - 1 } : pro
        ),

        carritos: [...state.carritos, { ...action.payload, cantidad: 1 }],
      };
    } else {
      alert(`tu Producto ${action.payload.nombre} ya esta dentro del carrito`);
    }
  }
  if (action.type == Type.aumentarCarrito) {
    const { id } = action.payload;

    const filtro = state.carritos.find((item) => item.id === id);
    const Prod = state.produc.find((item) => item.id === id);

    if (filtro && Prod.stock > 0) {
      return {
        ...state,
        produc: state.produc.map((pro) =>
          pro.id === id ? { ...pro, stock: pro.stock - 1 } : pro
        ),
        carritos: state.carritos.map((produ) =>
          produ.id === id ? { ...produ, cantidad: produ.cantidad + 1 } : produ
        ),
      };
    } else {
      alert("Se Agoto los productos del Stock ");
    }
  }

  if (action.type == Type.RestarCarrito) {
    const { id } = action.payload;
    const filtro = state.carritos.find((item) => item.id === id);
    console.log(filtro);
    if (filtro.cantidad > 0) {
      return {
        ...state,

        produc: state.produc.map((item) =>
          item.id === id ? { ...item, stock: item.stock + 1 } : item
        ),
        carritos: state.carritos.map((produ) =>
          produ.id === id ? { ...produ, cantidad: produ.cantidad - 1 } : produ
        ),
      };
    }
  }

  if (action.type == Type.BorrarTodo) {
    const { id } = action.payload;

    const filtro = state.carritos.find((item) => item.id === id);
    if (filtro.cantidad > 0) {
      return {
        ...state,
        produc: state.produc.map((item) =>
          item.id === id ? { ...item, stock: 10 } : item
        ),
        carritos: state.carritos.filter((pro) => pro.id != id),
      };
    }
  }

  return state;
};
