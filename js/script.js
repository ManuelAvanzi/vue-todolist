new Vue ({
    el:"#app",
    data:{
        todo: [
            'fare la spesa',
            'fare i compiti',
            'fare il bucato'
        ],
        temporaryItem: '',
    },
    methods:{
        addItem:function(){
            this.todo.push(this.temporaryItem);
            console.log(this.todo);
        }
    }
})