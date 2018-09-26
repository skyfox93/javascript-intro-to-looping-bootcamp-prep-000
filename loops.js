function forLoop(items){for(var i=0;i<25;i++){if(i==1){items.push("I am one strange loop.");} else{items.push(`I am ${i} strange loops.`);}}}

function whileLoop(n){while(n>0){console.log(n);n--;if(n<1){console.log('done');}}}

function doWhileLoop(list){do{list.shift();} while(list.length>0);return list}

