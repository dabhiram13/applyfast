import type { Recommendation } from "./data"

export function getRecommendation(score: number, match: number): Recommendation {
  if (score >= 80 && match >= 82) return "Apply Now"
  if (score >= 70 && match >= 65) return "Tailor First"
  if (score >= 45) return "Risky"
  return "Skip"
}

export function recommendationTone(recommendation: Recommendation) {
  switch (recommendation) {
    case "Apply Now":
      return "border-emerald-200 bg-emerald-50 text-emerald-800"
    case "Tailor First":
      return "border-lime-200 bg-lime-50 text-lime-900"
    case "Risky":
      return "border-amber-200 bg-amber-50 text-amber-800"
    case "Skip":
      return "border-red-200 bg-red-50 text-red-800"
  }
}
