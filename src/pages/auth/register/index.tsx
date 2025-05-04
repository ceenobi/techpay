import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
// import { toast } from "sonner";
import { ActionButton, FormFields, Logo } from "../../../components";
import { registerSchema } from "../../../libs/formSchema";
import { useState } from "react";
import { Link } from "react-router";
import { useMetaArgs } from "../../../hooks";

export default function Register() {
  useMetaArgs({
    title: "Register - TechPay",
    description:
      "Create your TechPay account to start managing your finances easily.",
    keywords: "techpay, finance, register, account",
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
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
            Let’s get you started!
          </h1>
          <div className="rounded-[24px] p-4 border-[1.6px] border-[var(--paint-white)]">
            <div className="rounded-[12px] py-4 px-2 border-[1.6px] border-[var(--paint-white)] space-y-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <FormFields
                    label="First name"
                    type="text"
                    placeholder="First name"
                    id="first_name"
                    register={register as FieldValues["register"]}
                    errors={errors}
                    name="first_name"
                  />
                </div>
                <div className="col-span-6">
                  <FormFields
                    label="Last name"
                    type="text"
                    placeholder="Last name"
                    id="last_name"
                    register={register as FieldValues["register"]}
                    errors={errors}
                    name="last_name"
                  />
                </div>
              </div>
              <FormFields
                label="Email Address"
                type="email"
                placeholder="Email"
                id="email"
                register={register as FieldValues["register"]}
                errors={errors}
                name="email"
              />
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
              <ActionButton
                text="Create account"
                type="submit"
                loading={isSubmitting}
                classname="w-full bg-[var(--paint-sky)] text-white rounded-full btn-lg"
              />
            </div>
            <p className="mt-5 text-center text-[var(--paint-gray)]">
              Already have an account?{" "}
              <Link
                className="text-[var(--paint-sky)] font-semibold"
                to="/account/login"
              >
                Login
              </Link>
            </p>
            <div className="mt-4 rounded-[12px] p-4 border-[1.6px] border-[var(--paint-white)] flex flex-col justify-center">
              <p className="font-semibold text-black">
                Got problems registering?
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
