type PageHeaderProps = {
  children?: React.ReactNode
}
export const PageHeader = ({ children }: PageHeaderProps) => (
  <h1 className="yx-heading text-4xl font-bold uppercase tracking-wider text-emerald-500 lg:text-6xl">
    {children}
  </h1>
)
