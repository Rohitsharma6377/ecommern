export const registerFormControls = [
    {
        name: 'userName', // changed from 'userName' instead of 'User Name'
        label: 'User Name',
        type: 'text',
        placeholder: 'Enter your userName',
        componentType: 'input',
        option: [],
    },
    {
        name: 'email', // changed 'Email' to 'email' to match formData
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your Email',
        componentType: 'input',
    },
    {
        name: 'password', // changed 'Password' to 'password'
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your Password',
        componentType: 'input',
    },
];

export const loginFormControls = [
    {
        name: 'Email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your Email',
        componentType: 'input',
    },
    {
        name: 'Password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your Password',
        componentType: 'input',
    },
];
