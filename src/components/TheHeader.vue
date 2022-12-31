<template>
    <div class="container-fluid">
        <div class="row text-white container-header">
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawer()">X</span>
            </div>

            <div class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
                <img src="../assets/images/logo.jpg" alt="Logo" width="34" height="32" class="ms-3 me-3">
                <span class="d-none d-sm-flex">QUẢN TRỊ</span>
            </div>

            <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">
                <span>Admin</span>
            </div>

            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawerUser()">X</span>
            </div>
        </div>
    </div>

    <!-- SHOW TABAR BÊN TRÁI -->
    <a-drawer v-model:visible="visible" title="DANH MỤC" placement="left">
        <TheMenu />
    </a-drawer>


    <!-- SHOW TABAR BÊN PHẢI -->
    <a-drawer v-model:visible="visible_user" title="ADMIN" placement="right">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue';
import TheMenu from './TheMenu.vue';
export default defineComponent({
    components: { TheMenu },
    setup() {
        const visible = ref(false);
        const visible_user = ref(false);

        const showDrawer = () => {
            visible.value = true;
        };

        const showDrawerUser = () => {
            visible_user.value = true;
        }
        return {
            visible,
            visible_user,
            showDrawer,
            showDrawerUser
        };
    },
});
</script>

<style scoped>
.container-header {
    background: #0c713d;
    padding: 1rem;
}
</style>