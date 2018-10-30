export default {
  name:({a,b})=>{
    console.log(a,b);
  },

  // 
  alert:({title})=>{
    window.alert(title)
  },

  fib:(num)=>{
    if(num==0||num==1){
      return num
    }
    return fib(num-1)+fib(num-2);
  }

  // 
}