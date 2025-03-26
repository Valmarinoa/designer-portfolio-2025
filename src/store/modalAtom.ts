import { atom } from "jotai";

// Holds the selected project ID
export const selectedProjectAtom = atom<string | null>(null);

// Controls whether the modal is open
export const isModalOpenAtom = atom(false);
export const isHeroInViewAtom = atom(false);
