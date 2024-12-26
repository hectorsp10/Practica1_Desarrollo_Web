import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingView() {
    const navigate = useNavigate();

    useEffect(() => {
        // Configurar el temporizador de redirección
        const timeout = setTimeout(() => {
            navigate('/home'); // Reemplaza '/home' con la ruta de tu página principal
        }, 5000);

        // Limpiar el temporizador al desmontar el componente
        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <div className="landing-container">
            <h1>Bienvenido a Nuestra Página</h1>
            <p>Serás redirigido automáticamente en 5 segundos...</p>
        </div>
    );
}

export default LandingView;