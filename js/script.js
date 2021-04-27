const app = new Vue({
    el:"#app",
    data:{
        // My account
        myAccount : {
            name: "It's me!",
            avatar: '_io',
        },
        // Elenco contatti
        list: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Marco',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/08/2020 15:30:55',
                        message: 'Weila!',
                        status: 'sent'
                    },
                    {
                        date: '11/08/2020 15:50:00',
                        message: 'Wey! come va?',
                        status: 'received'
                    },
                    {
                        date: '12/08/2020 18:30:55',
                        message: 'bene te?',
                        status: 'sent'
                    },
                    {
                        date: '12/08/2020 19:00:00',
                        message: 'Mah si, anche',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Gianni',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '17/11/2021 15:30:55',
                        message: 'Ci sei stasera?',
                        status: 'sent'
                    },
                    {
                        date: '17/11/2021 16:50:00',
                        message: 'si dove andiamo?',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Lorenzo',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '20/01/2021 16:50:00',
                        message: 'Ci vediamo domani',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Larry',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '20/01/2021 16:50:00',
                        message: 'che fai?',
                        status: 'received'
                    },
                    {
                        date: '20/01/2021 16:50:00',
                        message: 'niente, tu?',
                        status: 'sent'
                    },
                    {
                        date: '20/01/2021 16:50:00',
                        message: 'studio',
                        status: 'received'
                    },
                    {
                        date: '20/01/2021 16:50:00',
                        message: 'se come no!',
                        status: 'sent'
                    },
                ],
            },
        ],
        emoji : ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '🙂', '🤗', '🤔', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '🤓', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '😬', '😰', '😱', '😳', '😵', '😡', '😠', '😇', '🤠', '🤡', '🤥', '😷', '🤒', '🤕', '🤢', '🤧', '😈', '👿', '👹', '👺', '💀', '☠', '👻', '👽', '👾', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🙊', '👦', '👦🏻', '👦🏼', '👦🏽', '👦🏾', '👦🏿', '👧', '👧🏻', '👧🏼', '👧🏽', '👧🏾', '👧🏿', '👨', '👨🏻', '👨🏼', '👨🏽', '👨🏾', '👨🏿', '👩', '👩🏻', '👩🏼', '👩🏽', '👩🏾', '👩🏿', '👴', '👴🏻', '👴🏼', '👴🏽', '👴🏾', '👴🏿', '👵', '👵🏻', '👵🏼', '👵🏽', '👵🏾', '👵🏿', '👶', '👶🏻', '👶🏼', '👶🏽', '👶🏾', '👶🏿', '👼', '👼🏻', '👼🏼', '👼🏽', '👼🏾', '👼🏿', '👮', '👮🏻', '👮🏼', '👮🏽', '👮🏾', '👮🏿', '🕵', '🕵🏻', '🕵🏼', '🕵🏽', '🕵🏾', '🕵🏿', '💂', '💂🏻', '💂🏼', '💂🏽', '💂🏾', '💂🏿', '👷', '👷🏻', '👷🏼', '👷🏽', '👷🏾', '👷🏿', '👳', '👳🏻', '👳🏼', '👳🏽', '👳🏾', '👳🏿', '👱', '👱🏻', '👱🏼', '👱🏽', '👱🏾', '👱🏿', '🎅', '🎅🏻', '🎅🏼', '🎅🏽', '🎅🏾', '🎅🏿', '🤶', '🤶🏻', '🤶🏼', '🤶🏽', '🤶🏾', '🤶🏿', '👸', '👸🏻', '👸🏼', '👸🏽', '👸🏾', '👸🏿', '🤴', '🤴🏻', '🤴🏼', '🤴🏽', '🤴🏾', '🤴🏿', '👰', '👰🏻', '👰🏼', '👰🏽', '👰🏾', '👰🏿', '🤵', '🤵🏻', '🤵🏼', '🤵🏽', '🤵🏾', '🤵🏿', '🤰', '🤰🏻', '🤰🏼', '🤰🏽', '🤰🏾', '🤰🏿', '👲', '👲🏻', '👲🏼', '👲🏽', '👲🏾', '👲🏿', '🙍', '🙍🏻', '🙍🏼', '🙍🏽', '🙍🏾', '🙍🏿', '🙎', '🙎🏻', '🙎🏼', '🙎🏽', '🙎🏾', '🙎🏿', '🙅', '🙅🏻', '🙅🏼', '🙅🏽', '🙅🏾', '🙅🏿', '🙆', '🙆🏻', '🙆🏼', '🙆🏽', '🙆🏾', '🙆🏿', '💁', '💁🏻', '💁🏼', '💁🏽', '💁🏾', '💁🏿', '🙋', '🙋🏻', '🙋🏼', '🙋🏽', '🙋🏾', '🙋🏿', '🙇', '🙇🏻', '🙇🏼', '🙇🏽', '🙇🏾', '🙇🏿', '🤦', '🤦🏻', '🤦🏼', '🤦🏽', '🤦🏾', '🤦🏿', '🤷', '🤷🏻', '🤷🏼', '🤷🏽', '🤷🏾', '🤷🏿', '💆', '💆🏻', '💆🏼', '💆🏽', '💆🏾', '💆🏿', '💇', '💇🏻', '💇🏼', '💇🏽', '💇🏾', '💇🏿', '🚶', '🚶🏻', '🚶🏼', '🚶🏽', '🚶🏾', '🚶🏿', '🏃', '🏃🏻', '🏃🏼', '🏃🏽', '🏃🏾', '🏃🏿', '💃', '💃🏻', '💃🏼', '💃🏽', '💃🏾', '💃🏿', '🕺', '🕺🏻', '🕺🏼', '🕺🏽', '🕺🏾', '🕺🏿', '👯', '🕴', '🗣', '👤', '👥', '🤺', '🏇', '⛷', '🏂', '🏌', '🏄', '🏄🏻', '🏄🏼', '🏄🏽', '🏄🏾', '🏄🏿', '🚣', '🚣🏻', '🚣🏼', '🚣🏽', '🚣🏾', '🚣🏿', '🏊', '🏊🏻', '🏊🏼', '🏊🏽', '🏊🏾', '🏊🏿', '⛹', '⛹🏻', '⛹🏼', '⛹🏽', '⛹🏾', '⛹🏿', '🏋', '🏋🏻', '🏋🏼', '🏋🏽', '🏋🏾', '🏋🏿', '🚴', '🚴🏻', '🚴🏼', '🚴🏽', '🚴🏾', '🚴🏿', '🚵', '🚵🏻', '🚵🏼', '🚵🏽', '🚵🏾', '🚵🏿', '🏎', '🏍', '🤸', '🤸🏻', '🤸🏼', '🤸🏽', '🤸🏾', '🤸🏿', '🤼', '🤼🏻', '🤼🏼', '🤼🏽', '🤼🏾', '🤼🏿', '🤽', '🤽🏻', '🤽🏼', '🤽🏽', '🤽🏾', '🤽🏿', '🤾', '🤾🏻', '🤾🏼', '🤾🏽', '🤾🏾', '🤾🏿', '🤹', '🤹🏻', '🤹🏼', '🤹🏽', '🤹🏾', '🤹🏿', '👫', '👬', '👭', '💏', '👩‍❤️‍💋‍👨', '👨‍❤️‍💋‍👨', '👩‍❤️‍💋‍👩', '💑', '👩‍❤️‍👨', '👨‍❤️‍👨', '👩‍❤️‍👩', '👪', '👨‍👩‍👦', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👦‍👦', '👨‍👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧‍👧', '👩‍👩‍👦', '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👦‍👦', '👩‍👩‍👧‍👧', '🏻', '🏼', '🏽', '🏾', '🏿', '💪', '💪🏻', '💪🏼', '💪🏽', '💪🏾', '💪🏿', '🤳', '🤳🏻', '🤳🏼', '🤳🏽', '🤳🏾', '🤳🏿', '👈', '👈🏻', '👈🏼', '👈🏽', '👈🏾', '👈🏿', '👉', '👉🏻', '👉🏼', '👉🏽', '👉🏾', '👉🏿', '☝', '☝🏻', '☝🏼', '☝🏽', '☝🏾', '☝🏿', '👆', '👆🏻', '👆🏼', '👆🏽', '👆🏾', '👆🏿', '🖕', '🖕🏻', '🖕🏼', '🖕🏽', '🖕🏾', '🖕🏿', '👇', '👇🏻'],
        randomResponses :["ok 😀","ci sto! 😁","ottimo!","va benissimo","ci vediamo domani","eh si","dai, va bene 😎","si si! 🤗", "ooooooook! 😎", "se lo dici tu...😑","no comment 🙄","se...se... 😏"],
        showEmoji: false,
        newText : "",
        indexActive : 0,
        search : "",
        lastAccessArray : [],
    },
    mounted(){ 
        this.reset();
        this.lastAccess();
    },
    methods:{

        /**
         * Rende visibile la finestra emoji
         */
        statusEmoji(){
            this.showEmoji =! this.showEmoji;
            this.$refs.input.focus();
        },

        /**
         * Aggiunge emoji all'input
         * @param {array element} element 
         */
        addEmoji(element){
            this.newText += element;
            this.$refs.input.focus();
        },

        /**
         * rende active:true l'elemento cliccato
         * @param {index array} index 
         */
        activeElement(element,index){
            this.reset();
            this.list[index].active = true;
            this.indexActive = index;
        },

        /**
         * invio di un input
         */
        input(){
            if(this.newText != ""){
                this.list[this.indexActive].messages.push(
                    {
                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        message: this.newText,
                        status: 'sent'
                    },
                )
                this.newText = "";
                this.autoReply();
                setTimeout(()=>{
                    this.lastAccessArray[this.indexActive] = dayjs().format("DD/MM/YYYY HH:mm:ss")
                },500);
                this.showEmoji = false;
            }
        },

        autoReply(){
            setTimeout(()=>{
                this.list[this.indexActive].messages.push(
                {
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    message: this.randomResponses[this.randomNumber(0,this.randomResponses.length - 1)],
                    status: 'received'
                },
            )
            },1000)
        },

        arrayName(){
            this.list.forEach(element =>{
                element.name.toLowerCase().split("");
            })
        },

        /**
         * filtra per caratteri gli utenti
         */
        filter(){
            console.log(this.search);
            this.list.forEach((element,index)=>{
                if(element.name.toLowerCase().includes(this.search)){
                    this.list[index].visible = true;
                } else{
                    this.list[index].visible = false;
                }
            })
        },

        /**
         * set and reset active class
         */
        reset(){
            this.list = this.list.map(item =>{
                return {
                    ...item,
                    active:false,
                }
            }) 
        },

        /**
        * GENERATORE DI NUMERI RANDOM
        *@param {number} min //numero minimo generato
        *@param {number} max //numero massimo generato
        *@returns //un numero casuale tra i parametri inseriti
        */
        randomNumber(min, max){
        return Math.floor(Math.random()* max - min+1) + min;
        },

        lastAccess(){
            // ciclo su array principale
            this.list.forEach((item,index) =>{
                // ciclo su array messages
                item.messages.forEach((element) =>{
                    // filtro per received
                    if(element.status == "received"){
                        this.lastAccessArray[index] = element.date
                    }
                })
            })
        },
               
    },
// end app / Vue
})