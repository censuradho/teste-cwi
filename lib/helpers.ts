export function toCurrency (value: number) {
  return value.toLocaleString('PT-br', {
    currency: 'BRL',
    style: 'currency'
  })
}

export const isBrowser = () => typeof window !== "undefined"
