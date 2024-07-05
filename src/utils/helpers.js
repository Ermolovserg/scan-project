export const isAccessTokenExpire = (expire) => {
  if (!Boolean(expire)) return true
  const end = new Date(expire)
  const now = new Date()
  return now - end > 0
}

export const removeNonDigit = (value) => value.replace(/\D/g, '')


export const getTodayEnd = () => {
  const today = new Date()
  today.setHours(23, 59, 59, 999)
  return today
}
