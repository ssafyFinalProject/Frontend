// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    userInfo : {},
    signStatus : ""
  }),

  getters: {
    getUserInfo: (state) => state.userInfo,
  },

  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
    },

    setSignStatus(signStatus) {
      this.signStatus = signStatus;
    },
    reset() {
      this.userInfo = {};
      this.signStatus = "";
    }
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key:'app',
        storage: localStorage,
      },
    ],
  }
})
