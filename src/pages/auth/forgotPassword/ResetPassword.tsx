import { useState } from "react";
import { ActionButton, FormFields, Logo } from "../../../components";
import { useMetaArgs } from "../../../hooks";
import { resetPasswordSchema } from "../../../libs/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";

export default function ResetPassword() {
  useMetaArgs({
    title: "Reset Password - TechPay",
    description: "Reset Password to your TechPay account, reset it here.",
    keywords: "techpay, finance, reset password, account",
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <main className="auth-bg min-h-screen flex items-center justify-center">
      <form className="w-[90%] md:w-[378px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center mb-4">
          <Logo />
        </div>
        <h1 className="text-[1.3rem] font-bold mb-5 text-center">
          Reset your password
        </h1>
        <div className="rounded-[24px] p-4 bg-white shadow border-[1.6px] border-[var(--paint-white)]">
          <div className="rounded-[12px] px-2 py-4 border-[1.6px] border-[var(--paint-white)] space-y-4">
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
            <FormFields
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              register={register as FieldValues["register"]}
              errors={errors}
              name="confirmPassword"
              isVisible={isVisibleConfirm}
              setIsVisible={setIsVisibleConfirm}
            />
            <ActionButton
              text="Reset Password"
              type="submit"
              loading={isSubmitting}
              classname="w-full bg-[var(--paint-sky)] text-white rounded-full btn-lg"
            />
          </div>
          <div className="mt-4 rounded-[12px] p-4 border-[1.6px] border-[var(--paint-white)] flex flex-col justify-center">
            <p className="font-semibold text-black">
              Can't remember your email?
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
    </main>
  );
}
