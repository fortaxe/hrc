import React from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface ScrollRevealProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

// This function might need updates to support different cases.
const flatten = (children: React.ReactNode): React.ReactNode[] => {
  const result: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === React.Fragment) {
        result.push(...flatten((child.props as { children?: React.ReactNode })?.children));
      } else if ((child.props as { children?: React.ReactNode })?.children) {
        result.push(React.cloneElement(child, {}));
      } else {
        result.push(child);
      }
    } else {
      const parts = String(child).split(/(\s+)/);
      result.push(
        ...parts.map((part, index) => <React.Fragment key={index}>{part}</React.Fragment>),
      );
    }
  });

  return result.flatMap((child) => (Array.isArray(child) ? child : [child]));
};

function OpacityChild({
  children,
  index,
  progress,
  total,
}: {
  children: React.ReactNode;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.5, 1]);

  let className = "";
  if (React.isValidElement(children)) {
    className = (children.props as { className?: string })?.className ?? "";
  }

  return (
    <motion.span style={{ opacity }} className={cn(className, "h-fit")}>
      {children}
    </motion.span>
  );
}

export default function ScrollReveal({ children, className, ...props }: ScrollRevealProps) {
  const flat = flatten(children);
  const count = flat.length;

  const { scrollYProgress } = useScroll();

  return (
    <div
      {...props}
      className={cn(
        "sticky top-[100px] w-full text-background",
        className,
      )}
    >
      <div className="flex w-full min-w-fit flex-wrap whitespace-break-spaces">
        {flat.map((child, index) => {
          return (
            <OpacityChild
              progress={scrollYProgress}
              index={index}
              total={flat.length}
              key={index}
            >
              {child}
            </OpacityChild>
          );
        })}
      </div>
    </div>
  );
}
