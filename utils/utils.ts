
const getUrl = (url: string) => {
  return process.env.SUPABASE_URL + '/storage/v1/object/public/' + url 
}

export {
  getUrl
}