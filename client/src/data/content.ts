import {
  BadgeCheck,
  Boxes,
  Bot,
  CircleDollarSign,
  Gavel,
  MessageSquare,
  PackageCheck,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

export type Tone = "blue" | "lime" | "violet";

export const navItems = [
  { label: "Visão", href: "#visao" },
  { label: "Produto", href: "#produto" },
  { label: "Leilões", href: "#leiloes" },
  { label: "Proteção", href: "#protecao" },
  { label: "Roadmap", href: "#roadmap" },
];

export const pillars: Array<{
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: Tone;
  features: string[];
}> = [
  {
    eyebrow: "Pilar 01",
    title: "Marketplace",
    description: "A camada de descoberta, compra e venda que organiza o catálogo e dá contexto para cada decisão.",
    icon: Store,
    tone: "blue",
    features: ["Produtos físicos e digitais", "Busca, categorias e filtros", "Lojas, favoritos e avaliações"],
  },
  {
    eyebrow: "Pilar 02",
    title: "Leilões",
    description: "Uma experiência de negociação clara, com ritmo, transparência e regras visíveis para cada lance.",
    icon: Gavel,
    tone: "lime",
    features: ["Lance atual e incremento", "Histórico e contador", "Vencedor e pagamento"],
  },
  {
    eyebrow: "Pilar 03",
    title: "Economia digital",
    description: "Produtos e serviços digitais entram em um fluxo próprio, com entrega, conversa e proteção planejadas.",
    icon: Sparkles,
    tone: "violet",
    features: ["Entrega automática ou manual", "Chat relacionado à compra", "Serviços e produtos digitais"],
  },
];

export const buyerSteps = [
  { label: "Produto", caption: "Encontra e compara", icon: Search },
  { label: "Checkout BidX", caption: "Escolhe como pagar", icon: WalletCards },
  { label: "Transação", caption: "Fluxo acompanhado", icon: ShieldCheck },
  { label: "Entrega", caption: "Recebe e confirma", icon: PackageCheck },
];

export const roadmap = [
  { phase: "01", title: "Fundação", status: "Agora", description: "Auditoria do sistema atual, autenticação, banco, pagamentos e segurança.", items: ["Auditar fluxos atuais", "Consolidar regras", "Criar base de testes"] },
  { phase: "02", title: "Experiência", status: "Próximo", description: "Uma nova camada de produto para home, busca, anúncio, produto e painéis.", items: ["Novo design system", "Home e descoberta", "Cadastro guiado"] },
  { phase: "03", title: "Marketplace", status: "Planejado", description: "Categorias, filtros, favoritos, lojas e reputação baseada em dados reais.", items: ["Catálogo estruturado", "Perfil de vendedor", "Avaliações"] },
  { phase: "04", title: "Leilões", status: "Planejado", description: "Lances consistentes, encerramento, vencedor, notificações e pagamento.", items: ["Incremento mínimo", "Encerramento seguro", "Fluxo do vencedor"] },
  { phase: "05", title: "Transações", status: "Futuro", description: "Pedidos, chat, entrega, confirmação, disputas e reembolsos.", items: ["Pedido protegido", "Chat por compra", "Resolução de problemas"] },
  { phase: "06", title: "Produtos digitais", status: "Futuro", description: "Entrega automática, entrega manual e serviços em uma experiência própria.", items: ["Entrega automática", "Serviços digitais", "Confirmação"] },
  { phase: "07", title: "Sistema financeiro", status: "Futuro", description: "Saldo pendente, liberação, saques e verificação com base em regras financeiras sólidas.", items: ["Saldo pendente", "Conciliação", "Saques"] },
  { phase: "08", title: "Crescimento", status: "Futuro", description: "Planos, destaques, publicidade e ferramentas comerciais para vendedores.", items: ["Destaques", "Planos", "Ferramentas comerciais"] },
];

export const architectureModules: Array<{ label: string; icon: LucideIcon; tone: Tone }> = [
  { label: "Marketplace", icon: Store, tone: "blue" },
  { label: "Products", icon: Boxes, tone: "blue" },
  { label: "Auctions", icon: Gavel, tone: "lime" },
  { label: "Bids", icon: CircleDollarSign, tone: "lime" },
  { label: "Orders", icon: PackageCheck, tone: "violet" },
  { label: "Payments", icon: WalletCards, tone: "violet" },
  { label: "Digital delivery", icon: Sparkles, tone: "blue" },
  { label: "Chat", icon: MessageSquare, tone: "lime" },
  { label: "Disputes", icon: Scale, tone: "lime" },
  { label: "Reviews", icon: BadgeCheck, tone: "blue" },
  { label: "Moderation", icon: Bot, tone: "violet" },
];

export const architectureLayers = [
  { label: "Experiências", items: ["Comprador", "Vendedor", "Admin"] },
  { label: "Domínios", items: ["Produtos", "Leilões", "Pedidos", "Reputação"] },
  { label: "Infraestrutura", items: ["Pagamentos", "Email", "Storage", "Observabilidade"] },
];
