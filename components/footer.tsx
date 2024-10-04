import {
  Logo2,
  YoutubeIcon,
  TiktokIcon,
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
  XIcon,
} from "@/components/icons";
import Wrapper from "@/components/wrapper";

export default function Footer() {
  const socails = [
    {
      url: "youtube",
      icon: <YoutubeIcon width={28} height={20} />,
    },
    {
      url: "tiktok",
      icon: <TiktokIcon width={24} height={28} />,
    },
    {
      url: "instagram",
      icon: <InstagramIcon width={28} height={28} />,
    },
    {
      url: "linkedin",
      icon: <LinkedinIcon width={28} height={28} />,
    },
    {
      url: "facebook",
      icon: <FacebookIcon width={27} height={28} />,
    },
    {
      url: "x",
      icon: <XIcon width={28} height={28} />,
    },
  ];
  return (
    <div className="bg-stickyRed pt-10">
      <Wrapper>
        <Logo2 className="md:w-[1145px] md:h-[649px]" />
        <div className="flex md:flex-row flex-col-reverse md:justify-center justify-start md:space-x-36 gap-y-6 md:mt-12 py-10 w-full">
          <div className="flex flex-col justify-start">
            <span className="text-[24px] text-stickyWhite leading-[19.2px] font-medium md:mb-2 md:mt-0 mt-6">
              Support Hours:
            </span>
            <p className="text-[24px] text-stickyWhite leading-[19.2px] font-normal md:mt-0 mt-4">
              Monday to Friday, 9:00 AM - 5:00 PM EST
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-[24px] text-stickyWhite leading-[19.2px] font-normal md:mt-10 mt-4">
                1-855-9-STICKY (784259)
              </p>
              <p className="text-[24px] text-stickyWhite leading-[19.2px] font-medium">
                hello@stickycards.co
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-10">
              {socails?.map((social, index) => (
                <div
                  key={index}
                  className="cursor-pointer flex items-center justify-center rounded-full
                 w-[44.27px] h-[44.27px] bg-stickyWhite"
                >
                  {social?.icon}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <span className="text-[24px] text-stickyWhite leading-[19.2px] font-medium md:mb-4">
              Company
            </span>
            <p className="text-[24px] text-stickyWhite leading-[19.2px] font-normal">
              Book Demo
            </p>
            <p className="text-[24px] text-stickyWhite leading-[19.2px] font-normal">
              Features
            </p>
            <p className="text-[24px] text-stickyWhite leading-[19.2px] font-normal">
              Pricing
            </p>
            <p className="text-[24px] text-stickyWhite leading-[19.2px] font-normal">
              Integrations
            </p>
            <p className="text-[24px] text-stickyWhite leading-[19.2px] font-normal">
              Partner Program
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <span className="text-[24px] text-stickyWhite leading-[19.2px] font-medium md:mb-4">
              Resources
            </span>
            <p className="text-[24px] text-stickyWhite leading-[19.2px] font-normal">
              Contact Us
            </p>
            <p className="text-[24px] text-stickyWhite leading-[19.2px] font-normal">
              Loyalty Guides
            </p>
            <p className="text-[24px] text-stickyWhite leading-[19.2px] font-normal">
              Privacy Policy
            </p>
            <p className="text-[24px] text-stickyWhite leading-[19.2px] font-normal">
              Terms of Service
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
