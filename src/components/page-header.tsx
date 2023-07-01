type PageHeaderProps = {
  children?: React.ReactNode
}
export const PageHeader = ({ children }: PageHeaderProps) => (
  <h1 className="yx-heading text-2xl font-bold uppercase tracking-wider text-emerald-500 lg:text-4xl">
    {children}
  </h1>
)
