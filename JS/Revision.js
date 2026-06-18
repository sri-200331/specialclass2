// Palindrome ,Reverse a string, check prime no., factorial , 2nd smallest elemnt,
//  sum of 2 is equal to target,move all zeros to end, 2nd largest no., reverse an array, smallest no. in an array,
// count odd an even number in an array



 day-1
 
// Palindrome
let words='madam'
let isPalindrome=true

for(let i=0;i<words.length/2;i++){
    if(words[i]!==words[words.length-1-i]){
        isPalindrome=false
        break
    }
}
console.log(isPalindrome?'Palindrome':'Not a palindrome')


// Reverse a string
let str='hello'
let reversed=''

for(let i=str.length-1;i>=0;i--){
    reversed+=str[i]
}

console.log(reversed)


// check Prime Number
let prime=5
let isPrime=true

for(let i=0;i<prime;i++){
    if(prime%2==0){
        isPrime=false
        break
    }
}

console.log(isPrime?'prime':'not a prime')



// factorial
let factor=4
let fact=1

for(let i=1;i<=factor;i++){
    fact*=i
}
console.log(fact)


// 2nd smallest element
let small=[10,20,30,40,50]
let first=Infinity
let second=Infinity

for(let i=0;i<small.length;i++){
    if(small[i]<first){
        second=first
        first=small[i]
    }else if(small[i]<second && small[i]!==first){
        second=small[i]
    }
}
console.log(second)









day-3

// sum of 2 is equal to target
let num=[1,2,3,4,5]
let target=6

for(let i=0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
        if(num[i]+num[j]==target){
            console.log([i,j])
        }
    }
}



// move all zeros to the end
let arr=[10,0,3,0,5,78,80,0,4]
let j=0

for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        j++
    }
}
console.log(arr)



// 2nd largest no.
let arr1=[10,20,30,40,50]
let first1=arr1[0]
let second1=arr1[0]

for(let i=0;i<arr1.length;i++){
    if(arr1[i]>first1){
        second1=first1
        first1=arr1[i]
    }else if(arr1[i]>second1 && arr1[i]!==first1){
        second1=arr1[i]
    }
}
console.log(second1)


// reverse an array
let rev=[1,2,3,4,5]
let reversed1=[]

for(let i=rev.length-1;i>=0;i--){
    reversed1.push(rev[i])
}
console.log(reversed1)


// smallest no. in array
let smal=[10,20,30,40]
let min =smal[0]

for(let i=0;i<smal.length;i++){
    if(smal[i]<min){
        min=smal[i]
    }
}
console.log(min)






// day-6
// count odd and even no. in an array