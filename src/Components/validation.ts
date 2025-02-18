import * as Yup from 'yup'

export const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    mobile: Yup.string().matches(/^\d*$/, "Must be numeric").required('Mobile is required'),
    password: Yup.string()
        .min(8, "Must be at least 8 characters long")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/\d/, "Must include at least one numeric digit")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must include at least one special character")
        .required("Password is required"),
});