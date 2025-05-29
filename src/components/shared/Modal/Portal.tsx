"use client";

import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import usePortal from "./usePortal";

interface PortalProps {
  id: string;
}

export const Portal = ({ id, children }: PropsWithChildren<PortalProps>) => {
  const target = usePortal(id);
  if (!target) return null; // SSR-safe

  return createPortal(children, target);
};
