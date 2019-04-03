import axios from 'lib/defaultClient';

export const listUserTags = userId => axios.get(`/api/users/@${userId}/tags`);
export const getProfile = userId => axios.get(`/api/users/@${userId}`);
export const getHistory = (userId, offset) => axios.get(`/api/users/@${userId}/history?${offset ? `offset=${offset}` : ''}`);
