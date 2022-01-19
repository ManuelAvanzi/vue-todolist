new Vue ({
    el:"#app",
    data:{
        todo: [
            {
                text: "primo elemento della lista",
                done: true,
            },
            {
                text: "secondo elemento della lista",
                done: false,
            },
            {
                text: "terzo elemento della lista",
                done: false,
            },
            {
                text: "quarto elemento della lista",
                done: true,
            },
            {
                text: "quinto elemento della lista",
                done: false,
            },
            {
                text: "sesto elemento della lista",
                done: true,
            },

            
        ],
        temporaryEl:'',
    },
    methods:{
        addElement:function(){
           this.todo.push({
               text:this.temporaryEl,
               done:false,
           })
           this.temporaryEl='';
        },
        removeEl:function(i){
            console.log("rimuovo l'elemento di indice",i);
            this.todo.splice(i,1);
        },

        // aggiorno il data done=true/false
        doneToggle:function(i){
            this.todo[i].done=!this.todo[i].done;
        }
    }
})