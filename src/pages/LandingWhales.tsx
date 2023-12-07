import { FunctionComponent } from "react";
import Cards from "./components/cards";
import { Data } from "./data/data";

const LandingWhales: FunctionComponent = () => {
  return (
    <div className="relative bg-grey-900 w-full h-screen overflow-y-auto text-left text-base text-grey-900 font-body">
      <svg width="32768" height="19313" viewBox="0 0 32768 19313" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32768" height="19312.5" fill="black" />
      </svg>
      <div className="absolute top-[-114px] left-[-484px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(31,_169,_17,_0.81)_17.21%,_#2f15d0_64.58%,_rgba(0,_0,_0,_0))] w-[1334px] h-[1000px]" />
      <div className="example absolute top-[827px] left-[233px] overflow-x-auto rounded-xl shadow-[0px_4px_10px_rgba(0,_0,_0,_0.04),_0px_1px_1px_rgba(0,_0,_0,_0.04)] w-[653px] flex items-start justify-start p-5 box-border gap-[20px]">
        <Cards cards={Data} />
      </div>
      <div className="absolute top-[0px] left-[800px] bg-white shadow-[0px_8px_22px_-6px_rgba(24,_39,_75,_0.12),_0px_14px_64px_-4px_rgba(24,_39,_75,_0.12)] w-[640px] h-[1024px]" />
      <img
        className="absolute h-[5.86%] w-[4.17%] top-[88.28%] right-[91.67%] bottom-[5.86%] left-[4.17%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[369px] left-[937px] w-[365px] h-[347px] text-grey-200">
        <input type="text" placeholder="Your email address" className="placeholder:text-grey-200 placeholder:font-medium placeholder:leading-[120%] absolute top-[126px] left-[13px] rounded-lg bg-white shadow-[0px_4px_10px_rgba(0,_0,_0,_0.04),_0px_1px_1px_rgba(0,_0,_0,_0.04)] box-border w-[340px] flex flex-row items-center justify-start py-5 px-6 border-[1px] border-solid border-grey-100" />
        <div className="absolute top-[292px] left-[0px] w-[365px] h-[55px] opacity-[0.8] text-center text-grey-900">
          <div className="absolute top-[0px] left-[0px] rounded-lg flex flex-row items-center justify-center py-[18px] px-0">
            <div className="relative leading-[120%] font-semibold">
              You’ll receive an email with an invite link to join.
            </div>
          </div>
        </div>
        <div className="absolute top-[209px] left-[13px] w-[340px] h-[59px] text-center text-white cursor-pointer">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-grey-900 box-border w-[340px] h-[59px] flex flex-row items-center justify-center py-[18px] px-7 border-[1px] border-solid border-grey-900">
            <div className="relative leading-[120%] font-semibold">
              Get started
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[13px] w-[326px] h-[94px] text-20xl text-grey-300">
          <div className="absolute top-[0px] left-[0px] w-[326px] h-[94px]">
            <div className="absolute top-[0px] left-[0px] leading-[120%] font-medium">
              <p className="m-0">{`Sign up for `}</p>
              <p className="m-0">exclusive access.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[86px] left-[60px] w-[322px] h-[251px] text-12xl text-background-f2f2f2">
        <div className="absolute top-[48px] left-[0px] leading-[120%] font-medium flex items-center w-[313px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#000]">
          Get notified when a highly correlated whale makes a move
        </div>
        <div className="absolute top-[175px] left-[0px] text-base leading-[120%] font-medium flex items-center w-[322px] opacity-[0.7]">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
          alt=""
          src="/bell.svg"
        />
      </div>
      <div className="absolute top-[737px] left-[338px] text-6xl leading-[120%] font-medium text-background-f2f2f2 text-right flex items-center w-[400px]">
        Testimonials
      </div>
      <div className="absolute top-[786.5px] left-[59.5px] box-border w-[679px] h-px border-t-[1px] border-solid border-grey-50" />
      <div className="absolute top-[44px] left-[393px] w-[407px] h-[304px] text-3xs-1">
        <div className="absolute top-[48px] left-[46px] w-[597.1px] h-[171.5px]">
          <div className="absolute top-[0px] left-[203.7px] w-[189.7px] h-[171.5px] text-grey-800">
            <div className="absolute top-[0px] left-[0px] rounded-4xs-4 bg-white shadow-[0px_2.799999952316284px_7px_rgba(0,_0,_0,_0.04),_0px_0.699999988079071px_0.7px_rgba(0,_0,_0,_0.04)] w-[189.7px] h-[171.5px]">
              <div className="absolute top-[14px] left-[161.7px] rounded-8xs-2 bg-blue-blue w-3.5 h-3.5 overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="relative w-[7px] h-[6.66px]"
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className="absolute top-[137.9px] left-[14px] rounded-10xs-8 bg-grey-50 flex flex-row items-start justify-start p-[4.199999809265137px] gap-[2.8px]">
                <div className="relative leading-[120%] font-medium">
                  $1,000.00
                </div>
                <img
                  className="relative w-[11.2px] h-[11.2px] overflow-hidden shrink-0"
                  alt=""
                  src="/triangledown.svg"
                />
              </div>
              <img
                className="absolute top-[14px] left-[14px] w-7 h-7 overflow-hidden"
                alt=""
                src="/barchart2.svg"
              />
            </div>
            <div className="absolute top-[97.3px] left-[14px] w-[148px] h-[26px] text-xs-2 text-grey-900">
              <div className="absolute top-[0px] left-[0px] leading-[120%] font-medium">
                <p className="m-0">Notify me when any wallets</p>
                <p className="m-0">move more than</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[407.4px] w-[189.7px] h-[171.5px] text-xs-2">
            <div className="absolute top-[0px] left-[0px] rounded-4xs-4 bg-white shadow-[0px_2.799999952316284px_7px_rgba(0,_0,_0,_0.04),_0px_0.699999988079071px_0.7px_rgba(0,_0,_0,_0.04)] w-[189.7px] h-[171.5px]">
              <div className="absolute top-[14px] left-[161.7px] rounded-8xs-2 bg-blue-blue w-3.5 h-3.5 overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="relative w-[7px] h-[6.66px]"
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <img
                className="absolute top-[14px] left-[14px] w-7 h-7 overflow-hidden"
                alt=""
                src="/icon.svg"
              />
            </div>
            <div className="absolute top-[81.2px] left-[14px] w-[114.1px] h-[76px]">
              <div className="absolute top-[35px] left-[0px] rounded-10xs-8 bg-grey-50 flex flex-row items-center justify-end p-[4.199999809265137px] gap-[2.8px] text-right text-3xs-1 text-grey-800">
                <div className="relative leading-[120%] font-medium">{`> 30 days`}</div>
                <img
                  className="relative w-[11.2px] h-[11.2px] overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[0px] w-[114.1px] h-[26px]">
                <div className="absolute top-[0px] left-[0px] leading-[120%] font-medium flex items-center w-[114.1px]">
                  Notify me when any wallet dormant for
                </div>
              </div>
              <div className="absolute top-[63px] left-[0px] w-[107.8px] h-[13px]">
                <div className="absolute top-[0px] left-[0px] leading-[120%] font-medium flex items-center w-[107.8px]">
                  becomes active
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-4xs-4 [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2),_rgba(22,_93,_255,_0.16)),_#fff] shadow-[0px_2.799999952316284px_7px_rgba(0,_0,_0,_0.04),_0px_0.699999988079071px_0.7px_rgba(0,_0,_0,_0.04)] w-[189.7px] h-[171.5px] text-[14px]">
            <div className="absolute top-[56px] left-[14px] leading-[120%] font-medium">
              <p className="m-0">We’ll be sending</p>
              <p className="m-0">notifications to you</p>
              <p className="m-0">here</p>
            </div>
            <img
              className="absolute top-[14px] left-[14px] w-7 h-7 overflow-hidden"
              alt=""
              src="/bell1.svg"
            />
            <div className="absolute top-[122.5px] left-[14px] rounded-7xs-6 bg-white box-border w-[161.7px] h-[35px] flex flex-row items-center justify-start py-[8.399999618530273px] px-[11.199999809265137px] text-smi border-[0.7px] border-solid border-neutral-300">
              <div className="relative leading-[120%] font-medium">
                hello@gmail.com
              </div>
            </div>
            <div className="absolute top-[14px] left-[127.4px] rounded-7xs-6" />
            <div className="absolute top-[14px] left-[154px] text-3xs-1 leading-[120%] font-semibold text-right">
              Save
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[409px] left-[60px] w-[678px] h-[306px] text-right text-12xl text-background-f2f2f2">
        <img
          className="absolute top-[17px] left-[646px] w-8 h-8 overflow-hidden"
          alt=""
          src="/eye.svg"
        />
        <div className="absolute top-[65px] left-[373px] w-[305px] h-[147px]">
          <div className="absolute top-[0px] left-[0px] leading-[120%] font-medium flex items-center w-[305px]">
            Watch what the whales are doing
          </div>
          <div className="absolute top-[90px] left-[0px] text-base leading-[120%] font-medium flex items-center w-[305px] opacity-[0.7]">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </div>
        </div>
        <img
          className="absolute top-[-46px] left-[-60px] rounded-xl w-[455px] h-[426px] object-cover"
          alt=""
          src="/cohorts-1@2x.png"
        />
      </div>
    </div>
  );
};

export default LandingWhales;
