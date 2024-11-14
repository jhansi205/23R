var aos=['mom', 'js', 'malayalam', 'html', 'css','dad']
var arr=[]
for(i=0;i<=aos.length-1;i++){
    var low=0;
    var high=aos[i].length-1
    var isPalindrome=true
    while(low<high){
        if(aos[i][low]!=aos[i][high]){
            isPalindrome=false
            break
        }
        low++;
        high--;
    }if(isPalindrome){
        arr.push(aos[i])
    }
}
console.log(arr);
