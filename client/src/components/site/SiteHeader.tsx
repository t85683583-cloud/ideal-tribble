import { Menu, Monitor, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/content";
import { useTheme, type ThemeChoice } from "@/contexts/ThemeContext";

export function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const options: Array<{ label: string; value: ThemeChoice; icon: typeof Sun }> = [
    { label: "Claro", value: "light", icon: Sun },
    { label: "Sistema", value: "system", icon: Monitor },
    { label: "Escuro", value: "dark", icon: Moon },
  ];
  return <div className="theme-picker" aria-label="Escolher tema">
    {options.map(({ label, value, icon: Icon }) => <button key={value} className={theme === value ? "is-active" : ""} onClick={() => setTheme(value)} aria-label={`Tema ${label}`} title={label}><Icon size={15} /></button>)}
  </div>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <>
    <header className="site-header">
      <a href="#top" className="brand" aria-label="BidX início"><span>Bid</span><b>X</b><em>strategy deck</em></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <div className="header-actions"><ThemePicker /><a className="header-cta" href="#proximos-passos">Começar pela fundação <span>↗</span></a><button className="mobile-menu" onClick={() => setOpen(true)} aria-label="Abrir menu"><Menu size={20} /></button></div>
    </header>
    {open && <div className="mobile-drawer-backdrop" onClick={() => setOpen(false)}><aside className="mobile-drawer" onClick={event => event.stopPropagation()}><div className="drawer-head"><span className="brand"><span>Bid</span><b>X</b></span><button onClick={() => setOpen(false)} aria-label="Fechar menu"><X size={20} /></button></div><nav>{navItems.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav><ThemePicker /></aside></div>}
  </>;
}
