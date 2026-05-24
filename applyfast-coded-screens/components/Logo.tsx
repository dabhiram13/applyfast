export function ApplyfastLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="logo" aria-label="Applyfast">
      <span className="logo-mark">
        <svg width="34" height="34" viewBox="0 0 64 64" fill="none" role="img" aria-hidden="true">
          <path d="M8 36.5L48 18.5L56 10L45 54L36 58L43 29L14 42L8 36.5Z" fill="#B7F34A"/>
          <path d="M10 45L38 35L34 48L4 57L10 45Z" fill={dark ? "#0D0F12" : "#FFFFFF"}/>
        </svg>
      </span>
      <span className={dark ? "apply dark" : "apply"}>Apply</span><span className="fast">fast</span>
    </div>
  );
}
