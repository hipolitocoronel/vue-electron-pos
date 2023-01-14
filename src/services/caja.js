// import axios from 'axios';
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

// const baseUrl =
//  'http://localhost:8090/api/collections/movimientos/records?expand=users';

const cajaActual = async () => {
  const cajaData = await pb
    .collection('caja')
    .getFullList(2000, { sort: '-created' });

  return cajaData[0];
};

const movimientos = async () => {
  const movimientosData = await pb
    .collection('movimientos')
    .getFullList(2000, { expand: 'user' });

  return movimientosData;
};

export default { cajaActual, movimientos };
