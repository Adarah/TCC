import { TextField } from "@material-ui/core";
import { fieldToTextField, TextFieldProps } from "formik-material-ui";

const TextArea = (props: TextFieldProps) => (
    <TextField
        {...fieldToTextField(props)}
        multiline={true}
    />
);

export default TextArea;