import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "5f303a29-d501-4ae5-89b5-d99af9c5066e",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`).then((res) => res.data);
  },

  follow(id) {
    return instance.post(`follow/${id}`).then((res) => res.data);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((res) => res.data);
  },
};

export const profileAPI = {
  getSelf(userId = 22833) {
    return instance.get(`profile/${userId}`).then((res) => res.data);
  },
  getStatus(userId = 22833) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
};
