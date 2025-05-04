import { MailSearch } from "lucide-react";
import { ActionButton, Logo } from "../../../components";
import { Link } from "react-router";
import { useMetaArgs } from "../../../hooks";

export default function VerifyEmail() {
  useMetaArgs({
    title: "Verify Email - TechPay",
    description: "Verify Email to your TechPay account, get started here.",
    keywords: "techpay, finance, verify email, account",
  });
  return (
    <>
      <h1 className="text-center text-[var(--paint-darkGray)] font-semibold mb-4">
        VERIFY EMAIL ADDRESS
      </h1>
      <section className="rounded-tr-2xl shadow bg-white px-10 min-h-screen">
        <div className="max-w-[410px] mx-auto py-[40px]">
          <Logo />
          <h1 className="text-[1.3rem] font-bold my-5">Verify email address</h1>
          <div className="rounded-[12px] px-2 py-6 space-y-4  border-[1.6px] border-[var(--paint-white)] max-w-[324px] text-center">
            <p className="text-[var(--paint-black-50)]">
              We have sent a verification link to <br />
              <span className="text-black font-bold">techpayadmin@pay.com</span>
            </p>
            <p className="text-[var(--paint-gray)]">
              Click the link in the email to verify your account and setup your
              profile.
            </p>
            <ActionButton
              text={
                <>
                  <MailSearch />
                  Go to mail
                </>
              }
              type="button"
              classname="mt-4 w-full bg-[var(--paint-sky)] text-white rounded-full btn-lg"
            />
          </div>
          <div className="mt-4 rounded-[12px] p-4 border-[1.6px] border-[var(--paint-white)] flex flex-col justify-center text-start max-w-[324px]">
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
      </section>
    </>
  );
}
