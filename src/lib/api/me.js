import axios from '../defaultClient';

export const updateProfile = (username, short_intro) => axios.patch('/api/me/profile', { username, short_intro });
