import React from 'react';
import './Wrapper.scss'
import {Color} from "./Color";
import {colors} from "../data/colors";
import {ColorDescription} from "./ColorDescription";



export const Wrapper = ({setBackgroundColor, setCopied}) => {

    return (
        <div className={'wrapper'}>
            {colors.map(color => (
                <div
                    key={color.hex}
                >
                    <Color
                        key={color.name}
                        color={color}
                        setBackgroundColor={setBackgroundColor}
                    />
                    <ColorDescription
                        key={color.id}
                        color={color}
                        setCopied={setCopied}
                    />
                </div>
            ))}
        </div>
    );
};
