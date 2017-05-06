function log(first,second){
    console.log(this.name,first,second);
}
Function.prototype.mybind = function(thisObj){
   let that = this;
   var args = Array.prototype.slice.call(arguments,1);
   return function(){
       var currentArgs = Array.prototype.slice.call(arguments,0);
       that.apply(thisObj,[...args,...currentArgs]);
   }
}
var log1 = log.mybind({name:'1'},'老大');
//log1();

/*var log2 = log1.mybind({name:'2'},'老大');*/
log1('2号');
