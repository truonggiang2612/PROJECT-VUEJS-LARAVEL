<template>
    Đây là trang quản lý users
</template>
<script>// Tạo 1 action
import { useMenu } from '../../../stores/use-menu';
export default {
    setup() {
        useMenu().onSelectedKeys(["admin-users"])
    }
}
</script>