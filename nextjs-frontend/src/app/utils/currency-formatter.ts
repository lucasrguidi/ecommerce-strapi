export function currencyFormatter(
  valor: number,
  locale: string = "pt-BR",
  currency: string = "BRL",
): string {
  return valor.toLocaleString(locale, {
    style: "currency",
    currency,
  });
}
