import axios from '../defaultClient';

export const updateProfile = (username, short_intro) => axios.patch('/api/me/profile', { username, short_intro });
export const updateProfileLinks = profileLinks => axios.patch('/api/me/profile-links', { profileLinks });
export const updateLongIntro = longIntro => axios.patch('/api/me/long-intro', { longIntro });
