


document.addEventListener('DOMContentLoaded', function() {

   
    const formularios = document.querySelectorAll('form');
    formularios.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            const inputs = form.querySelectorAll('input');
            let todosLlenos = true;
            
            
            inputs.forEach(function(input) {
                if (input.value === '') {
                    todosLlenos = false;
                }
            });
            
            if (!todosLlenos) {
                alert('Por favor completa todos los campos');
            } else {
                alert('¡Formulario enviado correctamente!');
            }
        });
    });

    const tarjetas = document.querySelectorAll('div[style*="border"]');
    tarjetas.forEach(function(tarjeta) {
        tarjeta.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s';
        });
        
        tarjeta.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

 
    const botones = document.querySelectorAll('button');
    botones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

});