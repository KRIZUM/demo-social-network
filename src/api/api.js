import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers:{
        "API-KEY" : "5fe9e937-a2aa-4fc5-a462-82375a8d6dc4"},
    baseURL:'https://social-network.samuraijs.com/api/1.0/'

})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
            .then(response => {
                return response.data;
            })
    },

    getProfile(userId) {
      console.warn('Obsolete method. Please profileAPI object')
      return profileAPI.getProfile(userId)
    },

    getUsersDelete(userId) {
        return instance.delete(`follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    },
    getUsersPost(userId) {
        return instance.post(`follow/${userId}`, {}, {})
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status : status})
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`, {});
    },
    getLogin (email, password, rememberMe = false) {
      return instance.post('auth/login',{email, password, rememberMe},{});
    },
    getLogout () {
        return instance.delete('auth/login');
    }
}