import { SERVER } from '../configs/const';
import { Strophe, $pres } from 'strophe.js';
import log from '../utils/log';

const conn = new Strophe.Connection(SERVER.BOSH_URL);

const onConnect = (status) => {
  console.log({ status });
  if (status === Strophe.Status.CONNECTING) {
    log('Strophe is connecting.');
  } else if (status === Strophe.Status.CONNFAIL) {
    log('Strophe failed to connect.');
  } else if (status === Strophe.Status.DISCONNECTING) {
    log('Strophe is disconnecting.');
  } else if (status === Strophe.Status.DISCONNECTED) {
    log('Strophe is disconnected.');
  } else if (status === Strophe.Status.CONNECTED) {
    log('Strophe is connected.');
    localStorage.setItem('connected', true);
    conn.send($pres().tree());
  }
};

const Auth = {
  login: (username, password) => {
    const jid = `${username}@${SERVER.NAME}`;
    conn.connect(jid, password, onConnect);
  },
  // logout: 
};

export default Auth;