const tabuada = Number(prompt("Digite um número de 1 a 10"));
if(tabuada <= 10 && tabuada >=1){
const num = [1, 2, 3, 4, 5, 6, 7, 8,9,10]
    for(let i in num){
        // console.log(num[i]*tabuada);
        // console.log("-".repeat(20));
        document.write(num[i]*tabuada,"<br/>","-".repeat(20),"<br/>");
        
    }
}else{
    alert("Recarregue a página e digite um número de 1 até 10");
}