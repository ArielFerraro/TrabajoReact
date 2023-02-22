import React, {useForm} from "react-hook-form";
import "./item.css"



const Contacto = () => {

    const {register, handleSubmit } = useForm();

        const onSubmit = (data) => {
            console.log(data);
        }



    return (
        <div>
            
            <form className="formulario" onSubmit={handleSubmit(onSubmit)} >   
                <div className="casillas">
                        <h1>Contacto</h1>
                        <p>No te quedes con dudas,<strong> contactanos por cualquier consulta que tengas:</strong></p>
                        <label>Nombre:</label>
                        <input type="text" {...register('nombre')}/>
                        <br />
                        <label>Apellido:</label>
                        <input type="text" {...register('apellido')} />
                        <br/>
                        <textarea name="" id="" cols="30" rows="10" {...register('informacion')}></textarea>
                        <br />
                        <input type="submit" value="Enviar"/>
                </div>
            </form>
            
        </div>
    )
}


export default Contacto;