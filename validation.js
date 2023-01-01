function calculateBMi(){
    var height = document.getElementById('height').value
    var weight = document.getElementById('weight').value
    var c =  weight / ((height/100) * (height/100)).toFixed(2)
    var d = (Math.round(c * 100) / 100).toFixed(2);
   // console.log(d)
   var status =''
    document.getElementById('result').innerText = 'BMI is ' +d
    if(d<=18.5 ){
        status='Underweight'
    }
    else if(d>=18.5 && d<25){
        status='Normal'
    }
    else if(d>=25 && d<=39.9){
        status='Overweight'
    }
    else{
        status='Obase'
    }
    document.getElementById('resultStatus').innerText = 'Result Staus is: You are ' +status
}