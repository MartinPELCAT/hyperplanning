import React, { useEffect, useRef } from "react";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import Link from "next/link";
import { useGetSignedInUserLazyQuery } from "apollo/__generated__";
import { useRouter } from "next/dist/client/router";

type LoginFormSchema = {
  username: string;
  password: string;
};

const schema = Joi.object<LoginFormSchema>({
  password: Joi.string().required(),
  username: Joi.string().required(),
});

export default function SignIn() {
  const { errors, handleSubmit, register, formState } = useForm<
    LoginFormSchema
  >({
    resolver: joiResolver(schema),
    mode: "all",
  });
  const usernameRef = useRef<HTMLInputElement>(null);
  const [getUser, { loading, data }] = useGetSignedInUserLazyQuery();
  const { push } = useRouter();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    data && push("/");
  }, [data]);

  const onSubmit = ({ password, username }: LoginFormSchema) => {
    getUser({ variables: { password, username } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr font-sans antialiased from-teal-400 to-blue-500">
      <div className="min-h-screen w-full bg-white bg-opacity-25">
        <div className="min-h-screen flex">
          <div className="w-full md:w-1/4 bg-gray-100 m-auto md:rounded-lg overflow-hidden">
            <div className="w-full text-2xl text-center text-white font-semibold p-4 bg-gradient-to-r from-blue-400 to-blue-500">
              Log In
            </div>
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="p-4 flex flex-col space-y-5"
            >
              <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  name="username"
                  autoComplete="off"
                  type="text"
                  ref={(e) => {
                    register(e);
                    usernameRef.current = e;
                  }}
                  placeholder="Username"
                  className="bg-gray-300 p-2 rounded-md"
                />
                {errors.username && (
                  <span className="text-red-500 text-sm">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="bg-gray-300 p-2 rounded-md"
                  ref={register}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={!formState.isValid || loading}
                  className={clsx(
                    [!formState.isValid && "opacity-50 cursor-default"],
                    "bg-blue-400 p-2 w-full text-center rounded-full focus:outline-none focus:shadow-outline text-white font-medium"
                  )}
                >
                  Log In
                </button>
                <div className="float-right">
                  <Link href="/auth/forgot-password">
                    <a className="">
                      <span className="text-sm text-blue-500 ">
                        Forgot password ?
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
