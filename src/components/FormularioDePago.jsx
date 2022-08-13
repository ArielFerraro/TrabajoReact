import React, {useForm} from "react-hook-form";
import "./item.css"



const FormularioDePago = () => {

    const {register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        
    }

return (
    <div>
        <h1>Formulario De Pago</h1>
        
        <form className="formulario" onSubmit={handleSubmit(onSubmit)} >
            <br />
            <div>
            <label className="pago">Nombre:</label>
            <input type="text" {...register('nombre')}/>
            </div>
            <br />
            <div>
            <label className="pago">Apellido:</label>
            <input type="text" {...register('apellido')} />
            </div>
            <br />
            <div>
            <label className="pago">Tarjeta:</label>
            <input type="text" {...register('tarjeta')}/>
            </div>
            <br />
            <div>
            <label className="pago">Cuotas:</label>
            <select>
                <option value="1">1</option>
                <option value="3">3</option>
                <option selected value="6">6</option>
                <option value="12">12</option>
            </select>
            </div>
            <br/>
            <div>
            <label className="pago">Vencimiento:</label>
            <input type="text" {...register('vencimiento')}/>
            </div>
            <br />
            <div>
            <label className="pago">Codigo seguridad:</label>
            <input type="text" {...register('Codigo seguridad')}/>
            </div>
            <br />
            <input type="submit" value="Pagar"/>
        </form>
    </div>
)
}




export default FormularioDePago