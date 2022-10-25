import axios from "axios";

import { base_url as _burl } from "../../helper";
const base_url = _burl + "/api";

import { Storage } from "expo-storage";

export const login = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(base_url + "/login", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async (res) => {
        console.log(res);
        alert(JSON.stringify(res));
        await Storage.setItem({
          key: `user`,
          value: JSON.stringify(res.data.data),
        });
        dispatch({ type: "SET_LOGIN", payload: true });
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const logout = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Storage.removeItem({ key: 'user' })
    dispatch({ type: "SET_LOGIN", payload: false });
    resolve(res);
  });
};

export const register = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(base_url + "/users", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        alert(JSON.stringify(res));
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const me = () => async (dispatch) => {
  const item = JSON.parse(await Storage.getItem({ key: `user` }));
  if (item) {
    axios
      .get(base_url + "/users/" + item.id)
      .then((res) => {
        dispatch({ type: "SET_PROFILE", payload: res.data });
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
    dispatch({ type: "SET_USER", payload: item });
    dispatch({ type: "SET_LOGIN", payload: true });
  }

  return item ? true : false;
};

export const getBarber = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(base_url + "/barber")
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const getBarberId = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(base_url + "/barber/" + id)
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


export const transaksi = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(base_url + "/transaksi", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async (res) => {
        resolve(res);
      })
      .catch((err) => {
        alert(JSON.stringify(err.response));
        reject(err);
      });
  });
};

export const uploadBukti = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(base_url + "/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const verifikasi = (id, data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(base_url + "/verifikasi/" + id, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};



export const getTransaksi = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(base_url + "/transaksi/" + id)
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const riwayat = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(base_url + "/transaksi-riwayat/" + id)
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getMetodePembayaran = id => dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .get(base_url + "/metode-pembayaran/" + id)
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

