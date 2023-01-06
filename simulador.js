function calcular(monto_prestamo,cuotas){
    if (cuotas <= 12){

        interes = monto_prestamo * 0.15;
        monto_total = monto_prestamo + interes;
        precio_cuota = monto_total / cuotas;

    }else if (cuotas <= 12){

        interes = monto_prestamo * 0.20;
        monto_total = monto_prestamo + interes;
        precio_cuota = monto_total / cuotas;

    }else if (cuotas > 12 && cuotas <= 24){

        interes = monto_prestamo * 0.25;
        monto_total = monto_prestamo + interes;
        precio_cuota = monto_total / cuotas;

    }else if (cuotas > 24 && cuotas <= 36){

        interes = monto_prestamo * 0.30;
        monto_total = monto_prestamo + interes;
        precio_cuota = monto_total / cuotas;

    }else if (cuotas > 36 && cuotas <= 48){

        interes = monto_prestamo * 0.35;
        monto_total = monto_prestamo + interes;
        precio_cuota = monto_total / cuotas;

    }else if (cuotas > 48 && cuotas <= 60){

        interes = monto_prestamo * 0.40;
        monto_total = monto_prestamo + interes;
        precio_cuota = monto_total / cuotas;

    }else{

        interes = monto_prestamo * 0.45;
        monto_total = monto_prestamo + interes;
        precio_cuota = monto_total / cuotas;

    }

    const r = {
        interes: interes,
        monto_total: monto_total,
        precio_cuota: precio_cuota
    }

    return r;
}

let nombre = prompt('Ingrese su nombre');

while (nombre == ' ' || nombre == ''){
    nombre = prompt('Error, Ingrese su nombre correctamente');
}

let monto_prestamo = parseInt( prompt('Hola '+nombre+'! Bienvenido/a al simulador. Ingrese monto del prestamo:'));
let cuotas_prestamo = parseInt( prompt('Ingrese cantidad de cuotas:'));

r = calcular(monto_prestamo,cuotas_prestamo);

alert(nombre+' gracias por su consulta. Su prestamo con el interes calculado seria de $'+r.monto_total+' y se abonara en '+cuotas_prestamo+' cuotas de $'+r.precio_cuota);



