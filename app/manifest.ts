import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Applyfast",
    short_name: "Applyfast",
    description: "Visa-aware job decisions for international candidates.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0F12",
    theme_color: "#B7F34A",
  }
}
