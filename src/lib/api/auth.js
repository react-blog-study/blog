import axios from 'lib/defaultClient';

// todo : 입력한 이메일 계정으로 로그인 or 회원가입 url 보내기,
// current :  현재는 이메일이 존재하면 로그인, 없으면 회원가입폼으로 이동
export const sendAuthEmail = email => axios.post('/api/auth/send-auth-email', { email });

//todo : backend에서 local, git, google, facebook 모두 처리
export const register = () => axios.post('/api/auth/register', {});
export const localLogin = email => axios.post('/api/auth/login/local', { email });

export const checkEmailExists = email => axios.get(`/api/auth/exists/email/${email}`);
export const checkIdExists = id => axios.get(`/api/auth/exists/id/${id}`);

export const checkStatus = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');
