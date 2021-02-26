const inputToTranslate = document.querySelector(".totranslate");
const inputTranslated = document.querySelector(".translated");

function translateTextBinary(word){
    let aux="";
    let cosa="\ ";
    let words=[" ", "!", '"', "#", "$", "%", "&", "´", "{", "}", "*", "+", ",", "-", ".", "/","0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","[", cosa, "]", "^", "_", "'", 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let number=[32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];

    let table=[64,32,16,8,4,2,1];

    let binary=[];

    for(let i of word){
        for(let j of words){
            if(i == j){
                aux=number[words.indexOf(i)];
                binary.push(aux)
            }
        }
    }

    //selection
    let aux2=0;
    let table_selected=[]
    let contador=0;
    let result="";
    let realone="";
    for(let i = 0; i < binary.length;i++){
        result+="0";
        for(let j = 0; j<7;j++){
            if(contador==0){
                if(binary[i]>=table[j]){
                    aux2=binary[i]-table[j];
                    table_selected.push(table[j])
                    contador++;
                }else if(binary[i]<=table[j]){
                    contador+=0;
                }
            }else if(aux2>=table[j]){
                aux2=aux2-table[j];
                table_selected.push(table[j]);
            }
        }
        console.log(table_selected) 
        for(let x of table){
            let confirm=false
            for(let y of table_selected){
                if(x == y){
                    result+="1";
                    confirm=true
                }
            }
            if(confirm == false){
                result+="0"
                confirm=true
            }
        }
        table_selected=[];
        contador=0;
        realone+=result+" ";
        result="";
    }
    return realone.trim();
}

function translateBinaryText(binarycode){
    let cosa="\ "
    let words=[" ", "!", '"', "#", "$", "%", "&", "´", "{", "}", "*", "+", ",", "-", ".", "/","0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","[", cosa, "]", "^", "_", "'", 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let number=[32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]
    let binarylist=[]
    let container=""

    for(let i of binarycode){
        if(i != " "){
            container+=i;
        }

        if(container.length == 8){
            binarylist.push(container);
            container="";
        }
    }

    let contador=8;
    let take="";
    let word="";
    let suma =0;
    let aux=0;
    for(let i of binarylist){
        for(let j of i){
            contador--;
            if(j == "1"){
                take+=contador.toString();
            }
            if(contador == 0){
                contador = 8;
                suma=0
                for(let x of take){
                    aux = 2 ** parseInt(x)
                    suma+=aux;
                }
                for(let y of number){
                    if(suma == y){
                        let final = number.indexOf(suma);
                        word += words[final];
                    }
                }
                take="";

            }
        }
    }
    return word.trim();
}
inputToTranslate.addEventListener("keyup", ()=>{
    let value = inputToTranslate.value;
    let a = translateTextBinary(value.toLowerCase());
    inputTranslated.value = a;
})

inputTranslated.addEventListener("keyup", ()=>{
    let value = inputTranslated.value;
    let b = translateBinaryText(value);
    inputToTranslate.value = b;
})

