/**
 * Photography manifest. Real, vetted images live in /public/images and are
 * served through next/image (optimized, lazy). Remote Unsplash/Pexels URLs are
 * enabled in next.config and can be slotted in here as the library grows —
 * every entry keeps an alt string so imagery stays accessible and intentional.
 */
export interface MediaAsset {
  src: string;
  alt: string;
}

export const media = {
  poleNetwork: {
    src: "/images/pole-network.jpg",
    alt: "Overhead distribution pole with crossarm, insulators and conductors against a clear sky.",
  },
  poleWood: {
    src: "/images/pole-wood.jpg",
    alt: "Wood distribution pole carrying overhead conductors and a transformer.",
  },
  workCad: {
    src: "/images/work-cad.jpg",
    alt: "A distribution construction drawing open on a large CAD monitor.",
  },
  workReview: {
    src: "/images/work-review.jpg",
    alt: "An engineer reviewing a marked-up utility drawing at a workstation.",
  },
} satisfies Record<string, MediaAsset>;
