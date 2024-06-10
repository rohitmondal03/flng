export type TLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type TNavLinks = {
  href: string;
  label: string;
}

export type TFeatures = {
  title: string;
  description: string;
}

export type TPricing = {
  title: string;
  description: string;
  price: number | string;
  features: string[];
}