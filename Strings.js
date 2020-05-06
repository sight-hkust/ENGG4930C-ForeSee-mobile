// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

let Strings = new LocalizedStrings({
    en:{
        login: "Login",
        email: "Email",
        password: "Password"
    },
    zh: {
        login: "Login",
        email: "Email",
        password: "Password"
    }
});

export default Strings;
