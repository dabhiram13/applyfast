import Link from "next/link"
import { cn } from "@/lib/utils"

type ApplyfastLogoProps = {
  href?: string
  className?: string
  markClassName?: string
  textClassName?: string
  showText?: boolean
  dark?: boolean
}

export function ApplyfastMark({ className }: { className?: string; dark?: boolean }) {
  return (
    <img
      src="/brand/logo/applyfast_mark.svg"
      alt=""
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
    />
  )
}

export function ApplyfastLogo({
  href,
  className,
  markClassName,
  textClassName,
  showText = true,
  dark = false,
}: ApplyfastLogoProps) {
  const logoSrc = dark
    ? "/brand/logo/applyfast_logo_full_dark.svg"
    : "/brand/logo/applyfast_logo_full_light.svg"

  const body = (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      {showText ? (
        <img
          src={logoSrc}
          alt="Applyfast"
          className={cn("h-9 w-auto", textClassName)}
        />
      ) : (
        <ApplyfastMark className={markClassName} dark={dark} />
      )}
    </div>
  )

  if (!href) return body
  return (
    <Link href={href} className="inline-flex" aria-label="Applyfast home">
      {body}
    </Link>
  )
}
