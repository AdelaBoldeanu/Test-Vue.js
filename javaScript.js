var app = new Vue({
  el: '#app',
  data: {
    modal: false,
    step: 1,
    totalsteps: 3,
      errors:[],
    form:{
        name:null,
        email:null,
        phone:null,
        message:null,
        upload:null
        }
  },
    methods:{
        modalAction(){      
            if(this.modal == false){
                    this.modal = true
                }
            else{
                    this.modal = false
                }
        },
        
        nextStep:function()
        {
            if(this.step == 1)
                {
                    if(!this.form.name)
                        {
                            this.errors = 'Please fill out your name';
                            return false;
                        }
                }
            if(this.step == 2)
                {
                    if(!this.form.phone)
                        {
                            this.errors = 'Please fill out your phone number';
                            return false;
                        }
                    if(!this.form.email)
                        {
                            this.errors = 'Please fill out your email address';
                            return false;
                        }
                }
            this.step++;
        },
        
        prevStep:function()
        {
            this.step--;
        },
        sendEnquiry:function()
        {
            if(this.step == 3)
                {
                    if(!this.form.message)
                        {
                            this.errors = 'Please fill out your message';
                            return false;
                        }
                    if(!this.form.upload)
                        {
                            this.errors = 'Please upload your file';
                            return false;
                        }
                }
            this.errors = null;
            alert('this has been sent');
        }
    }
    
})
