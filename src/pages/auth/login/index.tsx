import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
// import { toast } from "sonner";
import { ActionButton, FormFields, Logo } from "../../../components";
import { loginSchema } from "../../../libs/formSchema";
import { useState } from "react";
import { Link } from "react-router";
import { useMetaArgs } from "../../../hooks";

export default function Login() {
  useMetaArgs({
    title: "Login - TechPay",
    description:
      "Login to your TechPay account to start managing your finances easily.",
    keywords: "techpay, finance, login, account",
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <section className="rounded-tr-2xl shadow bg-white px-10 min-h-screen">
      <div className="max-w-[410px] mx-auto py-[40px]">
        <Logo />
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <h1 className="text-[1.3rem] font-bold mb-5">
            Login to your account
          </h1>
          <div className="rounded-[24px] p-4 border-[1.6px] border-[var(--paint-white)]">
            <div className="rounded-[12px] px-2 py-4 border-[1.6px] border-[var(--paint-white)] space-y-4">
              <FormFields
                label="Email Address"
                type="email"
                placeholder="Email"
                id="email"
                register={register as FieldValues["register"]}
                errors={errors}
                name="email"
              />
              <div className="flex flex-col">
                <FormFields
                  label="Password"
                  type="password"
                  placeholder="Password"
                  id="password"
                  register={register as FieldValues["register"]}
                  errors={errors}
                  name="password"
                  isVisible={isVisible}
                  setIsVisible={setIsVisible}
                />
                <Link
                  className="text-[var(--paint-sky)] text-sm self-end"
                  to="/account/forgot-password"
                >
                  Forgot password?
                </Link>
              </div>
              <ActionButton
                text="Login"
                type="submit"
                loading={isSubmitting}
                classname="w-full bg-[var(--paint-sky)] text-white rounded-full btn-lg"
              />
            </div>
            <p className="mt-5 text-center text-[var(--paint-gray)]">
              Don't have an account?{" "}
              <Link
                className="text-[var(--paint-sky)] font-semibold"
                to="/account/register"
              >
                Create one
              </Link>
            </p>
            <div className="mt-4 rounded-[12px] p-4 border-[1.6px] border-[var(--paint-white)] flex flex-col justify-center">
              <p className="font-semibold text-black">
                Got problems logging in?
              </p>
              <Link
                className="text-[var(--paint-sky)] underline font-medium"
                to="/account/register"
              >
                Reach out here
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
