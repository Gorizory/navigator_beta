export default function () {
  return {
    0: {
      name: 'home',
      author: 'gori',
      children: [1, 2, 4],
      parent: undefined
    },
    1: {
      name: 'second',
      author: 'promyshlenniy',
      children: [3],
      parent: '0'
    },
    2: {
      name: 'third',
      author: 'pylesos',
      children: [],
      parent: '0'
    },
    3: {
      name: 'child',
      author: 'smolya',
      children: [],
      parent: '1'
    },
    4: {
      name: 'child',
      author: 'smolya',
      children: [],
      parent: '0'
    }
  }
}