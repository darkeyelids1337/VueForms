<template>
    <div class="modal-wrapper" @click="clickAway" @mousedown="clickAway($event)">
        <div class="modal-class">
            <slot>

            </slot>
        </div>
    </div>
</template>

<script>
    export default{
        name:'ModalComponent',
        methods: {
            clickAway(evt){
                if(evt.srcElement.classList.value === 'modal-wrapper'){
                    this.$emit('closeModal') 
                }
                  
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
    left: 38%;
    z-index: 2;
    padding: 15px;
    border: 1px solid #ddd;
    text-align: center;
    background-color: #04AA6D;
    border-radius: 5px;
    width: 400px;
    height: 250px;
    box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
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
.modal-class :slotted(div){
    position: relative;
    left: 50%;
    bottom: 3%;
    cursor: pointer;
  }
</style>