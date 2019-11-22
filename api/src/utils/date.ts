export const nowISOTimestamp = (dt: number = Date.now()) => {
  return new Date(dt).toISOString()
}
