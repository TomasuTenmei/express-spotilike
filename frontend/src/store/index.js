// store/index.js
import { createStore } from 'vuex';
import * as authService from '@/services/authService';

export default createStore({
    state: {
        token: null,
        user: null,
        isAuthenticated: authService.isAuthenticated(),
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            state.isAuthenticated = true;
        },
        setUser(state, user) {
            state.user = user;
        },
        clearAuth(state) {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
        },
    },
    actions: {
        async login({ commit }, { email, password }) {
            try {
                const user = await authService.login(email, password);
                commit('setUser', user);
            } catch (error) {
                console.error('Login error:', error);
                throw error;
            }
        },
        logout({ commit }) {
            authService.logout();
            commit('clearAuth');
        },
    },
});
