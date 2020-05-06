// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

let Strings = new LocalizedStrings({
    en:{
        login: "Login",
        email: "Email",
        password: "Password",
        signUp: "Sign Up",
        leftEye: "Left Eye",
        rightEye: "Right Eye",
        records: "Records",
        rightEyeLabel: "Right Eye Myopia",
        leftEyeLabel: "Left Eye Myopia",
        add: "Add",
        monthOfTest: "Month",
        yearOfTest: "Year"
    },
    zh: {
        login: "Login",
        email: "Email",
        password: "Password",
        signUp: "Sign Up",
        leftEye: "Left Eye",
        rightEye: "Right Eye",
    }
});

export default Strings;
