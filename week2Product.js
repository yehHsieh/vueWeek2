const { createApp } = Vue;


const app = {
    data() {
        return {
            // 產品資料格式
            productDetail: [],
            products: []
        }
    },
    methods: {
        checkAdmin(){
            axios.post(`${url}/api/user/check`)
            .then(res=>{
                this.getData();
            })
            .catch(err=>{
                console.log(err.message)
            })
        },
        getData() {
            axios.get(`${url}/api/${path}/admin/products`)
                .then(res => {
                    this.products = res.data.products;
                })
                .catch(err => console.log(err.response))
        }
    },

    mounted() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexSchool\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
        this.checkAdmin();
    }
}


createApp(app)
    .mount('#app');