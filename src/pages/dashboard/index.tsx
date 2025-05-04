import { Info } from "lucide-react";
import { CardA, CardB } from "./components/Cards";
import { useMetaArgs } from "../../hooks";

export default function Home() {
  useMetaArgs({
    title: "Dashboard - TechPay",
    description: "View all transactions and manage your account.",
    keywords: "techpay, finance, dashboard, account",
  });
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-black">Dashboard</h1>
      <div className="hidden mt-8 md:grid grid-cols-12">
        <div className="col-span-3" />
        <div className="col-span-9">
          <p className="font-bold uppercase text-black text-xs">Transactions</p>
          <div className="divider my-0"></div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <CardA
            title="Total Value (Transactions)"
            amount="₦152,492,183,718.42"
            icon={<Info size={16} />}
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 mr-4">
          <CardB
            title1="Successfull transactions"
            icon1={<Info size={16} />}
            info1="Value"
            info1Value="4,924,920"
            info2="Count"
            info2Value="16,816"
            title2="Failed transactions"
            icon2={<Info size={16} />}
            info3="Value"
            info3Value="509,091"
            info4="Count"
            info4Value="16,816"
            classname="border-[2.4px] rounded-lg"
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <CardB
            title1="Successfull transactions"
            icon1={<Info size={16} />}
            info1="Card payment"
            info1Value="4,924,920"
            info2="Wallet"
            info2Value="16,816"
            info3="QR"
            info3Value="509,091"
            info4="USSD"
            info4Value="16,816"
            classname="border-[2.4px] border-r rounded-l-lg"
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <CardB
            title1="Failed transactions"
            icon1={<Info size={16} />}
            info1="Card payment"
            info1Value="4,924,920"
            info2="Wallet"
            info2Value="16,816"
            info3="QR"
            info3Value="509,091"
            info4="USSD"
            info4Value="16,816"
            classname="border-[2.4px] border-l rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
}
