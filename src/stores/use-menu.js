//TẠO THƯ MỤC STORE, FILE NÀY ĐỂ QUẢN LÝ STATE
//https://www.youtube.com/watch?v=OadP8FUs5hk&list=PLMkmukSzUsWVmgiRMcx4qKFwJjtxS0TDD&index=10
import { defineStore } from 'pinia';

export const useMenu = defineStore('menuId', {
    // arrow function recommended for full type inference
    state: () => ({
        selectedKeys: [],
        openKeys: []
    }),

    actions: {
        onSelectedKeys(data) {
            this.selectedKeys = data;
        },

        onOpenKey(data) {
            this.openKeys = data;
        }
    }
})