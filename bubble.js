var newArr = [];
var  wasSwitch = false;
var bubble = function(arr){


  for(var i = 0; i < arr.length-1; i++ ){
      newArr[0] = arr[i];
      newArr[1] = arr[i+1];

    if(arr[i]>arr[i+1]){
      arr[i+1]  = newArr[0];
      arr[i] = newArr[1];
      wasSwitch = true;
    }
  }


  while (wasSwitch === true){
    for(var j = 0; j < arr.length-1; j++ ){
      newArr[0] = arr[j];
      newArr[1] = arr[j+1];

    if(arr[j]>arr[j+1]){
      arr[j+1]  = newArr[0];
      arr[j] = newArr[1];
      wasSwitch =true;
    } else{
      wasSwitch= false;

    }

  }

  }
  return arr;
};

module.exports = bubble;
