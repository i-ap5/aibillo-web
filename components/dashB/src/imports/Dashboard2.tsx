import svgPaths from "./svg-yrq93l42jv";
import clsx from "clsx";
import imgRectangle18 from "figma:asset/d02e3adf16141f2eb7405e013b2d6391f8ab58a2.png";
import imgRectangle19 from "figma:asset/2ce9132f137aadce2b6cd76996d54c88533e52e7.png";
import imgRectangle20 from "figma:asset/e55f2aa6d3e61f9d8bc97330413c9b2290726d12.png";
import imgRectangle21 from "figma:asset/b278fb7aabd2cf75180aae5df8dd94925fc4b064.png";
import imgRectangle22 from "figma:asset/ba34030b89699a9fd80dfc39124a8ee03cbf9c67.png";
import imgRectangle23 from "figma:asset/a022c5e0fd2f221e6e2b828a50dd3356c2348859.png";
import imgRectangle24 from "figma:asset/67e1c6a932425a191f1305a87cf4c7904eb9a05c.png";
import imgRectangle25 from "figma:asset/e4a6717c59c0b492881cde124299c84c3b6b3c6c.png";
import imgRectangle26 from "figma:asset/bd9a2ff5a80a1523bb7f7eb76b5b21ce0754d1fb.png";
import imgRectangle27 from "figma:asset/139d4b529f0068de7adc8c0612161c6f8890e47c.png";
import imgRectangle28 from "figma:asset/a47def4dded18f10032bf5681c4b593c839b6b79.png";
import imgRectangle29 from "figma:asset/9d86a7918aeaad8a2d54392ee7eb0f1f5209134a.png";
import imgRectangle30 from "figma:asset/0985a8ff4b55fd2acaaa221727f54da12904ab5b.png";
import imgRectangle31 from "figma:asset/42a7b542f38d7adf3ef732db1f627fc20e99f100.png";
import imgEllipse75 from "figma:asset/851f6f1a539f48e094635b26ea4049059b0060ec.png";
import { imgElipse5 } from "./svg-85rza";
type Wrapper7Props = {
  additionalClassNames?: string;
};

function Wrapper7({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper7Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        {children}
      </svg>
    </div>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper6({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper6Props>) {
  return <Wrapper7 additionalClassNames={clsx("relative size-[17px]", additionalClassNames)}>{children}</Wrapper7>;
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return <Wrapper7 additionalClassNames={clsx("absolute", additionalClassNames)}>{children}</Wrapper7>;
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("h-0 relative shrink-0", additionalClassNames)}>
      <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(217, 217, 217, 1)" } as React.CSSProperties}>
        {children}
      </div>
    </div>
  );
}
type Frame105HelperProps = {
  additionalClassNames?: string;
};

function Frame105Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<Frame105HelperProps>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "6" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0 w-[18px]", additionalClassNames)}>
      <div className="flex-none rotate-[270deg]">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 14" }} className={clsx("[grid-area:1_/_1] flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] ml-0 relative text-[#404040] text-[20px] tracking-[-0.4px] translate-y-[-50%]", additionalClassNames)}>
      <p className="leading-[32px]">{children}</p>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(253, 237, 241, 1)" } as React.CSSProperties}>
        {children}
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center px-[32px] py-[10px] relative rounded-[27px] shrink-0", additionalClassNames)}>
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fefafb] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 14" }} className={clsx("flex flex-col justify-center leading-[0] relative shrink-0 text-[10px] text-nowrap", additionalClassNames)}>
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}

function Helper3() {
  return (
    <Wrapper additionalClassNames="left-[16px] size-[46px] top-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <circle cx="23" cy="23" fill="var(--fill-0, #FDEDF1)" id="Ellipse 75" r="23" />
      </svg>
    </Wrapper>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[8px] items-center relative shrink-0", additionalClassNames)}>
      <div className="relative shrink-0 size-[12px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p3031d200} fill="var(--fill-0, #E11D48)" fillOpacity="0.4" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(225,29,72,0.4)] tracking-[-0.24px] w-[57px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}
type Helper2Props = {
  text: string;
  text1: string;
};

function Helper2({ text, text1 }: Helper2Props) {
  return (
    <p style={{ fontVariationSettings: "'opsz' 14" }} className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[42px] left-[28px] text-[#404040] text-[0px] text-nowrap top-[47px] tracking-[-0.6px]">
      <span className="font-['Inter:Medium',sans-serif] font-medium not-italic text-[29px]">{text}</span>
      <span className="text-[30px]"></span>
      <span className="text-[28px]">{text1}</span>
    </p>
  );
}

function Frame71Helper() {
  return (
    <div className="h-0 relative shrink-0 w-[340px]">
      <div className="absolute inset-[-0.2px_0_0_0]" style={{ "--stroke-0": "rgba(98, 98, 98, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 0.2">
          <line id="Line 8" stroke="var(--stroke-0, #626262)" strokeDasharray="5 5" strokeLinecap="round" strokeWidth="0.2" x1="0.1" x2="339.9" y1="0.1" y2="0.1" />
        </svg>
      </div>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-col items-start leading-[24px] pb-[7px] pt-0 px-0 relative shrink-0 w-[123px]">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#404040] text-[14px] tracking-[-0.28px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#626262] text-[12px] tracking-[-0.24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text1}
      </p>
    </div>
  );
}

function VuesaxLinearSetting() {
  return (
    <Wrapper1 additionalClassNames="contents inset-0">
      <g id="setting-4">
        <path d="M18.3333 5.41667H13.3333" id="Vector" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeOpacity="0.2" strokeWidth="1.5" />
        <path d="M5 5.41667H1.66667" id="Vector_2" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeOpacity="0.2" strokeWidth="1.5" />
        <path d={svgPaths.p4126bf0} id="Vector_3" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeOpacity="0.2" strokeWidth="1.5" />
        <path d="M18.3333 14.5833H15" id="Vector_4" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeOpacity="0.2" strokeWidth="1.5" />
        <path d="M6.66667 14.5833H1.66667" id="Vector_5" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeOpacity="0.2" strokeWidth="1.5" />
        <path d={svgPaths.p14568d00} id="Vector_6" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeOpacity="0.2" strokeWidth="1.5" />
        <g id="Vector_7" opacity="0"></g>
      </g>
    </Wrapper1>
  );
}

function Shadow() {
  return (
    <Wrapper additionalClassNames="left-[17px] size-[56px] top-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <circle cx="28" cy="28" fill="var(--fill-0, #FDEDF1)" id="Shadow" r="28" />
      </svg>
    </Wrapper>
  );
}

function Helper() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 32 32" className="block size-full">
      <g id="Vector" opacity="0"></g>
    </svg>
  );
}

export default function Dashboard() {
  return (
    <div className="bg-[#fefafb] relative size-full" data-name="Dashboard2">
      <div className="absolute contents left-[290px] top-[111px]" data-name="Main Dashboard">
        <div className="absolute h-0 left-[322px] top-[111px] w-[1091px]">
          <div className="absolute inset-[-0.3px_0_0_0]" style={{ "--stroke-0": "rgba(98, 98, 98, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1091 0.3">
              <line id="Line 7" stroke="var(--stroke-0, #626262)" strokeLinecap="round" strokeWidth="0.3" x1="0.15" x2="1090.85" y1="0.15" y2="0.15" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[24px] left-[320px] text-[#404040] text-[24px] text-nowrap top-[130px] tracking-[-0.48px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Dashboard
        </p>
        <div className="absolute content-stretch flex flex-col gap-[20px] h-[831px] items-start left-[290px] overflow-clip top-[169px]" data-name="Fill Here">
          <div className="content-stretch flex gap-[20px] h-[97px] items-start overflow-clip px-[20px] py-0 relative shrink-0 w-[1123px]">
            <div className="bg-white h-[97px] overflow-clip relative rounded-[20px] shrink-0 w-[273px]" data-name="Small_Earnings">
              <div className="absolute contents left-[91px] top-[20px]" data-name="Text">
                <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[22.579px] leading-[24px] left-[91.21px] text-[#626262] text-[14px] top-[20px] tracking-[-0.28px] w-[116.998px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Total Revenue
                </p>
                <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold h-[31px] leading-[32px] left-[91px] text-[#404040] text-[0px] top-[43px] tracking-[-0.48px] w-[158px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[23px]">₹</span>
                  <span className="text-[24px]">{` 21,123,231.17`}</span>
                </p>
              </div>
              <div className="absolute contents left-[17px] top-[20px]" data-name="Icon">
                <Shadow />
                <div className="absolute contents left-[32px] top-[35px]" data-name="Icon">
                  <div className="absolute aspect-[24/24] left-[11.72%] right-[78.75%] top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="coin">
                    <div className="absolute contents left-0 top-0" data-name="vuesax/bold/coin">
                      <div className="absolute contents left-0 top-0" data-name="coin">
                        <div className="absolute inset-[50.2%_8.47%_8.47%_50.21%]" data-name="Vector">
                          <div className="absolute inset-0" style={{ "--fill-0": "rgba(225, 29, 72, 1)" } as React.CSSProperties}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7433 10.7461">
                              <path d={svgPaths.p3be5ae00} fill="var(--fill-0, #E11D48)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[8.33%_25.08%_25.08%_8.33%]" data-name="Vector">
                          <div className="absolute inset-0" style={{ "--fill-0": "rgba(225, 29, 72, 1)" } as React.CSSProperties}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3117 17.3117">
                              <path d={svgPaths.pf536600} fill="var(--fill-0, #E11D48)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <p className="absolute font-['SF_Compact_Rounded:Semibold',sans-serif] h-[11px] leading-[10px] left-[7px] not-italic text-[#fefafb] text-[14px] top-[5px] tracking-[-0.28px] uppercase w-[14px]">₹</p>
                        <Helper />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white h-[97px] overflow-clip relative rounded-[20px] shrink-0 w-[272px]" data-name="Small_Earnings">
              <div className="absolute contents left-[91px] top-[20px]" data-name="Text">
                <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[22.579px] leading-[24px] left-[91.21px] text-[#626262] text-[14px] top-[20px] tracking-[-0.28px] w-[116.998px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Sales Cost
                </p>
                <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold h-[31px] leading-[32px] left-[91px] text-[#404040] text-[0px] top-[43px] tracking-[-0.48px] w-[164px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[23px]">₹</span>
                  <span className="font-['DM_Sans:Medium',sans-serif] font-medium text-[24px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    {" "}
                  </span>
                  <span className="text-[24px]">61,123,231.17</span>
                </p>
              </div>
              <div className="absolute contents left-[17px] top-[20px]" data-name="Icon">
                <Shadow />
                <div className="absolute aspect-[24/24] left-[11.76%] right-[78.68%] top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="receipt-minus">
                  <div className="absolute contents inset-0" data-name="vuesax/bold/receipt-minus">
                    <div className="absolute contents inset-0" data-name="receipt-minus">
                      <Helper />
                      <div className="absolute bottom-[5.91%] left-[8.33%] right-1/4 top-[8.33%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(225, 29, 72, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3333 22.2977">
                            <path d={svgPaths.p337781f0} fill="var(--fill-0, #E11D48)" id="Vector" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[8.33%_8.33%_54.17%_66.67%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(225, 29, 72, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 9.75">
                            <path d={svgPaths.p34075d00} fill="var(--fill-0, #E11D48)" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white h-[97px] overflow-clip relative rounded-[20px] shrink-0 w-[273px]" data-name="Small_Earnings">
              <div className="absolute contents left-[91px] top-[20px]" data-name="Text">
                <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[22.579px] leading-[24px] left-[91.21px] text-[#626262] text-[14px] top-[20px] tracking-[-0.28px] w-[116.998px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Purchase Cost
                </p>
                <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[31px] leading-[32px] left-[91px] text-[#404040] text-[0px] top-[43px] tracking-[-0.48px] w-[165px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <span className="font-['Inter:Semi_Bold',sans-serif] not-italic text-[23px]">₹</span>
                  <span className="text-[24px]">{` 40,001,211.00`}</span>
                </p>
              </div>
              <div className="absolute contents left-[17px] top-[20px]" data-name="Icon">
                <Shadow />
                <div className="absolute left-[32px] size-[26px] top-[35px]" data-name="tag-2">
                  <div className="absolute contents inset-0" data-name="vuesax/bold/tag-2">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                      <g id="tag-2">
                        <path d={svgPaths.p2340e600} fill="var(--fill-0, #E11D48)" id="Vector" />
                        <g id="Vector_2" opacity="0"></g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white h-[97px] overflow-clip relative rounded-[20px] shrink-0 w-[225px]" data-name="Small_New Tasks">
              <div className="absolute contents left-[91px] top-[18px]" data-name="Text">
                <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[22.579px] leading-[28px] left-[91px] text-[#626262] text-[14px] top-[18px] tracking-[-0.28px] w-[173.873px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  No of Sales
                </p>
                <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[25px] leading-[30px] left-[91px] text-[#404040] text-[24px] top-[44px] tracking-[-0.48px] w-[108px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  154
                </p>
              </div>
              <div className="absolute contents left-[17px] top-[20px]" data-name="Icon">
                <Shadow />
                <div className="absolute aspect-[24/24] left-[14.22%] right-[74.22%] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="bag-timer">
                  <div className="absolute contents inset-0" data-name="vuesax/bold/bag-timer">
                    <div className="absolute contents inset-0" data-name="bag-timer">
                      <div className="absolute inset-[8.32%_13.15%_8.33%_13.15%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(225, 29, 72, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1609 21.6692">
                            <path d={svgPaths.p8b58f92} fill="var(--fill-0, #E11D48)" id="Vector" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[53.46%_45.83%_30.92%_42.73%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(225, 29, 72, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.97481 4.0625">
                            <path d={svgPaths.p1bce4100} fill="var(--fill-0, #E11D48)" id="Vector" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute flex inset-0 items-center justify-center">
                        <div className="flex-none rotate-[180deg] size-[26px]">
                          <div className="relative size-full" data-name="Vector">
                            <Helper />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[20px] h-[323px] items-center overflow-clip px-[20px] py-0 relative shrink-0 w-[1123px]">
            <div className="bg-white h-[323px] overflow-clip rounded-[20px] shrink-0 w-[325px]" data-name="Large_Complex Table" />
            <div className="bg-white h-[323px] overflow-clip relative rounded-[20px] shrink-0 w-[325px]" data-name="Large_Complex Table">
              <div className="absolute bg-white content-stretch flex flex-col items-start left-[28px] top-[19px] w-[269px]">
                <div className="content-stretch flex gap-[51px] items-center relative shrink-0 w-full">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Title">
                    <div className="[grid-area:1_/_1] flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[40px] justify-center ml-0 mt-[20px] relative text-[#404040] text-[20px] tracking-[-0.4px] translate-y-[-50%] w-[181px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[32px]">Stock Status</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-[88px] size-[149px] top-[88px]">
                <div className="absolute inset-[-7.05%]" style={{ "--stroke-0": "rgba(253, 237, 241, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 170">
                    <path d={svgPaths.p240a7400} id="Ellipse 83" stroke="var(--stroke-0, #FDEDF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="21" />
                  </svg>
                </div>
              </div>
              <div className="absolute left-[88px] size-[149px] top-[88px]">
                <div className="absolute inset-[39.09%_83.78%_14.08%_-7.05%]" style={{ "--stroke-0": "rgba(225, 29, 72, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.6738 69.7645">
                    <path d={svgPaths.p24d14900} id="Ellipse 85" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="21" />
                  </svg>
                </div>
              </div>
              <div className="absolute left-[88px] size-[149px] top-[88px]">
                <div className="absolute inset-[-6.67%_-7.05%_-7.05%_3.53%]" style={{ "--stroke-0": "rgba(38, 70, 83, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154.236 169.44">
                    <path d={svgPaths.p29d04040} id="Ellipse 84" stroke="var(--stroke-0, #264653)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="21" />
                  </svg>
                </div>
              </div>
              <div className="absolute contents leading-[0] left-[127px] top-[129px]" data-name="Title">
                <div className="absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[40px] justify-center left-[127px] text-[#2a9d8f] text-[0px] top-[149px] tracking-[-0.8px] translate-y-[-50%] w-[72px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[32px] text-[#264653]">
                    <span className="text-[40px]">72</span>
                    <span className="text-[32px]">%</span>
                  </p>
                </div>
                <div className="absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[40px] justify-center left-[132px] text-[#626262] text-[16px] top-[180px] tracking-[-0.64px] translate-y-[-50%] w-[62px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[32px]">In Stock</p>
                </div>
              </div>
              <div className="absolute bg-[#fdedf1] content-stretch flex items-center justify-center left-[67px] px-[16px] py-0 rounded-[10px] top-[261px]">
                <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e11d48] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[32px]">
                    <span className="font-['DM_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>
                      16897
                    </span>
                    <span>{` items with < 5 stock `}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white h-[323px] overflow-clip relative rounded-[20px] shrink-0 w-[413px]" data-name="Large_Complex Table">
              <div className="absolute contents left-[31px] top-[19px]" data-name="Title">
                <div className="absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] left-[31px] text-[#404040] text-[20px] top-[39px] tracking-[-0.4px] translate-y-[-50%] w-[218px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[32px]">Top Selling Items</p>
                </div>
              </div>
              <div className="absolute contents left-[351px] top-[20px]" data-name="More">
                <div className="absolute bg-[rgba(253,237,241,0.4)] right-[25px] rounded-[10px] size-[37px] top-[20px]" data-name="Button" />
                <div className="absolute inset-[8.67%_7.99%_85.14%_87.17%]" data-name="setting-4">
                  <VuesaxLinearSetting />
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[31px] pb-[109px] pt-0 px-0 top-[77px] w-[357px]">
                <div className="content-stretch flex flex-col gap-[5px] items-end justify-center mb-[-109px] relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[221.5px]">
                      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#404040] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        1.
                      </p>
                      <div className="content-stretch flex flex-col items-start leading-[24px] pb-[7px] pt-0 px-0 relative shrink-0 w-[123px]">
                        <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#404040] text-[14px] tracking-[-0.28px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Shirt AE2 `}</p>
                        <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#626262] text-[12px] tracking-[-0.24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                          SKU: PRD-06542
                        </p>
                      </div>
                    </div>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Content 7">
                      <div className="[grid-area:1_/_1] content-stretch flex flex-col items-end leading-[24px] ml-0 mt-0 pb-[7px] pt-0 px-0 relative w-[45px]">
                        <p className="font-['DM_Sans:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#404040] text-[0px] tracking-[-0.28px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <span className="font-['Inter:Bold',sans-serif] not-italic text-[13px]">₹</span>
                          <span className="text-[14px]">{` 7,180`}</span>
                        </p>
                        <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#626262] text-[12px] tracking-[-0.24px] w-[39px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                          5 Units
                        </p>
                      </div>
                    </div>
                  </div>
                  <Frame71Helper />
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[221.5px]">
                      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#404040] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        2.
                      </p>
                      <Helper1 text="Saree PW" text1="SKU: PRD-06555" />
                    </div>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Content 7">
                      <div className="[grid-area:1_/_1] content-stretch flex flex-col items-end leading-[24px] ml-0 mt-0 pb-[7px] pt-0 px-0 relative w-[45px]">
                        <p className="font-['DM_Sans:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#404040] text-[0px] tracking-[-0.28px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <span className="font-['Inter:Bold',sans-serif] not-italic text-[13px]">₹</span>
                          <span className="text-[14px]">{` 5,971`}</span>
                        </p>
                        <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#626262] text-[12px] tracking-[-0.24px] w-[39px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                          4 Units
                        </p>
                      </div>
                    </div>
                  </div>
                  <Frame71Helper />
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[221.5px]">
                      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#404040] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        3.
                      </p>
                      <Helper1 text="Dhothi" text1="SKU: PRD-062" />
                    </div>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Content 7">
                      <div className="[grid-area:1_/_1] content-stretch flex flex-col items-end leading-[24px] ml-0 mt-0 pb-[7px] pt-0 px-0 relative w-[45px]">
                        <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#404040] text-[0px] text-right tracking-[-0.28px] w-[66px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <span className="font-['Inter:Bold',sans-serif] not-italic text-[13px]">₹</span>
                          <span className="text-[14px]">{` 3,180`}</span>
                        </p>
                        <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#626262] text-[12px] tracking-[-0.24px] w-[39px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                          3 Units
                        </p>
                      </div>
                    </div>
                  </div>
                  <Frame71Helper />
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[221.5px]">
                      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#404040] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        4.
                      </p>
                      <Helper1 text="Jogger" text1="SKU: PRD-06242" />
                    </div>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Content 7">
                      <div className="[grid-area:1_/_1] content-stretch flex flex-col items-end leading-[24px] ml-0 mt-0 pb-[7px] pt-0 px-0 relative w-[45px]">
                        <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#404040] text-[0px] text-right tracking-[-0.28px] w-[65px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <span className="font-['Inter:Bold',sans-serif] not-italic text-[13px]">₹</span>
                          <span className="text-[14px]">{` 2,856`}</span>
                        </p>
                        <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#626262] text-[12px] tracking-[-0.24px] w-[39px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                          2 Units
                        </p>
                      </div>
                    </div>
                  </div>
                  <Frame71Helper />
                </div>
                <div className="content-stretch flex flex-col items-center mb-[-109px] pb-[16px] pt-0 px-0 relative shrink-0 w-full">
                  <div className="bg-gradient-to-t from-[#ffffff] from-[15.878%] h-[124px] mb-[-16px] shrink-0 to-[53.378%] to-[rgba(255,255,255,0)] w-full" />
                  <div className="content-stretch flex items-center mb-[-16px] pl-0 pr-[4px] py-0 relative shrink-0 w-[63px]">
                    <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] mr-[-4px] relative shrink-0 text-[#626262] text-[12px] text-nowrap text-right tracking-[0.36px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`+5 more `}</p>
                    <div className="mr-[-4px] relative shrink-0 size-[14px]" data-name="arrow-down">
                      <div className="absolute contents left-0 top-px" data-name="vuesax/linear/arrow-down">
                        <div className="absolute h-[12px] left-0 top-px w-[24.871px]" data-name="arrow-down">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.872 12">
                            <g id="arrow-down">
                              <g id="Frame 69">
                                <path d={svgPaths.p68ac6c0} id="Vector" stroke="var(--stroke-0, #626262)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.8" />
                                <path d={svgPaths.p3e687e00} id="Vector_2" stroke="var(--stroke-0, #626262)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                              </g>
                              <path d={svgPaths.p1ca59600} id="Vector_3" opacity="0" stroke="var(--stroke-0, #626262)" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[20px] h-[362px] items-start overflow-clip px-[20px] py-0 relative shrink-0 w-[1123px]">
            <div className="bg-white h-[246px] overflow-clip relative rounded-[20px] shrink-0 w-[389px]" data-name="Medium_Traffic">
              <div className="absolute contents font-['DM_Sans:Bold',sans-serif] font-bold inset-[82.93%_3.6%_11.28%_9.25%] leading-[20px] text-[#626262] text-[12px] text-center tracking-[-0.24px]" data-name="Days">
                <p className="absolute inset-[82.93%_85.35%_11.28%_9.25%]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Jun
                </p>
                <p className="absolute inset-[82.93%_71.75%_11.28%_23.39%]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Jul
                </p>
                <p className="absolute inset-[82.93%_58.1%_11.28%_35.99%]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Aug
                </p>
                <p className="absolute inset-[82.93%_44.47%_11.28%_49.87%]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Sep
                </p>
                <p className="absolute inset-[82.93%_30.85%_11.28%_63.5%]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Oct
                </p>
                <p className="absolute inset-[82.93%_17.48%_11.28%_76.61%]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Nov
                </p>
                <p className="absolute inset-[82.93%_3.6%_11.28%_89.97%]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Dec
                </p>
              </div>
              <div className="absolute contents left-[27px] top-[94px]" data-name="Charts">
                <div className="absolute content-stretch flex gap-[35px] h-[99px] items-end leading-[0] left-[27px] top-[94px]">
                  <Frame105Helper additionalClassNames="h-[51.765px]">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Bar 1">
                      <div className="[grid-area:1_/_1] h-[18px] ml-0 mt-0 relative rounded-br-[60px] rounded-tr-[60px] w-[51.765px]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src={imgRectangle18} />
                      </div>
                    </div>
                  </Frame105Helper>
                  <Frame105Helper additionalClassNames="h-[36.491px]">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Bar 2">
                      <div className="[grid-area:1_/_1] h-[18px] ml-0 mt-0 relative rounded-br-[60px] rounded-tr-[60px] w-[36.491px]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src={imgRectangle19} />
                      </div>
                    </div>
                  </Frame105Helper>
                  <Frame105Helper additionalClassNames="h-[71.824px]">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Bar 3">
                      <div className="[grid-area:1_/_1] h-[18px] ml-0 mt-0 relative rounded-br-[60px] rounded-tr-[60px] w-[71.824px]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src={imgRectangle20} />
                      </div>
                    </div>
                  </Frame105Helper>
                  <Frame105Helper additionalClassNames="h-[45.179px]">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Bar 4">
                      <div className="[grid-area:1_/_1] h-[18px] ml-0 mt-0 relative rounded-br-[60px] rounded-tr-[60px] w-[45.179px]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src={imgRectangle21} />
                      </div>
                    </div>
                  </Frame105Helper>
                  <Frame105Helper additionalClassNames="h-[60.239px]">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Bar 5">
                      <div className="[grid-area:1_/_1] h-[18px] ml-0 mt-0 relative rounded-br-[60px] rounded-tr-[60px] w-[60.239px]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src={imgRectangle22} />
                      </div>
                    </div>
                  </Frame105Helper>
                  <Frame105Helper additionalClassNames="h-[99px]">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Bar 6">
                      <div className="[grid-area:1_/_1] h-[18px] ml-0 mt-0 relative rounded-br-[60px] rounded-tr-[60px] w-[99px]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src={imgRectangle23} />
                      </div>
                    </div>
                  </Frame105Helper>
                  <Frame105Helper additionalClassNames="h-[20.852px]">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Bar 7">
                      <div className="[grid-area:1_/_1] h-[18px] ml-0 mt-0 relative rounded-br-[60px] rounded-tr-[60px] w-[20.852px]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src={imgRectangle24} />
                      </div>
                    </div>
                  </Frame105Helper>
                </div>
              </div>
              <div className="absolute contents left-[28px] top-[25px]" data-name="Content">
                <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[22px] leading-[24px] left-[28px] text-[#626262] text-[14px] top-[25px] tracking-[-0.28px] w-[114px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Sales Cost Graph
                </p>
                <Helper2 text="₹" text1="61,123,231.17" />
              </div>
              <div className="absolute bg-[rgba(253,237,241,0.4)] content-stretch flex flex-col items-start left-[275px] overflow-clip p-[8px] rounded-[7px] top-[28px]" data-name="Timeline Button">
                <Text text="This week" additionalClassNames="w-[74px]" />
              </div>
            </div>
            <div className="bg-white h-[246px] overflow-clip relative rounded-[20px] shrink-0 w-[389px]" data-name="Medium_Traffic">
              <div className="absolute contents font-['DM_Sans:Bold',sans-serif] font-bold inset-[82.9%_6.17%_11.3%_6.68%] leading-[20px] text-[#626262] text-[12px] text-center tracking-[-0.24px]" data-name="Days">
                <p className="absolute inset-[82.9%_87.92%_11.3%_6.68%]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Jun
                </p>
                <p className="absolute inset-[82.9%_74.32%_11.3%_20.82%]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Jul
                </p>
                <p className="absolute inset-[82.9%_60.67%_11.3%_33.42%]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Aug
                </p>
                <p className="absolute inset-[82.9%_47.04%_11.3%_47.3%]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Sep
                </p>
                <p className="absolute inset-[82.9%_33.42%_11.3%_60.93%]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Oct
                </p>
                <p className="absolute inset-[82.9%_20.05%_11.3%_74.04%]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Nov
                </p>
                <p className="absolute inset-[82.9%_6.17%_11.3%_87.4%]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Dec
                </p>
              </div>
              <div className="absolute contents inset-[38.12%_7.46%_21.74%_7.71%]" data-name="Charts">
                <div className="absolute contents inset-[48.41%_7.46%_21.74%_87.92%]" data-name="Bar 7">
                  <div className="absolute flex inset-[48.41%_7.46%_21.74%_87.92%] items-center justify-center">
                    <div className="flex-none h-[18px] rotate-[270deg] w-[73.443px]">
                      <div className="relative rounded-br-[60px] rounded-tr-[60px] size-full">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src={imgRectangle25} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute contents inset-[68.41%_20.82%_21.74%_74.55%]" data-name="Bar 6">
                  <div className="absolute flex inset-[68.41%_20.82%_21.74%_74.55%] items-center justify-center">
                    <div className="flex-none h-[18px] rotate-[270deg] w-[24.243px]">
                      <div className="relative rounded-br-[60px] rounded-tr-[60px] size-full">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src={imgRectangle26} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute contents inset-[56.23%_34.19%_21.74%_61.18%]" data-name="Bar 5">
                  <div className="absolute flex inset-[56.23%_34.19%_21.74%_61.18%] items-center justify-center">
                    <div className="flex-none h-[18px] rotate-[270deg] w-[54.191px]">
                      <div className="relative rounded-br-[60px] rounded-tr-[60px] size-full">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src={imgRectangle27} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute contents inset-[62.61%_47.56%_21.74%_47.81%]" data-name="Bar 4">
                  <div className="absolute flex inset-[62.61%_47.56%_21.74%_47.81%] items-center justify-center">
                    <div className="flex-none h-[18px] rotate-[270deg] w-[38.504px]">
                      <div className="relative rounded-br-[60px] rounded-tr-[60px] size-full">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src={imgRectangle28} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute contents inset-[38.12%_60.93%_21.74%_34.45%]" data-name="Bar 3">
                  <div className="absolute flex inset-[38.12%_60.93%_21.74%_34.45%] items-center justify-center">
                    <div className="flex-none h-[18px] rotate-[270deg] w-[98.744px]">
                      <div className="relative rounded-br-[60px] rounded-tr-[60px] size-full">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src={imgRectangle29} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute contents inset-[72.17%_74.29%_21.74%_21.08%]" data-name="Bar 2">
                  <div className="absolute flex inset-[72.17%_74.29%_21.74%_21.08%] items-center justify-center">
                    <div className="flex-none h-[18px] rotate-[270deg] w-[14.974px]">
                      <div className="relative rounded-br-[60px] rounded-tr-[60px] size-full">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src={imgRectangle30} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute contents inset-[64.06%_87.66%_21.74%_7.71%]" data-name="Bar 1">
                  <div className="absolute flex inset-[64.06%_87.66%_21.74%_7.71%] items-center justify-center">
                    <div className="flex-none h-[18px] rotate-[270deg] w-[34.939px]">
                      <div className="relative rounded-br-[60px] rounded-tr-[60px] size-full">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src={imgRectangle31} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[28px] top-[25px]" data-name="Content">
                <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[22px] leading-[24px] left-[28px] text-[#626262] text-[14px] top-[25px] tracking-[-0.28px] w-[142px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Purchase Cost Graph
                </p>
                <Helper2 text="₹" text1="38,117,938.00" />
              </div>
              <div className="absolute bg-[rgba(253,237,241,0.4)] content-stretch flex flex-col items-start left-[277px] overflow-clip p-[8px] rounded-[7px] top-[28px] w-[91px]" data-name="Timeline Button">
                <Text text="This week" additionalClassNames="w-[69px]" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="bg-white content-stretch flex flex-col gap-[24px] items-start leading-[0] overflow-clip px-[21px] py-[19px] relative rounded-[20px] shadow-[0px_45px_34.8px_-44px_rgba(225,29,72,0.12)] shrink-0 w-[285px]" data-name="Medium_Team">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Title">
                  <Wrapper2 additionalClassNames="mt-[16px] text-nowrap">Inventory Summary</Wrapper2>
                </div>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Cards">
                  <div className="[grid-area:1_/_1] bg-white h-[70px] ml-0 mt-0 overflow-clip relative rounded-[16px] shadow-[0px_18px_40px_0px_rgba(176,112,112,0.12)] w-[239px]" data-name="Card 1">
                    <Helper3 />
                    <div className="absolute content-stretch flex flex-col items-start left-[80px] top-[13px] w-[140px]">
                      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#626262] text-[14px] tracking-[-0.28px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Stock Amount
                      </p>
                      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#404040] text-[0px] tracking-[-0.36px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <span className="font-['Inter:Bold',sans-serif] not-italic text-[17px]">₹</span>
                        <span className="text-[18px]">{` 232,149,738.50`}</span>
                      </p>
                    </div>
                    <Wrapper1 additionalClassNames="left-[29px] size-[20px] top-[25px]">
                      <g clipPath="url(#clip0_1_1774)" id="warehouse-alt 1">
                        <path d={svgPaths.p208e7500} fill="var(--fill-0, #E11D48)" id="Vector" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1774">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </Wrapper1>
                  </div>
                  <div className="[grid-area:1_/_1] bg-white h-[70px] ml-0 mt-[82px] overflow-clip relative rounded-[16px] shadow-[0px_18px_40px_0px_rgba(176,112,112,0.12)] w-[239px]" data-name="Card 3">
                    <div className="absolute left-[16px] size-[46px] top-[12px]">
                      <img alt="" className="block max-w-none size-full" height="46" src={imgEllipse75} width="46" />
                    </div>
                    <Helper3 />
                    <div className="absolute content-stretch flex flex-col items-start left-[80px] top-[13px] w-[138px]">
                      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#626262] text-[14px] tracking-[-0.28px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Stock Sale Amount
                      </p>
                      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#404040] text-[0px] tracking-[-0.36px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <span className="font-['Inter:Bold',sans-serif] not-italic text-[17px]">₹</span>
                        <span className="text-[18px]">{` 382,615,145.05`}</span>
                      </p>
                    </div>
                    <div className="absolute left-[29px] overflow-clip size-[20px] top-[25px]" data-name="growth-chart-invest 1">
                      <div className="absolute inset-[0_-0.01%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(225, 29, 72, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0029 19.9992">
                            <path d={svgPaths.pe7b380} fill="var(--fill-0, #E11D48)" id="Vector" />
                          </svg>
                        </div>
                      </div>
                      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium inset-[35%_-5%_-25%_60%] leading-[normal] text-[#e11d48] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        ₹
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white content-stretch flex flex-col gap-[24px] items-start left-[338px] top-[305px] w-[269px]">
          <div className="content-stretch flex gap-[51px] items-center leading-[0] relative shrink-0 w-full">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Title">
              <Wrapper2 additionalClassNames="h-[40px] mt-[20px] w-[181px]">Payment Status</Wrapper2>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="More">
              <div className="[grid-area:1_/_1] bg-[rgba(253,237,241,0.4)] ml-0 mt-0 rounded-[10px] size-[37px]" data-name="Button" />
              <div className="[grid-area:1_/_1] ml-[9px] mt-[8.5px] relative size-[20px]" data-name="setting-4">
                <VuesaxLinearSetting />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[195px]">
              <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] relative shrink-0 text-[#404040] text-[0px] tracking-[-0.56px] w-[193px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[24px]">
                  <span className="font-['Inter:Bold',sans-serif] font-bold not-italic text-[27px]">₹</span>
                  <span className="text-[28px]">{` 34,53,222.54`}</span>
                </p>
              </div>
              <p className="font-['DM_Sans:Medium',sans-serif] font-medium h-[28px] leading-[24px] relative shrink-0 text-[#626262] text-[14px] tracking-[-0.28px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                Received Amount
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Progress bar">
                <div className="[grid-area:1_/_1] bg-[#fdedf1] h-[22.598px] ml-0 mt-[0.18px] rounded-[21px] w-[269px]" />
                <div className="[grid-area:1_/_1] bg-[#e11d48] h-[23px] ml-0 mt-0 rounded-bl-[21px] rounded-tl-[21px] w-[113px]" />
                <div className="[grid-area:1_/_1] bg-[#264653] h-[23px] ml-[117px] mt-0 w-[74px]" />
                <div className="[grid-area:1_/_1] bg-[#2a9d8f] h-[23px] ml-[195px] mt-0 rounded-br-[21px] rounded-tr-[21px] w-[74px]" />
              </div>
              <div className="h-0 relative shrink-0 w-[251px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Line 5"></g>
                </svg>
              </div>
              <div className="relative rounded-[16px] shrink-0 w-full">
                <div className="size-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start px-[4px] py-0 relative w-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[15px] items-center justify-center relative shrink-0">
                        <div className="bg-[#e11d48] rounded-[6px] shrink-0 size-[14px]" />
                        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#626262] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Cash
                        </p>
                      </div>
                      <Wrapper3 additionalClassNames="w-[88px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 1">
                          <line id="Line 6" stroke="var(--stroke-0, #D9D9D9)" strokeDasharray="3 3" strokeLinecap="round" x1="0.5" x2="87.5" y1="0.5" y2="0.5" />
                        </svg>
                      </Wrapper3>
                      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#626262] text-[0px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <span className="font-['Inter:Medium',sans-serif] not-italic text-[13px]">₹</span>
                        <span className="text-[14px]">{` 23,06,356`}</span>
                      </p>
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
                        <div className="bg-[#264653] rounded-[6px] shrink-0 size-[14px]" />
                        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#626262] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Online
                        </p>
                      </div>
                      <Wrapper3 additionalClassNames="w-[84px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 1">
                          <line id="Line 6" stroke="var(--stroke-0, #D9D9D9)" strokeDasharray="3 3" strokeLinecap="round" x1="0.5" x2="83.5" y1="0.5" y2="0.5" />
                        </svg>
                      </Wrapper3>
                      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#626262] text-[0px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <span className="font-['Inter:Medium',sans-serif] not-italic text-[13px]">₹</span>
                        <span className="text-[14px]">{` 6,23,433`}</span>
                      </p>
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
                        <div className="bg-[#2a9d8f] rounded-[6px] shrink-0 size-[14px]" />
                        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#626262] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Cheque
                        </p>
                      </div>
                      <Wrapper3 additionalClassNames="w-[79px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 1">
                          <line id="Line 6" stroke="var(--stroke-0, #D9D9D9)" strokeDasharray="3 3" strokeLinecap="round" x1="0.5" x2="78.5" y1="0.5" y2="0.5" />
                        </svg>
                      </Wrapper3>
                      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#626262] text-[0px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <span className="font-['Inter:Medium',sans-serif] not-italic text-[13px]">₹</span>
                        <span className="text-[14px]">{` 5,23,433`}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[3px] items-center left-[1002px] top-[129px]">
          <div className="bg-[rgba(225,29,72,0.25)] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[25px] shrink-0">
            <Text1 text="Today" additionalClassNames="font-['DM_Sans:SemiBold',sans-serif] font-semibold text-[#fefafb]" />
          </div>
          <div className="bg-[#fdedf1] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[25px] shrink-0">
            <Text1 text="Yesterday" additionalClassNames="font-['DM_Sans:Regular',sans-serif] font-normal text-[#626262]" />
          </div>
          <div className="bg-[#fdedf1] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[25px] shrink-0">
            <Text1 text="This week" additionalClassNames="font-['DM_Sans:Regular',sans-serif] font-normal text-[#626262]" />
          </div>
          <div className="bg-[#fdedf1] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[25px] shrink-0">
            <Text1 text="This month" additionalClassNames="font-['DM_Sans:Regular',sans-serif] font-normal text-[#626262]" />
          </div>
          <div className="bg-[#fdedf1] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[25px] shrink-0">
            <Text1 text="This year" additionalClassNames="font-['DM_Sans:Regular',sans-serif] font-normal text-[#626262]" />
          </div>
          <div className="bg-[#fdedf1] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[25px] shrink-0">
            <Text1 text="Custom" additionalClassNames="font-['DM_Sans:Regular',sans-serif] font-normal text-[#626262]" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-0 top-0" data-name="Misc" />
      <div className="absolute content-stretch flex items-center justify-between left-[320px] top-[39px] w-[1068px]">
        <div className="content-stretch flex flex-col items-start justify-center leading-[24px] relative shrink-0 text-nowrap">
          <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#626262] text-[16px] tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Good Morning,
          </p>
          <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#404040] text-[24px] tracking-[-0.96px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Team Heritage!
          </p>
        </div>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <Text2 text="Add Sale" additionalClassNames="bg-[#e11d48]" />
            <Text2 text="Add Purchase" additionalClassNames="bg-[#264653]" />
            <div className="bg-[rgba(42,157,143,0.15)] content-stretch flex items-center justify-center px-[22px] py-[8px] relative rounded-[27px] shrink-0 w-[46px]">
              <Wrapper4>
                <g id="add">
                  <path d="M6 12H18" id="Vector" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  <path d="M12 18V6" id="Vector_2" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  <path d={svgPaths.p2723a800} id="Vector_3" opacity="0" stroke="var(--stroke-0, #404040)" strokeWidth="2.5" />
                </g>
              </Wrapper4>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
            <Wrapper4>
              <g clipPath="url(#clip0_1_1739)" id="notifications_none">
                <g id="Vector"></g>
                <path d={svgPaths.p34be6d80} fill="var(--fill-0, #A3AED0)" id="Vector_2" />
              </g>
              <defs>
                <clipPath id="clip0_1_1739">
                  <rect fill="white" height="24" width="24" />
                </clipPath>
              </defs>
            </Wrapper4>
            <Wrapper4>
              <g id="Communication / Phone">
                <path d={svgPaths.pc0eb080} id="Vector" stroke="var(--stroke-0, #A3AED0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </Wrapper4>
            <div className="relative shrink-0 size-[41px]" data-name="Avatar Style 6">
              <div className="absolute contents inset-0" data-name="Avatar">
                <div className="absolute bg-[#e11d48] border-[#cfcfcf] border-[0.4px] border-solid inset-[-10%_-1.43%_-30%_-10%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.1px] mask-size-[41px_41px]" data-name="Elipse 5" style={{ maskImage: `url('${imgElipse5}')` }} />
                <div className="absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold inset-[31.71%_29.27%_29.27%_31.71%] justify-center leading-[0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-13px] mask-size-[41px_41px] text-[#fefafb] text-[22px] tracking-[-0.44px]" style={{ fontVariationSettings: "'opsz' 14", maskImage: `url('${imgElipse5}')` }}>
                  <p className="leading-[20px]">A</p>
                </div>
                <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[41px_41px]" style={{ maskImage: `url('${imgElipse5}')` }}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Ellipse 5"></g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[1024px] left-0 overflow-clip top-0 w-[290px]" data-name="SideBar - Notification + Pro CTA + Avatar">
        <div className="absolute content-stretch flex flex-col gap-[16px] h-[635px] items-start left-[35px] overflow-x-clip overflow-y-auto top-[160px] w-[255px]">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-[255px]" data-name="Dashboard">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[174.658px]">
              <div className="h-[16.667px] relative shrink-0 w-[16.658px]">
                <div className="absolute contents inset-[-6%_-2.05%_4%_0]" data-name="vuesax/bold/element-equal">
                  <Wrapper5 additionalClassNames="inset-[-6%_-2.05%_4%_0]">
                    <g id="element-equal">
                      <path d={svgPaths.p3c494900} fill="var(--fill-0, #E11D48)" id="Vector" />
                      <path d={svgPaths.p2a445600} fill="var(--fill-0, #E11D48)" id="Vector_2" />
                      <path d={svgPaths.p3758b980} fill="var(--fill-0, #E11D48)" id="Vector_3" />
                      <path d={svgPaths.p272ebb00} fill="var(--fill-0, #E11D48)" id="Vector_4" />
                      <path d={svgPaths.p5c51480} fill="var(--fill-0, #E11D48)" id="Vector_5" />
                      <path d="M0 17L17 17L17 0L0 0L0 17Z" fill="var(--fill-0, #E11D48)" id="Vector_6" opacity="0" />
                    </g>
                  </Wrapper5>
                </div>
              </div>
              <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[#e11d48] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Dashboard
              </p>
            </div>
            <div className="bg-[#e11d48] h-[31px] rounded-[25px] shrink-0 w-[6px]" data-name="Active" />
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[257px]">
            <Wrapper6 additionalClassNames="shrink-0">
              <g id="shopping-cart">
                <g id="Vector" opacity="0"></g>
                <path d={svgPaths.pd58c900} fill="var(--fill-0, #626262)" id="Vector_2" />
                <path d={svgPaths.pa2dcc00} fill="var(--fill-0, #626262)" id="Vector_3" />
                <path d={svgPaths.p1a2e9430} fill="var(--fill-0, #626262)" id="Vector_4" />
                <path d={svgPaths.p3aa52180} fill="var(--fill-0, #626262)" id="Vector_5" />
              </g>
            </Wrapper6>
            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#626262] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Sale
            </p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/bold/shopping-cart">
              <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[17px]" data-name="bag-2">
                <Wrapper5 additionalClassNames="contents inset-0">
                  <g id="bag-2">
                    <path d={svgPaths.p33591900} fill="var(--fill-0, #626262)" id="Vector" />
                    <path d="M0 17L17 17L17 0L0 0L0 17Z" fill="var(--fill-0, #626262)" id="Vector_2" opacity="0" />
                  </g>
                </Wrapper5>
              </div>
            </div>
            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#626262] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Purchase
            </p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[17px]" data-name="chart">
              <Wrapper5 additionalClassNames="contents inset-0">
                <g id="chart">
                  <g id="Vector" opacity="0"></g>
                  <path d={svgPaths.p3c441a32} fill="var(--fill-0, #626262)" id="Vector_2" />
                  <path d={svgPaths.p293ccd00} fill="var(--fill-0, #626262)" id="Vector_3" />
                  <path d={svgPaths.p20b26e00} fill="var(--fill-0, #626262)" id="Vector_4" />
                  <path d={svgPaths.p9ce4380} fill="var(--fill-0, #626262)" id="Vector_5" />
                </g>
              </Wrapper5>
            </div>
            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#626262] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Report
            </p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/bold/card-receive">
              <Wrapper6 additionalClassNames="[grid-area:1_/_1] ml-0 mt-0">
                <g id="card-receive">
                  <path d={svgPaths.p9aa5a00} fill="var(--fill-0, #626262)" id="Vector" />
                  <path d={svgPaths.p1ffeb800} fill="var(--fill-0, #626262)" id="Vector_2" />
                  <path d={svgPaths.p1259a240} fill="var(--fill-0, #626262)" id="Vector_3" />
                  <g id="Vector_4" opacity="0"></g>
                </g>
              </Wrapper6>
            </div>
            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#626262] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Credit
            </p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[17px]" data-name="shop-remove">
              <Wrapper5 additionalClassNames="contents inset-0">
                <g id="shop-remove">
                  <g id="Vector" opacity="0"></g>
                  <path d={svgPaths.p3cba1100} fill="var(--fill-0, #626262)" id="Vector_2" />
                  <path d={svgPaths.pb194900} fill="var(--fill-0, #626262)" id="Vector_3" />
                </g>
              </Wrapper5>
            </div>
            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#626262] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Stock Review
            </p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[17px]" data-name="buy-crypto">
              <Wrapper5 additionalClassNames="contents inset-0">
                <g id="buy-crypto">
                  <path d={svgPaths.p119dbc80} fill="var(--fill-0, #626262)" id="Vector" />
                  <g id="Vector_2" opacity="0"></g>
                  <path d={svgPaths.p45b7bc0} fill="var(--fill-0, #626262)" id="Vector_3" />
                </g>
              </Wrapper5>
            </div>
            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#626262] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Purchase Prediction
            </p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/bold/timer-start">
              <Wrapper6 additionalClassNames="[grid-area:1_/_1] ml-0 mt-0">
                <g id="timer-start">
                  <path d={svgPaths.p17787900} fill="var(--fill-0, #626262)" id="Vector" />
                  <path d={svgPaths.p1e429e00} fill="var(--fill-0, #626262)" id="Vector_2" />
                  <path d={svgPaths.p3d306380} fill="var(--fill-0, #626262)" id="Vector_3" />
                  <g id="Vector_4" opacity="0"></g>
                </g>
              </Wrapper6>
            </div>
            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#626262] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Attendance
            </p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/bold/profile-2user">
              <Wrapper6 additionalClassNames="[grid-area:1_/_1] ml-0 mt-0">
                <g id="profile-2user">
                  <path d={svgPaths.p265fc00} fill="var(--fill-0, #626262)" id="Vector" />
                  <path d={svgPaths.p24387800} fill="var(--fill-0, #626262)" id="Vector_2" />
                  <path d={svgPaths.p101b1200} fill="var(--fill-0, #626262)" id="Vector_3" />
                  <path d={svgPaths.p1f2ba00} fill="var(--fill-0, #626262)" id="Vector_4" />
                  <path d="M0 17L17 17L17 0L0 0L0 17Z" fill="var(--fill-0, #626262)" id="Vector_5" opacity="0" />
                </g>
              </Wrapper6>
            </div>
            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#626262] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Staff Management
            </p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[17px]" data-name="ticket-discount">
              <Wrapper5 additionalClassNames="contents inset-0">
                <g id="ticket-discount">
                  <path d={svgPaths.p2d37bd00} fill="var(--fill-0, #626262)" id="Vector" />
                  <g id="Vector_2" opacity="0"></g>
                </g>
              </Wrapper5>
            </div>
            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#626262] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Tax
            </p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[17px]" data-name="receipt-2">
              <Wrapper5 additionalClassNames="contents inset-0">
                <g id="receipt-2">
                  <path d={svgPaths.pe18c300} fill="var(--fill-0, #626262)" id="Vector" />
                  <g id="Vector_2" opacity="0"></g>
                </g>
              </Wrapper5>
            </div>
            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#626262] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Total Expenses
            </p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[15px]" data-name="megaphone 1">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <g clipPath="url(#clip0_1_1903)" id="megaphone 1">
                  <path d={svgPaths.p31b37d00} fill="var(--fill-0, #626262)" id="Vector" />
                  <path d={svgPaths.p32fbd380} fill="var(--fill-0, #626262)" id="Vector_2" />
                  <path d={svgPaths.p31801580} fill="var(--fill-0, #626262)" id="Vector_3" />
                  <path d={svgPaths.p449ca80} fill="var(--fill-0, #626262)" id="Vector_4" />
                  <path d={svgPaths.p2951a380} fill="var(--fill-0, #626262)" id="Vector_5" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1903">
                    <rect fill="white" height="15" width="15" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#626262] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              WhatsApp Marketing
            </p>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[129px] w-[290px]" data-name="Separator">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 290 1">
              <g id="Separator">
                <line id="Separator_2" stroke="var(--stroke-0, #F4F7FE)" x2="290" y1="0.5" y2="0.5" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute contents left-[37px] top-[49px]" data-name="Logo">
          <div className="absolute h-[43px] left-[37px] top-[49px] w-[185px]" data-name="Logo">
            <div className="absolute bottom-0 left-[-2.25%] right-[84.23%] top-1/4" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 32.25">
                <path d={svgPaths.p2e571180} fill="var(--fill-0, #E11D48)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[53.85%_83.33%_32.69%_13.51%]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.83333 5.78846">
                <path d={svgPaths.p36727b80} fill="var(--fill-0, #282828)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[67.31%_84.23%_0_13.51%]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16667 14.0577">
                <path d={svgPaths.p1668e700} fill="var(--fill-0, #E11D48)" id="Vector" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-[17.57%] right-[66.67%] top-1/4" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.1667 32.25">
                <path d={svgPaths.p280bb200} fill="var(--fill-0, #E11D48)" id="Vector" />
              </svg>
            </div>
            <p className="absolute capitalize font-['Figma_Hand:Regular',sans-serif] leading-[normal] left-[65px] not-italic text-[#e11d48] text-[12px] text-nowrap top-[30px] tracking-[-0.12px]">Billingverse</p>
            <div className="absolute inset-[23.26%_26.49%_32.56%_36.76%]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 19">
                <path d={svgPaths.p2979f300} fill="var(--fill-0, #282828)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[55.81%_22.16%_30.23%_74.59%]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <path d="M6 0H0V6H6V0Z" fill="var(--fill-0, #E11D48)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[33px] top-[784px] w-[257px]">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Profile">
            <div className="[grid-area:1_/_1] content-stretch flex gap-[16px] items-center ml-0 mt-[3px] relative">
              <div className="relative shrink-0 size-[17px]" data-name="setting-2">
                <Wrapper5 additionalClassNames="contents inset-0">
                  <g id="setting-2">
                    <path d={svgPaths.p23b19400} fill="var(--fill-0, #404040)" id="Vector" />
                    <g id="Vector_2" opacity="0"></g>
                  </g>
                </Wrapper5>
              </div>
              <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#404040] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Settings
              </p>
            </div>
            <div className="[grid-area:1_/_1] h-[36px] ml-[252px] mt-0 rounded-[25px] w-[4px]" data-name="Active" />
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[17px]" data-name="forward">
              <Wrapper5 additionalClassNames="contents inset-0">
                <g id="forward">
                  <g id="Vector" opacity="0"></g>
                  <path d={svgPaths.p3609db80} fill="var(--fill-0, #404040)" id="Vector_2" />
                  <path d={svgPaths.p3829ec00} fill="var(--fill-0, #404040)" id="Vector_3" />
                </g>
              </Wrapper5>
            </div>
            <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#404040] text-[16px] text-nowrap tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Getting Started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}