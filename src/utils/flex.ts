export type FlexProps = Partial<Record<"col" | "aic", boolean>>

const flex = ({ col, aic }: FlexProps) => ({
  display: "flex" as const,
  ...(col ? { flexDirection: "column" as const } : {}),
  ...(aic ? { alignItems: "center" as const } : {}),
})

export default flex
