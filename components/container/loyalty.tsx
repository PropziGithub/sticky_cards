import { CannabisIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
export default function Loyalty() {
  return (
    <div className="flex flex-col justify-center items-center bg-stickyWhite md:p-16 p-6">
      <div className="md:w-[780px] w-[500px] flex flex-col justify-center items-center px-10 gap-6">
        <CannabisIcon className="md:h-[127px] md:w-[675px] w-[400px] h-[127px]" />
        <span className="text-center text-stickyBlack font-medium text-[50px] leading-[11px] md:text-[110px]  md:leading-[99px]">
          loyalty cards
        </span>
        <span className="text-center  text-stickyBlack font-medium text-[30px]  md:text-[48px] md:leading-[52.8px]">
          Send Push Notifications with 100% Delivery Rates.
        </span>
        <div className="flex justify-between items-center md:space-x-10 space-x-4 pt-2 md:px-0 px-6">
          <Button
            as={Link}
            className="bg-stickyGreen text-stickyBlack text-[36px] h-[61px] rounded-[100px] p-4 font-bold leading-[28.8px]"
            href="#"
            variant="flat"
          >
            Try Now
          </Button>
          <Button
            as={Link}
            className="bg-stickyOrange text-stickyBlack text-[36px] h-[61px] rounded-[100px] py-2 font-bold leading-[28.8px]"
            href="#"
            variant="flat"
          >
            Book Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
