import { useEffect, useRef, useState } from "react";

function createRootElement(id: string): HTMLDivElement {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", id);
  rootContainer.setAttribute("role", "presentation");
  return rootContainer;
}

function addRootElement(rootElem: Element): void {
  document.body.insertBefore(
    rootElem,
    (document.body.lastElementChild as HTMLElement)?.nextElementSibling ?? null
  );
}

export default function usePortal(id: string): HTMLElement | null {
  const rootElemRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const existingParent = document.querySelector(`#${id}`);
    const parentElem = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElem);
    }

    if (rootElemRef.current) {
      rootElemRef.current.setAttribute("id", "wrapper");
      parentElem.appendChild(rootElemRef.current);
    }

    return () => {
      if (rootElemRef.current) {
        rootElemRef.current.remove();
        if (parentElem.childNodes.length === 0) {
          parentElem.remove();
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  function getRootElem() {
    if (!rootElemRef.current && typeof document !== "undefined") {
      rootElemRef.current = document.createElement("div");
    }
    return rootElemRef.current;
  }

  return mounted ? getRootElem() : null;
}
