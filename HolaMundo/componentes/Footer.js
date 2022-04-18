app.component('footer-banco',{
    props:['valor', 'fecha'],
    // alt + 96 para las comillas invertidas
    template:/*html */`
    <div class="bg-dark py-3 mt-2 text-white">
        <h3> {{texto}} - {{valor}} </h3>
        <p>{{fecha}}</p>
    </div>`
    ,
    data(){
        return{
            texto: 'Footer perron diamico',
        }
    }
})