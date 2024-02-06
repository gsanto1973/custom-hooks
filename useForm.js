import { useState } from "react";

export const useForm = (initialForm = {}) => {
    //
    const [formState, setFormState] = useState(initialForm)
    //const onInputChange = (event) => {
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        //console.log({ name, value });
        setFormState({
            ...formState,
            [name]: value
            // Propiedas computadas de Javascript
            // de name obtiene el nombre con [ name ]
        })
    }
    //
    const onResetForm = () => {
        setFormState(initialForm);
    }
    return {
        ...formState, // se mandan desestructurados los campos que se reciben
        formState,
        onInputChange,
        onResetForm
    }
}
