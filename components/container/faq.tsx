"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { PlusIcon } from "@/components/icons";
export default function FAQ() {
  const faqs = [
    {
      question: "Why should I choose Sticky Cards for my dispensary’s loyalty?",
      answer:
        "Our focus is on the customer experience. A happy customer means they’ll keep coming back. Plus you can send as many messages as you want, easily work with your POS system, and there are no contracts to sign!",
    },
    {
      question: "Question #2",
      answer:
        "Our focus is on the customer experience. A happy customer means they’ll keep coming back. Plus you can send as many messages as you want, easily work with your POS system, and there are no contracts to sign!",
    },
    {
      question: "Question #3",
      answer:
        "Our focus is on the customer experience. A happy customer means they’ll keep coming back. Plus you can send as many messages as you want, easily work with your POS system, and there are no contracts to sign!",
    },
    {
      question: "Question #4",
      answer:
        "Our focus is on the customer experience. A happy customer means they’ll keep coming back. Plus you can send as many messages as you want, easily work with your POS system, and there are no contracts to sign!",
    },
    {
      question: "Question #5",
      answer:
        "Our focus is on the customer experience. A happy customer means they’ll keep coming back. Plus you can send as many messages as you want, easily work with your POS system, and there are no contracts to sign!",
    },
  ];

  return (
    <div className="bg-stickyWhite flex flex-col justify-center items-center md:px-12 py-12 px-4">
      <div className="flex flex-col justify-center items-center bg-stickyWhite gap-10 ">
        <span className="md:text-[80px] md:leading-[80px] text-[50px] leading-[50px] font-medium text-stickyBlack">
          Frequently Asked Questions
        </span>
        <div className="md:w-[914px] w-full">
          <Accordion
            variant="bordered"
            className="border border-stickyBlack p-0 m-0"
            defaultExpandedKeys={["0"]}
            dividerProps={{ className: "bg-stickyBlack max-w-full" }}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                indicator={<></>}
                key={index}
                aria-label="Accordion "
                title={faq?.question}
                classNames={{
                  base: "px-6 py-2",
                  title:
                    "text-stickyBlack md:text-[24px] md:leading-[24px] text-[18px] leading-[18px] font-medium",
                  content:
                    "text-stickyBlack md:text-[24px] md:leading-[24px] text-[18px] leading-[18px] font-normal md:px-6 px-3 flex items-start space-x-10",
                }}
              >
                <p>{faq?.answer}</p>
                <PlusIcon height={20} width={20} className="flex-none"/>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
