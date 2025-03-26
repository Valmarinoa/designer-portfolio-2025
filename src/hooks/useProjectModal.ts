import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function useProjectModal() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isModalOpen, setIsModalOpen] = useState(!!searchParams.get("project"));
  const [selectedItem, setSelectedItem] = useState<string>(
    searchParams.get("project") || ""
  );

  useEffect(() => {
    const projectParam = searchParams.get("project");
    setSelectedItem(projectParam || "");
    setIsModalOpen(!!projectParam);
  }, [searchParams]);

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
    setIsModalOpen(true);
    router.push(`?project=${itemId}`, { scroll: false });
  };

  const handleClose = () => {
    setIsModalOpen(false);
    router.push("/", { scroll: false });
  };

  return {
    isModalOpen,
    selectedItem,
    handleItemClick,
    handleClose,
  };
}
