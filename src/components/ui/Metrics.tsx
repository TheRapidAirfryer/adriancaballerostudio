export interface MetricItem {
  value: string;
  label: string;
  isPlaceholder?: boolean;
}

export function Metrics({ items }: { items: MetricItem[] }) {
  return (
    <dl className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
      {items.map((item) => (
        <div key={item.label} className="border-t border-black/10 pt-5">
          <dt className="order-2 mt-2 text-sm text-neutral-500">{item.label}</dt>
          <dd
            className="order-1 text-3xl font-medium tracking-tight md:text-5xl"
            title={item.isPlaceholder ? "Cifra pendiente por confirmar con datos reales" : undefined}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
