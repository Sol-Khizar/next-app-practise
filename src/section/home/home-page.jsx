"use client";
import ReactInPut from "@components/ReactInPut";
import React from "react";
import { useForm } from "react-hook-form";

const HomePage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  return (
    <div className="mt-10  w-3/4 mx-auto border py-5">
      <p className="text-xl md:text-4xl text-red-600 md:text-yellow-500 lg:text-green-500 xl:text-blue-500 text-center ">
        Form
      </p>
      <div className="w-3/4 mx-auto ">
        <form
          onSubmit={handleSubmit(async (data) => {
            await new Promise((resolve) => setTimeout(resolve, 5000));
            console.log(data);
            reset();
          })}
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
        </form>
      </div>
    </div>
  );
};

export default HomePage;
