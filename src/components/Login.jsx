import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import 'sweetalert2/dist/sweetalert2.css';

const MySwal = withReactContent(Swal)
export const Login = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    
    const submitHandler = (e)=> {
        
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
        if(email === '' || password === '') return MySwal.fire({icon:'error',
                                                            title: 'Error',
                                                            text: 'Los campos no pueden estar vacíos'});
        if(email !== '' && !regexEmail.test(email)){
           return MySwal.fire({icon:'error',
                            title: 'Error',
                            text: 'Debes escribir una dirección de correo electrónico válida'});
        }
        if(email !== 'challenge@alkemy.org' || password !== 'react'){
           return MySwal.fire({icon:'error',
                        title: 'Error',
                        text: 'Credenciales inválidas'}); 
        }

        //uso de AXIOS
        axios.post('http://challenge-react.alkemy.org',{email, password})
            .then(({data}) => {
                console.log(data)
                localStorage.setItem('token', data.token)
                MySwal.fire({icon:'success',
                        title: 'Grandioso',
                        text: 'Has ingresado exitosamente'});
                navigate('/listado');
            })
            .catch(error =>{
                console.log(error)
                MySwal.fire({icon:'error',
                title: 'Error',
                text: `No pudiste ingresar a la app - ${error}`}); 
            })
    }
    return(
        <>
            {token && <Navigate to='/listado' replace />}
            <div className='container-sm center mt-5 mb-5 centrar'>
                <h2 className='mb-4'>Login</h2>
                <form className='' onSubmit={submitHandler}>
                <div className='mb-3'>
                    <label className="form-label">
                        <span>Correo Electrónico:</span>
                        <input className='form-control' type="email" name="email" />
                    </label>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>
                        <span>Contraseña:</span>
                        <input className='form-control' type="password" name="password" />
                    </label>
                </div>
                <button className='btn btn-warning big' type="submit">Ingresar</button>
                </form>

            </div>

        </>
    )
}