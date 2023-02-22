import React, {useForm} from "react-hook-form";
import "./item.css"



const FormularioDePago = () => {

    
    const {register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        
    }

return (
    <div>
        
        
        <form className="formulariodepago" onSubmit={handleSubmit(onSubmit)} >
            <br />
            <div>
            <label className="pago">Nombre:</label>
            <input type="text" id="nombre" {...register('nombre')}/>
            </div>
            <br />
            <div>
            <label className="pago">Apellido:</label>
            <input type="text" id="apellido" {...register('apellido')} />
            </div>
            <br />
            <div>
            <label className="pago">Tarjeta:</label>
            <input type="text" id="tarjeta" {...register('tarjeta')}/>
            </div>
            <br />
            <div>
            <label className="pago">Cuotas:</label>
            <select id="cuotas">
                <option value="1">1</option>
                <option value="3">3</option>
                <option  value="6">6</option>
                <option value="12">12</option>
            </select>
            </div>
            <br/>
            <div>
            <label className="pago">Vencimiento:</label>
            <input type="text" id="vencimiento" {...register('vencimiento')}/>
            </div>
            <br />
            <div>
            <label className="pago">Codigo seguridad:</label>
            <input type="text" id="codigo" {...register('Codigo seguridad')}/>
            </div>
            <br />
            <div>
            <label className="pago">Telefono:</label>
            <input type="text" id="telefono" {...register('telefono')}/>
            </div>
            <br />
            <div>
            <label className="pago">Email:</label>
            <input type="text" id="email" {...register('Email')}/>
            </div>            
            <br />
            
        </form>
    </div>
)
}




export default FormularioDePago