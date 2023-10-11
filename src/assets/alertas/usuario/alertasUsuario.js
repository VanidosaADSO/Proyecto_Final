import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const useAlertasUsuario = () => {
    const navigate = useNavigate();

    const mostrarAlerta = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario registrado con exito!',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            navigate('/listarUsuario');
        })
    };
    return mostrarAlerta
}

export default useAlertasUsuario;
