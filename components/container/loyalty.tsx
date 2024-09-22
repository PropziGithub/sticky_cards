import { CannabisIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
export default function Loyalty() {
  return (
    <div className="flex flex-col justify-center items-center bg-stickyWhite p-16">
      <div className="max-w-[674px] flex flex-col justify-center items-center px-10 gap-4">
        <CannabisIcon height={127} width={675} />
        <span className="text-center text-[110px] text-stickyBlack font-medium leading-[99px]">
          loyalty cards
        </span>
        <span className="text-center text-[48px] text-stickyBlack font-medium leading-[52.8px]">
          Send Push Notifications with 100% Delivery Rates.
        </span>
        <div className="flex justify-between items-center space-x-10 pt-2">
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
