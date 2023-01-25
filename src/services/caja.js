import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

const cajaActual = async () => {
  const cajaData = await pb
    .collection('caja')
    .getFullList(2000, { sort: '-created' });

  return cajaData[0];
};

const movimientos = async idCaja => {
  const movimientosData = await pb.collection('movimientos').getFullList(2000, {
    filter: `caja="${idCaja}"`,
    expand: 'user',
    sort: '-created',
  });

  return movimientosData;
};

const getMovimiento = async id => {
  const movimiento = await pb
    .collection('movimientos')
    .getOne(id, { expand: 'user' });

  return movimiento;
};

const agregarDinero = async data => {
  const { id } = await pb.collection('movimientos').create(data);

  return id;
};

const actualizarSaldoCaja = async data => {
  const caja = await pb.collection('caja').update(data.id, data);

  return caja;
};

export default {
  cajaActual,
  movimientos,
  getMovimiento,
  agregarDinero,
  actualizarSaldoCaja,
};
