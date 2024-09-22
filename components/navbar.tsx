"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";

import { ChevronDownIcon, Logo } from "@/components/icons";

export const AppNavbar = () => {
  return (
    <Navbar maxWidth="full" position="sticky" className="bg-stickyWhite">
      <NavbarContent className="w-full flex-1">
        <NavbarBrand>
          <Logo size={70} />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-10 w-full flex-1">
        <NavbarItem>
          <Link className="text-stickyBlack" href="#" aria-current="page">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-stickyBlack" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-stickyBlack" href="#">
            Integrations
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-stickyBlack" href="#">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-stickyBlack" href="#">
            Affiliates
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="text-stickyBlack p-0 bg-transparent data-[hover=true]:bg-transparent"
                  radius="sm"
                  variant="light"
                  endContent={<ChevronDownIcon size={8} />}
                >
                  Support
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="w-full flex-1" justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-stickyBlack text-stickyWhite"
            href="#"
            variant="flat"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
