import {useState,  useEffect} from 'react';

function useForm (callBack, Validate) {

        const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    function handleSubmit(event){
        event.preventDefault();

        setErrors(Validate(values));
        setIsSubmitting(true);
    };

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && isSubmitting){
           callBack(values);
        }
    }
    );

    return {handleChange, values, handleSubmit, errors};
}

export default useForm;