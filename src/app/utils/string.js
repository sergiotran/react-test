export const toSnakeCase = (text) => {
  return (text || '').toLowerCase().replace(/\W+/g, '_')
}