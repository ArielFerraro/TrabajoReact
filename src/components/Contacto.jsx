import React, {useForm} from "react-hook-form";
import "./item.css"



const Contacto = () => {

    const {register, handleSubmit } = useForm();

        const onSubmit = (data) => {
            console.log(data);
        }



    return (
        <div>
            <h1>Contacto</h1>
            <p>No te quedes con dudas, contactanos por cualquier consulta que tengas:</p>
            <form className="formulario" onSubmit={handleSubmit(onSubmit)} >
                <div>
                <br />
                <label>Nombre:</label>
                <input type="text" {...register('nombre')}/>
                </div>
                <br />
                <div>
                <label>Apellido:</label>
                <input type="text" {...register('apellido')} />
                </div>
                <br/>
                <div>
                <textarea name="" id="" cols="30" rows="10" {...register('informacion')}></textarea>
                </div>
                <input type="submit" value="Enviar"/>
            </form>
            
        </div>
    )
}


export default Contacto;