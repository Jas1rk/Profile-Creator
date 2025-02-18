"use client";
import { useFormik } from "formik";
import React from "react";
import { validationSchema } from "./validation";
import Swal from "sweetalert2";

type FormValues = {
  name: string;
  email: string;
  mobile: string | number;
  password: string;
};

const inputField: { name: keyof FormValues; type: string; label: string }[] = [
  { name: "name", type: "text", label: "Name" },
  { name: "email", type: "email", label: "Email" },
  { name: "mobile", type: "number", label: "Mobile" },
  { name: "password", type: "password", label: "Password" },
];

const ProfileForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      Swal.fire({
        title: "Profile successfully created!",
        icon: "success",
        draggable: true,
      });
      resetForm();
    },
  });

  return (
    <div className="relative flex items-center justify-center min-h-screen ">
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
          <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            Profile
          </h3>
        </div>
        <form className="flex flex-col gap-4 p-6">
          {inputField.map((input, index) => (
            <div
              className="relative h-11 w-full min-w-[200px] mt-3"
              key={index}
            >
              <input
                type={input.type}
                placeholder=""
                name={input.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[input.name]}
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {input.label}
              </label>
              {formik.touched[input.name] && formik.errors[input.name] && (
                <p className="text-red-600  text-xs mt-1 mb-2">
                  {formik.errors[input.name]}
                </p>
              )}
            </div>
          ))}
        </form>
        <div className="p-6 pt-0">
          <button
            onClick={() => formik.handleSubmit()}
            type="submit"
            className="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center text-xs font-bold uppercase tracking-normal text-white shadow-md transition-all hover:shadow-lg active:opacity-85"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
