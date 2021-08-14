import {defaultTheme} from 'react-admin';
import merge from 'lodash/merge';
import {orange, indigo} from '@material-ui/core/colors';


const poliTheme = merge({}, defaultTheme, {
    palette: {
        primary: orange,
    },
    overrides: {
        MuiIconButton: {
            root: {
                color: 'white',
            }
        }
    }
});

export default poliTheme;