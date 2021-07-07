import './styles.css';

// Self-invoked function with Module Pattern  
( () => {

    // HTML references
    const form = document.querySelector('form'),
          mainInfo = document.querySelector('h4'),
          inputNum = document.querySelector('input'),
          inputSubmit = document.querySelector('.revisar'),
          btnLetra = document.getElementById('letra'),
          btnPosicion = document.getElementById('posicion');
    
    // Global variables
    let posicion, letra, mode = true;
    const newDiv = document.createElement('div'),
          infoDiv = document.createElement('div'),
          letrasEs = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    // Functions
    const getRandomWord = () => {

        posicion = Math.floor(Math.random() * letrasEs.length);
        return letrasEs.charAt(posicion);    
    }

    const letraHtml = () => {

        letra = getRandomWord();
        posicion++;
    
        const htmlLetra = `
        <h2> ${ letra } <h2>
        `;

        newDiv.innerHTML = htmlLetra;
    
        form.insertBefore( newDiv, inputNum );
    }

    const numeroHtml = () => {

        letra = getRandomWord();
        posicion++;
    
        const htmlNumero = `
            <h2> ${ posicion } <h2>
        `;

        newDiv.innerHTML = htmlNumero;
    
        form.insertBefore( newDiv, inputNum );
    }

    const error = ( message ) => {

        const errorP = `
            <p> ${ message } <p>
        `;

        infoDiv.innerHTML = errorP;
        infoDiv.classList = 'error';
        form.append( infoDiv );
    }

    const success = ( message ) => {

        const successP = `
            <p> ${ message } <p>
        `;

        infoDiv.innerHTML = successP;
        infoDiv.classList = 'success';
        form.append( infoDiv );
    }

    // Events
    inputSubmit.addEventListener('click', ( event ) => {
        event.preventDefault();

        const res = inputNum.value;

        if ( mode ) {

            if ( res == posicion ){
                success( `Correcto, la ${ letra } ocupa la posición ${ res } en el alfabeto español`);
                letraHtml();
            } else if ( res == '' ) {
                error('Campo vacio, introduce un valor');
            } else {
                error('incorrecto, intentalo de nuevo');
            }

        } else {

            if ( res.toUpperCase() == letra ){
                success( `Correcto, la ${ posicion } es ocupada por la ${ letra } en el alfabeto español`);
                letraHtml();
            } else if ( res == '' ) {
                error('Campo vacio, introduce un valor');
            } else {
                error('incorrecto, intentalo de nuevo');
            }

        }
    })

    btnLetra.addEventListener('click', () => {

        if ( mode ) { return; }

        btnPosicion.classList.remove('btnActive');
        btnPosicion.classList.add('btnChange');

        btnLetra.classList.remove('btnChange');
        btnLetra.classList.add('btnActive');

        mainInfo.innerHTML = `Introduzca la posición de la 
            siguente letra en el alfabeto`;

        letraHtml();
        mode = true;
    })

    btnPosicion.addEventListener('click', () => {

        if ( !mode ) { return; }
        
        btnLetra.classList.remove('btnActive');
        btnLetra.classList.add('btnChange');

        btnPosicion.classList.remove('btnChange');
        btnPosicion.classList.add('btnActive');
        
        mainInfo.innerHTML = `Introduzca la letra correspondiente
        a la posición del alfabeto indicada`;

        numeroHtml();
        mode = false;
    })

    // Init the app
    letraHtml();

})();




    


