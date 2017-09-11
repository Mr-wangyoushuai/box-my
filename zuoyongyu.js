/*
* @Author: Administrator
* @Date:   2017-09-07 15:40:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-09 17:49:34
*/
// 
// function aa(num1,num2){
// 			return num1*2+num2*3;
// 		}
// 		function bb(num1,num2){
// 			return num1*2-num2*3;
// 		}
// 		function cc(num1,num2){
// 			return num1*2+num2*2;
// 		}
// 		function dd(num1,num2,fn){
// 			return fn(num1,num2);
// 		}
// 映射  map 每个元素同时进行加减乘除等某种操作
       	// function map(arr,fn){
       	// 	var newarr = [];
       	// 	for(var i=0; i<arr.length;i++){
       	// 		newarr[newarr.length]=fn(arr[i]);
       	// 	}return newarr;
       	// }
// filter 符合要求的数据
       		function map1(arr,fn){
       		var newarr = [];
       		for(var i=0; i<arr.length;i++){
       			if(fn(arr[i])){
       			newarr[newarr.length]=arr[i];
       		}
       		}return newarr;
       	}
       	// 
       	// 
// 数组存在某个元素？然后找到它首次出现的位置
       	function indexof(arr,some){
       		for(var i = 0; i<arr.length; i++){
       			if(arr[i]==some){
       				return i;  //--------------------默认undefined
       			}
       		}return -1;
       	} 

// 找到他最后一次出现的位置
// for(var i=arr.length-1;i--){};
   		// function lastindexof(arr,some){
   		// 	for(var i=arr.length-1; i>-1; i--){
   		// 		if(arr[i]=some){
   		// 			return i;
   		// 		}
   		// 	}return -1;
   		// }
   		
//倒叙排列 1 reverse
   		// function daoxu(arr){
   		// 	var newarr=[];
   		// 	for( var i=arr.length-1;i>-1; i--){
   		// 		newarr[newarr.length]=arr[i];

   		// 	}return newarr;
   		// }
// 2
   		function daoxu1(arr){
   			var newarr=[];
   			for( var i=arr.length-1;i>-1; i--){
   				push(newarr,arr[i]);

   			}return newarr;
   		}
   		function push(arr,...value){
   			for(var i=0; i<value.length; i++){
   				arr[arr.length]=value[i];
   			}
   		}

//万能的添加和删除
//del
 		function spliceconcel(arr,pos,num){
 			var newarr=[];
 			for(var i=0; i<arr.length; i++){
 				if(!(i>=pos && i<pos+num)){
 					newarr[newarr.length]=arr[i];
 				}
 			}return newarr;
 		}
// add
 		function spliceadd(arr,pos,...value){
 			var newarr=[];
 			for(var i=0; i<pos;i++){
 				newarr[newarr.length]=arr[i];
 			}
 			for(var i=0; i<value.length; i++){
 				newarr[newarr.length]=value[i];

 			}
 			for(var i=pos; i<arr.length; i++){
 				newarr[newarr.length]=arr[i];

 			}return newarr;
 		}
 		// banchengpin
 		// function splice11(arr,pos,type,num,...value){
 		// 	if(type=='+'){
 		// 		spliceadd(arr,pos,...value);
 		// 		return	spliceadd(arr,pos,...value);
 				 
 		// 	}if (type=='-') {
 		// 		splice(arr,pos,num);
 		// 		return splice(arr,pos,num);
 		// 	}

 		// }
 		function splice(arr,pos,num,...value){
 			var newarr=spliceconcel(arr,pos,num);
 			if(value.length>0){
 				newarr=spliceadd(newarr,pos,...value);
 			}
 			return newarr;

 		}
 		function map(arr,fn){
 			var newarr=[];
 			for(var i=0;i<arr.length;i++){
 				newarr[newarr.length]=fn(arr[i]);

 			}return newarr;
 		}
// some 数组里有某个值 true        false
 		function some(arr,fn){
 			for (var i = 0; i < arr.length; i++) {
 				if(fn(arr[i])){
 					return true;
 				}
 			}
 			return false;
 		}
// every 每一个都符合某种条件 >0 true   else false
 		function every(arr,fn){
 			for (var i = 0; i < arr.length; i++) {
 				if(!fn(arr[i])){
 					return false;
 				}
 			}
 			return true;
 		} 

// -----------------------------------自调用  （function fn（）{}）
// // 自己调用自己 递归函数
		function fn(num){
			if(num<5){
				alert(num);
				fn(++num);
			}
			
		}
// copy array
		function copy(arr){
			var newarr=[];
			for(var i=0; i<arr.length; i++){
				if(typeof arr[i]=='object'){
					newarr[i]=copy(arr[i]);
				}
				else{
					newarr[i]=arr[i];
				}
			}
			return newarr;
		}
 		