import './formulario-de-evento.estilos.css';
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label/inedx";
import { TituloFormulario } from "../TituloFormulario";

export function FormularioDeEvento() {

    return (
        <form className='form-evento'>
            <TituloFormulario>
                preencha para criar um evento:
            </TituloFormulario>
            <CampoDeFormulario>
                <Label htmlFor="nome">
                    Qual o nome do evento?
                </Label>
                <CampoDeEntrada
                    type="text"
                    id="nome"
                    placeholder='Summer dev hits'
                    name='nomeEvento'
                />
            </CampoDeFormulario>
        </form>
    )
}
