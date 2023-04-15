const counterIncrease=()=>{
    return{
       type:"COUNTER-INCREASE",
    }
}

const counterDecrease=()=>{
    return{
        type:"COUNTER-DECREASE",
    }
    }

export default{counterDecrease,counterIncrease};