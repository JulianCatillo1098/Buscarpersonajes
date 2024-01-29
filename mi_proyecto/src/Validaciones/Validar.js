

const validarNumeroMax = (valorNumero) => {

    return valorNumero<=42 && valorNumero>=1
    
}


const validarPaginacion = (valorPaginacion) => {

    return valorPaginacion<=10 && valorPaginacion>0
    
}

const validarNombre = (nombre) => {

    return nombre.length >=3
    
}



export {validarNumeroMax,
    validarPaginacion,validarNombre}
