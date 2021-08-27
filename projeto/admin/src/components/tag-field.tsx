import { FunctionField, useRecordContext } from "react-admin";

export function format(s: string): string {
    const words = s.split('.')
    if (words.length === 1) {
        return '*';
    }
    words.shift();
    return words.join('.');
}

interface TagProps {
    ltreeName?: string;
    label: string;
    record?: any,
    source?: string,
}

const TagField = (props: TagProps) => {
    const path = props.ltreeName ?? 'path';
    console.log(props);
    return (
        <FunctionField source={props.source} record={props.record} label={props.label} render={(record: any) => format(record[path])} />
    )
};

export default TagField;
