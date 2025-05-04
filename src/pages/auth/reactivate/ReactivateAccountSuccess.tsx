import { ActionButton, Logo } from "../../../components";
import { useMetaArgs } from "../../../hooks";
import { MailSearch } from "lucide-react";
import { Link } from "react-router";

export default function ReactivateAccountSuccess() {
  useMetaArgs({
    title: "Reactivate Account success code - TechPay",
    description: "Reactivate Account success code to your TechPay account, reset it here.",
    keywords: "techpay, finance, reactivate account, account",
  });

  return (
    <main className="auth-bg min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Logo />
        </div>
        <h1 className="text-[1.3rem] font-bold mb-5">
          Reactivation code sent!
        </h1>
        <div className="rounded-[24px] p-4 bg-white shadow border-[1.6px] border-[var(--paint-white)] max-w-[324px]">
          <div className="rounded-[12px] px-2 py-6 space-y-4  border-[1.6px] border-[var(--paint-white)] max-w-[292px]">
            <p className="text-[var(--paint-black-50)]">
              We have sent a reset link to <br />
              <span className="text-black font-bold">techpayadmin@pay.com</span>
            </p>
            <p className="text-[var(--paint-gray)]">
              Click the link in the email to reactivate your account.
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
          <div className="mt-4 rounded-[12px] p-4 border-[1.6px] border-[var(--paint-white)] flex flex-col justify-center text-start">
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
      </div>
    </main>
  );
}
