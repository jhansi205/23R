var input=5;
function missingNumber(arr)
{
    let expected_sum=0;
    let actual_sum=0;
    for(i=0;i<arr.length;i++){
       expected_sum+=arr[i];
      
       
    }
    for(i=1;i<=input;i++){
        actual_sum+=i;
       
    }
    let missing_number=actual_sum-expected_sum;
    console.log(`${missing_number} is missing number `)
}
missingNumber([5,3,1,4]);

