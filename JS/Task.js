// Frequency of each element, remove duplicates from an array (no Set),  Find the missing number in a sequence,
//   Find the intersection of two arrays, Find the union of two arrays (no duplicates) 


 



//  day-7
// frequency of each element
let fruits=['apple','orange', 'banana','apple','grapes','apple','banana','papaya','orange']
let freq={}

for(let fruit of fruits){
    if(freq[fruit]){
        freq[fruit]++
    }else{
        freq[fruit]=1
    }
}
console.log(freq)

// remove duplicates from an array (no Set) 
let dup=[1,2,3,4,2,4,5]
let unique=[]

for(let i=0;i<dup.length;i++){
    let found=false
    for(let j=0;j<unique.length;j++){
        if(dup[i]===unique[j]){
            found=true
            break
        }
    }
        if(!found){
            unique.push(dup[i])
        }
    
}
console.log(unique)


//  Find the missing number in a sequence 
let mis=[1,2,3,4,6,7]

let n=mis.length+1
let expectedsum=(n*(n+1))/2   

let actualSum=0
for(let i=0;i<mis.length;i++){
    actualSum += mis[i]
}

let missing=expectedsum-actualSum
console.log(missing)



//  Find the intersection of two arrays 
let ar=[1,2,3,4,5]
let ar1=[4,5,6,7,8]

let intersection=[]

for(let i=0;i<ar.length;i++){
    for(let j=0;j<ar1.length;j++){
        if(ar[i]===ar1[j]){
            intersection.push(ar[i])
        }
    }
}
console.log(intersection)


// Find the union of two arrays (no duplicates) 
let arr=[1,2,3,4,5]
let arr1=[4,5,6,7,8]

let union=[]

for(let i=0;i<arr.length;i++){
    union.push(arr[i])
}

for(let i=0;i<arr1.length;i++){
    let found=false
    
    for(let j=0;j<union.length;j++){
        if(arr1[i]===union[j]){
            found=true
            break
        }

    }
    if(!found){
        union.push(arr1[i])
    }
}
console.log(union)



