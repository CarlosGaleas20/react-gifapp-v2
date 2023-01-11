import React, { useState } from "react";

const AddCategory = ({onSendCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newValue = inputValue.trim();
        if ( newValue.length <= 1 ) return; 
        onSendCategory( newValue );
        setInputValue('');
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search Gifs"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    );

}

export default AddCategory;