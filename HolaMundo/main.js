const app = Vue.createApp({
    data(){
        return{
            titulo:'Hola mundo Vue',
            cantidad:  1000 ,
            enlace: 'https://youtube.com',
            estado: false,
            servicios: ['transferencias', 'pagos', 'giros', 'transasas'],
            desactivarBoton : false,

        }
    },
    methods:{
        agregarSaldo(){
            this.cantidad = this.cantidad + 100
            this.desactivarBoton = false;
        },
        disminuirSaldo(valor){
            if(this.cantidad === 0){
                alert('Sin saldo')
                this.desactivarBoton = true;
                return
            }
            else{
                this.cantidad = this.cantidad - valor
                
            }
        }
    },
    computed:{
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase();
        }
    },
})