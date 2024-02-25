
const {DateTime} = luxon;
const { createApp } = Vue

createApp({
  data() {
    return {
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
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
                avatar: './img/avatar_2.jpg',
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
                avatar: './img/avatar_3.jpg',
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
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
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
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],

        popUp: true,

        darkMode: false,

        splash: true,

        smallChat: false,

        
        //search contact
        inputSearch: "",
        elementsFound: [],
        notFound: false,
        
        
        //const for sending messages
        chatIndex: 0,
        arrayUrlAvatar:[],
        messageToSend: "",
        countMessages: [],
        countMessagesAfterSend: [], 
        writing: false,   
        text:"Sta scrivendo...",   
       
        myMessage: {
                        
            date: "",
            message: '',
            status: 'sent'

        },

        answer: {

            date:"" ,
            message: 'Ok',
            status: 'Received'

        },

        newContact: {
            name: '',
            avatar: '',
            visible: true,
            messages: [],

        },

        newName: "",
        popUpNewContact: false,
        indexAvatar: null,

    }
  },


  methods: {
    selectChat(index){
        this.chatIndex = index
        this.popUp = false
        this.writing = false

        console.dir(window.screen)

        if(window.innerWidth<768){
            this.smallChat = true
        } else{
            this.smallChat = false
        }


    },
    goBack(){
        this.smallChat = false
    },
    riceveAnswer(){
               
        
        this.contacts.forEach(el=>{
            this.countMessagesAfterSend.push(el.messages.length);
        })

        console.log(this.countMessagesAfterSend)

        for( let i=0; i<this.countMessages.length; i++){
            if(this.countMessages[i] != this.countMessagesAfterSend[i]){

                this.answer.date = this.getTime()
                this.contacts[i].messages.push({...this.answer});
                setTimeout(this.online,1000);
                this.text = "Online";
                
            }
        }
        this.countMessagesAfterSend = []
        
    },
    online(){
        this.writing = false;
        this.text = "Sta scrivendo..."
    },
    sendMessage(messageToSend){

        this.countMessages = []
        
        this.contacts.forEach(el=>{
            this.countMessages.push(el.messages.length);
        })

        if(messageToSend.trim() != ""){

            this.myMessage.message = messageToSend;

            this.myMessage.date = this.getTime()
    
            this.contacts[this.chatIndex].messages.push({...this.myMessage});
    
            this.messageToSend = "";
    
            setTimeout(this.riceveAnswer,1000);

            this.writing = true
            
        }
        

    },
    getTime(){
        const date = DateTime.now().toFormat("HH:mm")
        return date

    },
    search(input){
        this.elementsFound = []
        this.notFound = false
        this.contacts.forEach((element,index) => {
           const toFilter = element.name.toLowerCase()
           const filtered = toFilter.includes(input.toLowerCase());
           if(filtered){
                this.elementsFound.push(index);

           } else {
            this.notFound = true;
           }

        });
    },

    chooseAvatar(index){
        this.newContact.avatar = this.contacts[index].avatar;
        this.indexAvatar = index
        
    },
    
    addContact(){
        
        this.newContact.name = this.newName;

        if(this.newName.trim() != "" && this.newContact.avatar != ""){

            this.contacts.push({...this.newContact});
            
            this.popUpNewContact = false
            
            this.newName="";
            this.newContact.avatar=""
            this.choosedAvatar=false
        }


        
        this.countMessages = []

        this.contacts.forEach(el=>{
            this.countMessages.push(el.messages.length);
        })

    },

    addingContact(){
        this.popUpNewContact = true
    },





    //delete single message
    deleteMessage(contactIndex, messageIndex) {

        this.contacts[contactIndex].messages.splice(messageIndex, 1);
    },

    //delete all chat's messages 
    deleteMessages(contactIndex){
        this.contacts[contactIndex].messages = [];
    },

    //delete chat
    deleteChat(contactIndex){
        this.contacts.splice(contactIndex, 1);

    },


    //to activate dark mode
    activateDark(){
        if(this.darkMode == false){
            this.darkMode = true;
        } else {
            this.darkMode = false
        }
    },
    splashOn(){
        this.splash = false
    }
    
},
mounted(){
    
    
    this.contacts.forEach(contact => {
        this.arrayUrlAvatar.push(contact.avatar)
        ;
    });


    //time in contact list
    this.contacts.forEach(contact => {
        contact.messages.forEach(message => {

            const date = message.date;
            const time = date.split(" ");
            const hour = time[1].slice(0,5);
            message.date = hour 
        });
    });

    setTimeout(this.splashOn,1000)
    

  }
}).mount('#app')

  