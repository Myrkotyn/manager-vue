<template>
    <div id="navigation" class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar" >
            <li v-for="item in menu">
                <router-link :to="item.link" v-on:click="changeActive(item.id)"
                             v-bind:class="{ 'active': item.active }" class="">
                    <i class="fa" v-bind:class="item.icon"></i>{{ item.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      menu: [
            {
                id: 1,
                name: 'Admin',
                icon: 'fa-address-book',
                active: false,
                link: '/admin'
            },
            {
                id: 2,
                name: 'Common manager',
                icon: 'fa-anchor',
                active: true,
                link: '/common-manager'
            },
            {
                id: 3,
                name: 'Manager',
                icon: 'fa-university',
                active: false,
                link: '/manager'
            }
        ]
    }
  },
  methods() {
    return {
        methods: {

        }
    }
  }
}
</script>

<style>

</style>
