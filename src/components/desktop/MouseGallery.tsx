import React from "react";
import { projectsData } from "@/data/data";
import Image from "next/image";

interface Photo {
  src: string;
  index: number;
  status: "active" | "inactive";
  position?: { x: number; y: number };
  zIndex?: number;
  type: string;
  title: string;
  category: string;
}

const MouseGallery: React.FC = () => {
  const [photos, setPhotos] = React.useState<Photo[]>(
    Object.entries(projectsData).map(([_, project], index) => ({
      src: project.src,
      type: project.type,
      index: index,
      status: "inactive",
      title: project.title,
      category: project.category,
    }))
  );

  const [globalIndex, setGlobalIndex] = React.useState(0);
  const [lastMousePosition, setLastMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  const [selectedPhoto, setSelectedPhoto] = React.useState<Photo | null>(null);

  const DISPLAY_DISTANCE = 50;
  const N_DISPLAY = 7;

  const mouseDistance = (x: number, y: number) => {
    return Math.hypot(x - lastMousePosition.x, y - lastMousePosition.y);
  };

  const activatePhoto = (index: number, x: number, y: number) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) => {
        if (photo.index === index) {
          return {
            ...photo,
            status: "active",
            position: { x, y },
            zIndex: globalIndex,
          };
        }
        return photo;
      })
    );
    setLastMousePosition({ x, y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mouseDistance(e.clientX, e.clientY) > DISPLAY_DISTANCE) {
      const currentIndex = globalIndex % photos.length;
      const inactiveIndex = (globalIndex - N_DISPLAY) % photos.length;

      activatePhoto(currentIndex, e.clientX, e.clientY);

      if (inactiveIndex >= 0) {
        setPhotos((prevPhotos) =>
          prevPhotos.map((photo) => {
            if (photo.index === inactiveIndex) {
              return { ...photo, status: "inactive" };
            }
            return photo;
          })
        );
      }

      setGlobalIndex((prev) => prev + 1);
    }
  };

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <>
      {!selectedPhoto && (
        <div
          className="min-h-screen overflow-hidden m-0 p-0"
          onMouseMove={handleMouseMove}
        >
          {photos.map((photo) => (
            <div
              key={photo.index}
              className={`absolute cursor-pointer ${
                photo.status === "inactive" ? "hidden" : "block"
              }`}
              style={{
                left: photo.position?.x,
                top: photo.position?.y,
                zIndex: photo.zIndex,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => handlePhotoClick(photo)}
            >
              {photo.type === "video" ? (
                <video
                  src={photo.src}
                  className="w-[20vmin]"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image
                  src={photo.src}
                  width={500}
                  height={500}
                  className="w-[20vmin]"
                  alt={`Trail photo ${photo.index + 1}`}
                  priority={photo.index < 3}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-[#f2f2f2]/20 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className=" p-6 rounded-lg max-w-lg w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-6">
              {selectedPhoto.type === "video" ? (
                <video
                  src={selectedPhoto.src}
                  className="w-full max-h-[50vh] object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image
                  src={selectedPhoto.src}
                  width={500}
                  height={500}
                  className="w-full max-h-[50vh] object-contain"
                  alt={selectedPhoto.title}
                  priority
                />
              )}
            </div>
            <h2 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h2>
            <p className="text-gray-600 mb-4">{selectedPhoto.category}</p>
            <button
              className="text-sm text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedPhoto(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MouseGallery;
