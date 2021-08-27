import { ChangeEventHandler } from "react";
import { Input, InputAdornment, TextField } from '@material-ui/core';

interface RepeatProps {
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const Repeat = (props: RepeatProps) => {
    const { onChange, name } = props;
    return (
        // <span>Every <input type="number" min={1} onChange={onChange}></input> {name}(s)</span>
        <Input
            defaultValue={1}
            type="number"
            onChange={onChange}
            startAdornment={<InputAdornment position="start">Every</InputAdornment>}
            endAdornment={<InputAdornment position="end">{`${name}(s)`}</InputAdornment>}
            inputProps={{ min: 1 }}
        />
    );
}

export default Repeat;