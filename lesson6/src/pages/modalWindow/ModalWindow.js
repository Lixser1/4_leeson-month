import React from 'react';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import classes from "./ModalWindow.module.scss";

const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Email must end with @gmail.com").required("Email is required"),
    password: Yup.string().required("Password is required"),
    password2: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Confirm Password is required"),
});

const ModalWindow = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const submit = (data) => {
        console.log(data);
    };

    const error = (e) => {
        console.error(e);
    };

    return (
        <div className={classes.modal}>
            <h1>Register with</h1>
            <form onSubmit={handleSubmit(submit, error)}>
                <div className={classes.modalWindow}>
                    <div className={classes.div}>
                        <h2>Name</h2>
                        <input
                            type="text"
                            placeholder="Your full name"
                            className={classes.input}
                            {...register("name")}
                        />
                    </div>
                    <div className={classes.div}>
                        <h2>Email</h2>
                        <input
                            type="text"
                            placeholder="Your email address"
                            className={classes.input}
                            {...register("email")}
                        />
                    </div>
                    <div className={classes.div}>
                        <h2>Password</h2>
                        <input
                            type="password"
                            placeholder="Your password"
                            className={classes.input}
                            {...register("password")}
                        />
                    </div>
                    <div className={classes.div}>
                        <h2>Confirm Password</h2>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className={classes.input}
                            {...register("password2")}
                        />
                    </div>
                    <button>CONTINUE</button>
                </div>
            </form>
        </div>
    );
};

export default ModalWindow;
