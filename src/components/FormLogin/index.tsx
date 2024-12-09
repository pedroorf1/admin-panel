"use client";
import React, { FormEvent, useCallback } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";

import CustonForm from "@/components/formComponents/Form";
import CustonInput from "@/components/formComponents/Input";
import CustonButton from "@/components/formComponents/Button";

import thumb from "@/assets/imgs/newlogoadmin.png";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z
    .string()
    .min(6, { message: "Este campom precisa ter ao menos 6 digitos." })
    .email("Este não é um email válido."),
  password: z
    .string()
    .min(6)
    .regex(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"), {
      message:
        "O campo password precisa ter ao menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um numero",
    }),
});

const FormLogin = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  type UserCredentials = {
    email: string;
    password: string;
  };

  const submitForm = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let data = {} as UserCredentials;
      const formData = new FormData(e.currentTarget);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
        if (key === "email" || key === "password") {
          data[key as keyof UserCredentials] = value as string;
        }
      }
      if (!data.email || !data.password) {
        return;
      }
      const result = await signIn("Credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      console.log({ data });
      if (result?.error) {
        return null;
      }

      // const result = await response.json();
      console.log({ result });
      return null;
      // router.replace("/dashboard");
    },
    []
  );

  return (
    <div className="flex flex-col w-80 items-center justify-items-center rounded border-2 border-indigo-500/50 m-1 p-2 bg-background text-basefontcolor">
      <div className="font-bold text-3xl mt-14 text-foreground">Login</div>
      <div className="text-xs mt-4 text-foreground">
        Entre com suas credenciais
      </div>

      <div>
        <Image
          src={thumb}
          alt="hostvls-admin"
          className="flex w-24full rounded-full p-2 bg-transparent"
        />
      </div>
      <CustonForm onSubmit={submitForm}>
        <CustonInput
          type="email"
          label="Email"
          placeholder="digite seu email"
          {...register("email")}
        />
        {errors.email && (
          <span className="flex flex-col w-full items-center justify-items-center text-errorFontcolor text-xs">
            {errors.email.message}
          </span>
        )}
        <CustonInput
          type="password"
          label="Password"
          placeholder="digite sua senha"
          {...register("password")}
        />
        {errors.password && (
          <span className="flex flex-col w-full items-center justify-items-center text-errorFontcolor text-xs">
            {errors.password.message}
          </span>
        )}
        <CustonButton text="Login" type="submit" />
      </CustonForm>
      <div className="flex flex-col mt-16 w-full items-center justify-items-center text-secondaryBgcolor mb-16">
        Esqueceu a senha?
      </div>
    </div>
  );
};

export default FormLogin;
