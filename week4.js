let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(let i=0;i<=9;i++){
    if(names[i][0]=='j'|| names[i][0]=='J'){
        console.log('Goodbye'+' '+names[i])
    }
    else{
        console.log('Hello'+' '+names[i])
    }
}