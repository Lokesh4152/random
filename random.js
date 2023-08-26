const arr=[3,4,2,5,9];

//const output=arr.filter((x)=>{return x < 9;})
                        
//console.log(output);

function findSum(arr){
    let max=0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] > max){
            max=arr[i];
        }
    }
    return max;
}
console.log(findSum(arr));


const output = arr.reduce(function(max,curr){
    if(curr > max){
        max= curr;
    }
    return max;
},0)
console.log(output);