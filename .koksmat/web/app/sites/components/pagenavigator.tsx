"use client";
import { useEffect, useRef, useState } from "react";
import { LinkItem } from "./topnav";
import { cn } from "@/lib/utils";

export interface PageNavigatorProps {
  linkClassname: string;
  links: LinkItem[];
}

function NavItem(props: {
  link: LinkItem;
  active: boolean;
  classname: string;
}) {
  return (
    <div key={props.link.id}>
      <a
        href={props.link.href}
        className={cn(props.classname, props.active ? "font-bold text-xl" : "")}
      >
        {props.link.title}
      </a>
    </div>
  );
}

export default function PageNavigator(props: PageNavigatorProps) {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState("");
  const [spying, setspying] = useState<string[]>([]);
  useEffect(() => {
    const handleObsever: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry, index) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: "-0% 0% -0% 0px",
    });

    const elements = document.querySelectorAll(".scrollspy");
    elements.forEach((elem) => {
      observer?.current?.observe(elem);
      spying.push(elem.id);
    });

    return () => observer.current?.disconnect();
  }, []);

  return (
    <div>
      {props.links.map((link) => {
        return (
          <div>
            <NavItem
              classname={props.linkClassname}
              key={link.href}
              link={link}
              active={link.title === activeId}
            />
          </div>
        );
      })}
    </div>
  );
}
