"use client";

import { useAtomValue } from "jotai";
import { isHeroInViewAtom } from "@/store/modalAtom";
import NavigationNavbar from "@/components/NavigationNavbar";

export default function ClientLayoutWrapper() {
  const isHeroVisible = useAtomValue(isHeroInViewAtom);

  return <>{!isHeroVisible && <NavigationNavbar />}</>;
}
