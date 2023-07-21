<template>
    <div class="modal-wrapper" @click="closeModal" v-if="isVisible">
        <div class="modal-class">
            <slot>

            </slot>
            <div class="close-icon" @click="closeModal">X</div>
            <button type="button" @click.prevent="closeModal" class="close-button">Закрыть</button>
        </div>
    </div>
    <div v-else-if="isSuccess && !isVisible" class="success-modal">
        <h1>Успешно</h1>
        <button type="button" @click.prevent="backHome">На главную</button>
    </div>
</template>

<script>
    export default{
        name:'ModalComponent',
        props:{
            isVisible:{
                type:Boolean,
                default: false,
            },
            isSuccess:{
                type: Boolean,
                default:false,
            }
        },
        methods: {
            closeModal(evt){
                const clickElement = evt.srcElement.classList.value;
                if(clickElement === 'modal-wrapper'){
                    this.$emit('closeModal') 
                }
                else if(clickElement === 'close-button' || clickElement === 'close-icon'){
                    console.log(evt.srcElement.classList)
                    this.$emit('closeModal') 
                }
                  
            },
            backHome(){
                this.$router.push('/')
            }
        },
    }
</script>

<style scoped>
.modal-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
}
.modal-class{
    animation: myAnim 1s ease 0s 1 normal forwards;
    position: fixed;
    top:15%;
    left: 35%;
    z-index: 2;
    padding: 15px;
    border: 1px solid #ddd;
    text-align: center;
    background-color: #04AA6D;
    border-radius: 5px;
    max-width: 30%;
    max-height: 28%;
    box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  }
  .success-modal{
    position: absolute;
    left: 35%;
    bottom: 60%;
    width: 30%;
    height: 150px;
    padding: 15px;
    background-color: #04AA6D;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  }
  button{
    border-radius: 15px;
    border-color: white;
    border-style: none;
    padding: 8px;
    text-align: center;
    font-size: 20px;
    
  }
  button:active{
    background-color: rgb(18, 248, 18);
  }
  
 
  @keyframes myAnim {
	0% {
		animation-timing-function: ease-in;
		opacity: 1;
		transform: translateY(-45px);
	}

	24% {
		opacity: 1;
	}

	40% {
		animation-timing-function: ease-in;
		transform: translateY(-24px);
	}

	65% {
		animation-timing-function: ease-in;
		transform: translateY(-12px);
	}

	82% {
		animation-timing-function: ease-in;
		transform: translateY(-6px);
	}

	93% {
		animation-timing-function: ease-in;
		transform: translateY(-4px);
	}

	25%,
	55%,
	75%,
	87% {
		animation-timing-function: ease-out;
		transform: translateY(0px);
	}

	100% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateY(0px);
	}
}
.close-icon{
    position: absolute;
    left: 96%;
    bottom: 88%;
    cursor: pointer;
    color:red;
  }
</style>