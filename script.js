const input = document.getElementById('display')

function display(x){
    input.value += x;
}

function cleared(){
    input.value = '';
}

function calculate(){
    try{
        input.value = eval(input.value)
    } catch{
        alert('invalid syntax')
    }
}