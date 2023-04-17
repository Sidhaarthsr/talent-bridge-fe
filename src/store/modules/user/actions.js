import ApiUtils from '@/utils/ApiUtils';
import { POST, PUT, USER_API } from '@/constants';
import router from '@/router';

const apiUtils = new ApiUtils();
const userActions = {
    setUserIdentifiers({ commit }, info) {
        commit('setUserIdentifiers', info)
    },
    setUserInfo({ commit }, info) {
        console.log("Setting User Info : ", info);
        commit('setUserInfo', info)
    },
    setUserName({ commit }, info) {
        commit('setUserName', info)
    },
    setRole({ commit }, info) {
        commit('setRole', info)
    },
    setExistingUser({ commit }, info) {
        commit('updateUserInfo', info)
    },
    setFirstName({ commit }, info) {
        commit('setFirstName', info)
    },
    setLastName({ commit }, info) {
        commit('setLastName', info)
    },
    async createUser({ commit }, userState) {
        try {
            const responseData = await apiUtils.request(POST, USER_API, userState)
            console.log(responseData);
            commit('setUserInfo', responseData);
        } catch (error) {
            console.error(error);
            router.push("/")
        }
    },
    async updateUser({ commit }, userState) {
        console.log(userState);
        try {
            const responseData = await apiUtils.request(PUT, USER_API, userState)
            console.log(responseData);
            commit('setUserInfo', responseData);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
};

export default userActions;