const initialState = [
  {
    id: '324',
    name: '苹果电脑'
  },
  {
    id: '452',
    name: '橘子'
  }
]

const products = (state = initialState, action) => {
  console.log('products reducer---', action)
  return state
}

export default products
