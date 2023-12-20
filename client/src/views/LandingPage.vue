<template>
    <v-app-bar>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props" class="btnDashboard">
                    Dashboard
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props" class="btnSettings">
                    User Settings
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

    
    </v-app-bar>
    
</template>

<style scoped>
.btnSettings {
    position: absolute;
    background-color: #2196F3;
    right: 5%;
}

.btnDashboard {
    position: absolute;
    background-color: #2196F3;
    right: 20%;

}
.table{
    margin: 10%;
    width: 50%;
}
</style>
<script>
export default {
    data: () => ({
        items: [
            { title: 'Click Me' },
            { title: 'Click Me' },
        ],
    }),

}
</script>                                                           