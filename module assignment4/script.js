 var array=["priya","John","jeni","muki"];
 for (i in array){
 	 checkChar=array[i];
     if(checkChar[0]=="j" || checkChar[0]=="J"){
     	console.log("Goodbye " + " "+ array[i]);
     }
     else{
     	console.log("Hello Someone");
     }
 }
