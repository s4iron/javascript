var erik={
    nombre:'erik',
    ingeniero:true,
    estudiante:true,
    musico:false,
    programador:true
}

function imprimir(persona){
    console.log(`${persona.nombre} es :`)
    if(persona.ingeniero){
        console.log(`cocinero`);
    }

    if(persona.estudiante){
        console.log(`estudiante`);
    }

    
    if(persona.musico){
        console.log(`musico`);
    }else{
        console.log('musico frustrado');
    }
    
    if(persona.programador){
        console.log(`programador. `);
    }
}