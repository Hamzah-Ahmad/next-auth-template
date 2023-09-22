"use client";
import React from "react";
import clsx from "clsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { z } from "zod";

const SigninSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .trim()
    .min(5, { message: "Password must be 5 or more characters long" })
    .max(12, { message: "Password cannot be longer than 12 characters" }),
});

type SigninType = z.infer<typeof SigninSchema>;

const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninType>({
    resolver: zodResolver(SigninSchema),
  });
  const onSubmit: SubmitHandler<SigninType> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={clsx(
            "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            errors.email && "border-red-500"
          )}
          id="email"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className={clsx(
            "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
            errors.password && "border-red-500"
          )}
          id="password"
          type="password"
          placeholder="******************"
          {...register("password")}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Sign In
        </button>
      </div>

      <div className="mt-4">
        {errors.email && (
          <div className=" text-red-400 text-xs">* {errors.email.message}</div>
        )}
        {errors.password && (
          <div className=" text-red-400 text-xs">
            * {errors.password.message}
          </div>
        )}
      </div>
    </form>
  );
};

export default SigninForm;
