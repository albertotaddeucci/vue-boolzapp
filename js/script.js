
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

        //search contact
        inputSearch: "",
        elementsFound: [],
        notFound: false,

        

        chatIndex: 0,
        messageToSend: "",
        
       
        myMessage: {
                        
            date: 'xxx',
            message: '',
            status: 'sent'

        },

        answer: {

            date: 'xxx',
            message: 'Ok',
            status: 'Received'

        }

      
    }
  },
  methods: {
    selectChat(index){
        this.chatIndex = index
        this.popUp = false
    },
    riceveAnswer(){

        this.contacts[this.chatIndex].messages.push({...this.answer})

        
    },
    sendMessage(messageToSend){

        

        if(messageToSend.trim() != ""){

            this.myMessage.message = messageToSend
    
            this.contacts[this.chatIndex].messages.push({...this.myMessage})
    
            this.messageToSend = ""
    
            setTimeout(this.riceveAnswer,1000)

        }


    },
    search(input){
        this.elementsFound = []
        this.notFound = false
        this.contacts.forEach((element,index) => {
           const toFilter = element.name.toLowerCase()
           const filtered = toFilter.includes(input.toLowerCase())
           if(filtered){
                this.elementsFound.push(index)

           } else {
            this.notFound = true
           }

        });
    },

    deleteMessage(contactIndex, messageIndex) {

        this.contacts[contactIndex].messages.splice(messageIndex, 1);
    },

    deleteMessages(contactIndex){
        this.contacts[contactIndex].messages = []
    },
    deleteChat(contactIndex){
        this.contacts.splice(contactIndex, 1)

    },
      
  },
}).mount('#app')





// per date da riguardare


//   mounted(){
//       this.contacts.forEach(contact => {
//           contact.messages.forEach(message => {
//               const date = new Date(message.date);
//               const formattedDate = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
//               console.log(formattedDate);
//           });
//       });
//         this.contacts.forEach(element => {

            
//             // element.messages.forEach(el=>{
//             //     let date = new Date(toString(el.date))
//             //     let b = date.toISOString()
//             //     const a =  DateTime.fromISO(b).toFormat('T'); 
//             //     console.log(a)
//             // })
//         })
        
        

//   }
  