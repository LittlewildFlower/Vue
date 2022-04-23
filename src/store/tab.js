
import Cookie from 'js-cookie'
export default {
    state: {
        isCollapse: true,
        tabList: [
            {
                path: '/Home',
                name: 'Home',
                label: '首页',
                icon: 'home',
            }
        ],
        currentMenu: null,
        menu:[]
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            if (val.name !== 'Home') {
                state.currentMenu = val
                const result = state.tabList.findIndex(item => item.name === val.name)
                if (result === -1) {
                    state.tabList.push(val)
                } else {
                    state.currentMenu = null
                }
            }
        },
        closeTag(state, val) {
            const result = state.tabList.findIndex(item => item.name === val.name)
            state.tabList.splice(result,1)
        },
        setMenu(state,val){
           state.menu=val
           //向缓存中存入数据，参数：cookie名称，存入数组
           Cookie.set('menu',JSON.stringify(val))
        },
        clearMenu(state,val){
            state.menu=[]
            Cookie.remove('menu')
        },
        
        addMenu(state,router){
            if (!Cookie.get('menu')) {
                return
            }
            //根据cookie来确定当前菜单栏的内容
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu=menu
            //处理后台返回的menu内容
            const menuArray=[]
            menu.forEach(item => {
                //判断当前菜单内容下是否存在其他二级菜单
                if (item.children) {
                    item.children=item.children.map(item=>{
                        item.component=()=>import(`../views/${item.url}`)
                        return item
                    })
                    //通过解构使二维数组扁平化然后压入新数组中
                    menuArray.push(...item.children)
                }else{
                    item.component=()=>import(`../views/${item.url}`)
                     menuArray.push(item)
                }
            });
            //路由动态添加
            menuArray.forEach(item=>{
                router.addRoute('Main',item)
            })
        }
    }
}