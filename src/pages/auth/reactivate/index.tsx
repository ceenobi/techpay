import { ActionButton, FormFields, Logo } from "../../../components";
import { useMetaArgs } from "../../../hooks";
import { forgotPasswordSchema } from "../../../libs/formSchema";
import { Link } from "react-router";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ReactivateAccount() {
  useMetaArgs({
    title: "Reactivate Account - TechPay",
    description:
      "Reactivate your TechPay account to start managing your finances easily.",
    keywords: "techpay, finance, reactivate, account",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1 className="text-center text-[var(--paint-darkGray)] font-semibold mb-4">
        REACTIVATE YOUR ACCOUNT
      </h1>
      <section className="rounded-tr-2xl shadow bg-white px-10 min-h-screen">
        <div className="max-w-[410px] mx-auto py-[40px]">
          <Logo />
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <h1 className="text-[1.3rem] font-bold mb-5">
              Reactivate your account
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
                <ActionButton
                  text="Reactivate account"
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
        </div>
      </section>
    </>
  );
}
