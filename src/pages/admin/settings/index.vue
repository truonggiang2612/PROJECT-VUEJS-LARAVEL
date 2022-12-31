<template>
    Đây là trang quản lý setting
</template>
<script>// Tạo 1 action
import { useMenu } from '../../../stores/use-menu';
export default {
    setup() {
        useMenu().onSelectedKeys(["admin-settings"])
    }
}
</script>