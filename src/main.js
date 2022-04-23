import Vue from 'vue'
import App from './App.vue'
import ElementUI, {
  Button,Radio,Container,Main,Header,Aside,Menu,Submenu,MenuItemGroup,
  MenuItem,Dropdown,DropdownMenu,DropdownItem,Row,Col,Card,Table,TableColumn,
Breadcrumb,BreadcrumbItem,Tag,Form,FormItem,Input,Select,DatePicker,Switch,
Dialog,Pagination,Option,MessageBox,Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'


import router from './router'
import store from './store'
//引入axios
import http from 'axios'
Vue.prototype.$http=http
//引入mock
import './api/mock'


Vue.config.productionTip = false
//注册插件
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Aside)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Col)
Vue.use(Row)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Switch)
Vue.use(Input)
Vue.use(Select)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Option)


Vue.prototype.$http=http
Vue.prototype.$confirm=MessageBox.confirm
Vue.prototype.$message=Message


// router.beforeEach((to, from, next) => {
//   store.commit('getToken')//预先获取防止页面刷新后丢失token
//   const token =store.state.User.token
//   console.log('@token', token)
//   if (!token && to.name !== 'Login') {
//     next({name: 'Login'})
// } else if (token && to.name === 'Login') {
//     next({name: 'Home'})
// } else {
//     next()
// }
// })



new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  },
  // mounted() {
  //   console.log("@token",store.state.User.token)
  // },
}).$mount('#app')
