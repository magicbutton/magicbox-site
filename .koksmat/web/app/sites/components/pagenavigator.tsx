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
        className={cn(props.classname, props.active ? "font-bold" : "")}
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
      <div className="mb-3">
        <NavItem
          classname={props.linkClassname}
          link={{ title: "Top of page", href: "#top" }}
          active={false}
        />
      </div>
      {props.links.map((link, key) => {
        return (
          <div key={key}>
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
