function solution(str, ending){
    tamanhostr = str.length
    tamanhoending = ending.length
    if(tamanhoending>tamanhostr){
        return false
    }
    else{
        if(str.slice(tamanhostr-tamanhoending)===ending){
            return true
        }
        else{
            return false
        }
    }
    
}
console.log(solution('abcde', 'asdscde'))
console.log(solution('abcde', 'abc'))