

export function numberFormat(number) {
    if (number > 1000000000) {
        return  (number / 1000000000).toFixed(2) + 'B'
    } else if (number > 1000000) {
        return (number / 1000000).toFixed(2) + 'M'
    }else if (number > 1000){
        return number.toString().replaceAll(/\d{3}\./g, ',$&')
    }
    return number.toString();
}





// export function filterTokensByName(tokens, searchedTokenName){
//     if (searchedTokenName !== ''){
//         return tokens.filter((token)=>{
//             return token.name.toLowerCase().startsWith(searchedTokenName.toLowerCase())
//         })
//     }
//     return tokens
// }