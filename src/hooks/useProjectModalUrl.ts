"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAtom, useSetAtom } from "jotai";
import { selectedProjectAtom, isModalOpenAtom } from "@/store/modalAtom";
import { getItemContent } from "@/data/data";

/** Keeps project modal state in sync with ?project= URL and browser history. */
export function useProjectModalUrl() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedItem] = useAtom(selectedProjectAtom);
  const [isModalOpen] = useAtom(isModalOpenAtom);
  const setSelectedItem = useSetAtom(selectedProjectAtom);
  const setIsModalOpen = useSetAtom(isModalOpenAtom);

  useEffect(() => {
    const projectParam = searchParams.get("project");
    if (projectParam && getItemContent(projectParam)) {
      setSelectedItem(projectParam);
      setIsModalOpen(true);
    }
  }, [searchParams, setSelectedItem, setIsModalOpen]);

  useEffect(() => {
    const param = searchParams.get("project");
    if (isModalOpen && selectedItem) {
      if (param !== selectedItem) {
        router.push(`${pathname}?project=${selectedItem}`, { scroll: false });
      }
    } else if (!isModalOpen && param) {
      router.replace(pathname, { scroll: false });
    }
  }, [isModalOpen, selectedItem, pathname, router, searchParams]);

  useEffect(() => {
    const handlePopState = () => {
      const projectId = new URLSearchParams(window.location.search).get(
        "project"
      );
      if (projectId && getItemContent(projectId)) {
        setSelectedItem(projectId);
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
        setSelectedItem(null);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [setSelectedItem, setIsModalOpen]);
}
