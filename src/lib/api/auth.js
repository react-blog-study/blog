import axios from 'lib/defaultClient';

export const sendAuthEmail = email => axios.post('/api/auth/send-auth-email', { email });
export const localRegister = ({ registerForm, registerToken }) => axios.post('/api/auth/register/local', { registerToken, registerForm });
export const localLogin = email => axios.post('/api/auth/login/local', { email });
export const checkStatus = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');
export const getCode = code => axios.get(`/api/auth/code/${code}`);
