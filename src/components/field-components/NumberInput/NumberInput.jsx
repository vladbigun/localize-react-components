import React, {useContext, useState} from 'react';
import './NumberInput.scss';
import {AssetsContext} from "../../../context/AssetsContext";


// eslint-disable-next-line react/prop-types
export const NumberInput = ({value, setValue, label}) => {
    const {assets} = useContext(AssetsContext);
    const inputButtonClick = (e, d) => {
        e.preventDefault();
        if(value !== ''){
            if(value <= 0){
                if(d === 'pl') setValue(parseInt(value) + 1);
            } else{
                if(d === 'pl') setValue(parseInt(value) + 1);
                if(d === 'mn') setValue(parseInt(value) - 1);
            }
        } else{
            setValue(0);
        }
    }
    const onChange = (value) =>{
        if(value > 0) setValue(value);
        else setValue('');
    }
    // eslint-disable-next-line no-unused-vars
    const [focus, setFocus] = useState(false);
    return (
        <>
            <label>{label}</label>
            <div className="lcz-number-input-wrapper">
                <input
                    type="number"
                    value={value}
                    className="lcz-number-input"
                    onChange={
                        (e) => onChange(e.target.value)
                    }
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                {
                    focus &&
                    <div className="lcz-number-input-buttons">
                        <div
                            className="lcz-input-button"
                            onMouseDown={(e) => inputButtonClick(e, 'pl')}
                            style={{'background-image': "url("+assets +"/images/input-arrow.svg)"}}
                        >
                        </div>
                        <div
                            className="lcz-input-button"
                            onMouseDown={(e) => inputButtonClick(e,'mn')}
                            style={{'background-image': "url("+assets +"/images/input-arrow-bottom.svg)"}}
                        >
                        </div>
                    </div>
                }
            </div>
        </>
    );
};
