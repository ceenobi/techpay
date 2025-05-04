interface CardAProps {
  title: string;
  amount: string;
  icon: React.ReactNode;
}

interface CardBProps {
  title1: string;
  icon1: React.ReactNode;
  info1: string;
  info1Value: string;
  info2: string;
  info2Value: string;
  title2?: string;
  icon2?: React.ReactNode;
  info3?: string;
  info3Value?: string;
  info4?: string;
  info4Value?: string;
  classname?: string;
}

export function CardA({ title, amount, icon }: CardAProps) {
  return (
    <figure className="md:h-[194px] flex flex-col justify-between gap-4 md:gap-0 mb-8 md:mb-0">
      <div>
        <figcaption className="flex gap-2 items-center">
          <p className="text-black font-medium">{title}</p>
          {icon}
        </figcaption>
        <h1 className="text-[var(--paint-sky)] font-bold text-[1.7rem] xl:text-[1.8rem]">
          {amount}
        </h1>
      </div>
      <div>
        <h1 className="text-black font-bold">Hello Techpay</h1>
        <p className="text-sm">Track and monitor all transactions</p>
      </div>
    </figure>
  );
}

export function CardB({
  title1,
  icon1,
  info1,
  info1Value,
  info2,
  info2Value,
  title2,
  icon2,
  info3,
  info3Value,
  info4,
  info4Value,
  classname,
}: CardBProps) {
  return (
    <figure
      className={`h-[202px] flex flex-col justify-between border-[var(--paint-white)] py-4 ${classname}`}
    >
      <div className="px-4">
        <div className="flex flex-wrap justify-between items-center mb-1">
          <figcaption className="flex gap-2 items-center">
            <p className="text-xs text-black">{title1}</p>
            {icon1}
          </figcaption>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <figcaption>
            <p className="text-[var(--paint-black-60)] text-xs">{info1}</p>
            <p className="text-[1.5rem] text-[var(--paint-sky)]">
              {info1Value}
            </p>
          </figcaption>
          <div>
            <p className="text-[var(--paint-black-60)] text-xs">{info2}</p>
            <p className="text-[var(--paint-sky)] text-[1.5rem]">
              {info2Value}
            </p>
          </div>
        </div>
      </div>
      <div className="divider my-2"></div>
      <div className="px-4">
        <div className="flex flex-wrap justify-between items-center mb-1">
          <figcaption className="flex gap-2 items-center">
            <p className="text-xs text-black">{title2}</p>
            {icon2}
          </figcaption>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <figcaption>
            <p className="text-[var(--paint-black-60)] text-xs">{info3}</p>
            <p className="text-[1.5rem] text-[var(--paint-sky)]">
              {info3Value}
            </p>
          </figcaption>
          <div>
            <p className="text-[var(--paint-black-60)] text-xs">{info4}</p>
            <p className="text-[var(--paint-sky)] text-[1.5rem]">
              {info4Value}
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}
