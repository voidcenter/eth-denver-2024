import { useEffect, useRef } from "react";

export default function IntInput({value, setValue, minValue, maxValue, units}: any) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.width = `${value.length + 2}ch`;
        }
    }, [value]);

    function handleChange(event: any) {
        const newValue = event.target.value.replace(/\D/g, '');
        if (newValue === "") {
            setValue("");
            return;
        } 
        
        if (parseInt(newValue) < minValue) setValue(minValue.toString());
        else if (parseInt(newValue) > maxValue) setValue(maxValue.toString());
        else setValue(newValue);
    }

    function handleBlur() {
        if (value === "") {
            setValue(minValue.toString());
        }
    }

    function hangleKeyDown(event: any) {
        if (event.key === "Enter" && value === "") {
            setValue(minValue.toString());
        }
    }

    return (
        <div className="flex pl-1 pr-2 border rounded-[0.7rem]">
            <input 
                className="input rounded-[0.7rem] text-center"
                ref={inputRef}
                type="text" 
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={hangleKeyDown}
                style={{width: `${value.length + 2}ch`}}
            />
            <div className="units flex items-center ml-2 text-dark-gray">{units}</div>
        </div>
    );
}