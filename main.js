const calculadora = function(){
    let valors = Math.max(this.primer_v, this.segundo_v, this.tercer_v, this.cuarto_v)
    if (valors >= 5){
        let suma = this.primer_v + this.segundo_v + this.tercer_v + this.cuarto_v
        let resta = this.primer_v - this.segundo_v - this.tercer_v - this.cuarto_v
        let multi = this.primer_v * this.segundo_v * this.tercer_v * this.cuarto_v
        let divi = valors/4
        return (` El numero mayor es ${valors}\n la suma es ${suma}\n la resta es ${resta}\n la multiplicacion es ${multi}\n la division es ${divi}`)
    }else{
        return (` El numero mayor es ${valors}`)
    }

}
const data = new Object ({
    primer_v : 25,
    segundo_v : 3,
    tercer_v : 2,
    cuarto_v : 1,
});

console.log(calculadora.call(data));