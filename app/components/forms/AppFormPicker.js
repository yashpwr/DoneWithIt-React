import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({items, name, placeholder}) {

    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <ErrorMessage visible={touched[name]} error={errors[name]} />  
        </>
    );
}

export default AppFormPicker;