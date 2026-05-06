"use client";
import ReactButton from "@/components/ReactButton";
import ReactInPut from "@components/ReactInPut";
import React, { useState } from "react";
import ShowPasswordIcon from "@icon/eyes.png";
import HidePasswordIcon from "@icon/hideEyes.png";
import { useForm } from "react-hook-form";
import Image from "next/image";

const HomePage = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [formData, setFormData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const password = watch("password");
  const isSubscribed = watch("subscribe");
  return (
    <div className="mt-10  w-3/4 mx-auto border py-5">
      <p className="text-xl md:text-4xl text-red-600 md:text-yellow-500 lg:text-green-500 xl:text-blue-500 text-center ">
        Form
      </p>

      <form
        onSubmit={handleSubmit(async (data) => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          console.log(data);
          setFormData(data);
          reset({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
          });
        })}
        className="w-3/4 mx-auto mt-5 py-5 "
      >
        <ReactInPut
          label="First Name : "
          {...register("firstName", {
            required: { value: true, message: "First Name is required" },
          })}
          error={errors?.firstName?.message}
          id="firstName"
        />
        <ReactInPut
          label="Last Name : "
          {...register("lastName")}
          error={errors?.lastName?.message}
          id="lastName"
        />
        <ReactInPut
          label="Email : "
          {...register("email", {
            required: { value: true, message: "Email is required" },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
          inputType="email"
          error={errors?.email?.message}
          id="email"
        />
        <ReactInPut
          label="Password : "
          {...register("password", {
            required: { value: true, message: "Password is Empty" },
            minLength: { value: 8, message: "min 8 character" },
            maxLength: { value: 12, message: "max 12 character" },
          })}
          inputType={showPassword ? "text" : "password"}
          error={errors?.password?.message}
          id="password"
          icon={
            showPassword ? (
              <Image
                src={ShowPasswordIcon}
                width={16}
                height={16}
                alt="icon"
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <Image
                src={HidePasswordIcon}
                width={16}
                height={16}
                alt="icon"
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )
          }
        />
        <ReactInPut
          label="Confirm Password : "
          {...register("confirmPassword", {
            required: { value: true, message: "Password is Empty" },
            minLength: { value: 8, message: "min 8 character" },
            maxLength: { value: 12, message: "max 12 character" },
            validate: (value) => value === password || "Password do not match",
          })}
          inputType="password"
          error={errors?.confirmPassword?.message}
          id="confirmPassword"
        />

        <div className="flex justify-center items-center">
          <input type="checkbox" id="subscribe" {...register("subscribe")} />
          <label htmlFor="subscribe" className="ml-2">
            Subscribe for regular Update{" "}
          </label>
        </div>

        {isSubscribed && (
          <ReactInPut
            label="Phone Number : "
            {...register("phone", {
              minLength: { value: 10, message: "Number should be 10" },
              maxLength: { value: 10, message: "Number should be 10" },
            })}
            containerClassName="mt-2"
            id="phoneNumber"
            error={errors?.phone?.message}
          />
        )}

        <ReactButton
          buttonClassName="mt-3 text-white w-1/2 mx-auto"
          disabled={isSubmitting}
          buttonType="submit"
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </ReactButton>
      </form>

      {formData && (
        <div className="mt-5 p-4 border rounded w-1/2 mx-auto text-center">
          <h2 className="text-xl font-bold mb-2">Submitted Data:</h2>

          <p>
            <strong>First Name:</strong> {formData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {formData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          {formData.phone && (
            <p>
              <strong>Phone:</strong> {formData.phone}
            </p>
          )}
          <ReactButton
            buttonClassName="w-1/2 text-white mx-auto mt-5"
            onClick={() => {
              reset(formData);
              setFormData(null);
            }}
          >
            Edit
          </ReactButton>
        </div>
      )}
    </div>
  );
};

export default HomePage;

{
  /* <form
        onSubmit={handleSubmit(async (data) => {
          await new Promise((resolve) => setTimeout(resolve, 5000));
          console.log(data);
          reset();
        })}
        className="w-3/4 mx-auto "
      >
        <ReactInPut
          label="First name : "
          {...register("firstName", {
            required: { value: true, message: "first name is required" },
            minLength: { value: 3, message: "min 3 character required" },
          })}
          error={errors?.firstName?.message}
        />
        <ReactInPut
          label="Last Name : "
          {...register("lastName", {
            maxLength: { value: 5, message: "max 5 character required" },
          })}
          error={errors?.lastName?.message}
        />
        <button
          className="block w-1/2 mx-auto rounded-xl bg-red-500  py-3 "
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </form> */
}
