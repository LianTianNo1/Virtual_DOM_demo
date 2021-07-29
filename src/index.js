/* index.js */

import h from './my-snabbdom/h'
import patch from './my-snabbdom/patch'

let app = document.querySelector('#app')

let vnode = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D'),
  h('li', { key: 'E' }, 'E'),
])

let oldVnode = patch(app, vnode)

let vnode2 = h('ul', {}, [
  h('li', { key: 'E' }, 'E'),
  h('li', { key: 'D' }, 'D'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'A' }, 'A'),
])
let vnode3 = h('ul', {}, [
  h('li', { key: 'E' }, 'E'),
  h('li', { key: 'D' }, 'D'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'K' }, 'K'),
])
let vnode4 = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
])
let vnode5 = h('ul', {}, [
  h('li', { key: 'E' }, 'E'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'V' }, 'V'),
])
let vnode6 = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D'),
  h(
    'li',
    { key: 'E' },
    h('ul', {}, [
      h('li', { key: 'A' }, 'A'),
      h('li', { key: 'B' }, 'B'),
      h('li', { key: 'C' }, 'C'),
      h('li', { key: 'D' }, 'D'),
      h('li', { key: 'E' }, h('div', { key: 'R' }, 'R')),
    ])
  ),
])
let vnodeList = [vnode2, vnode3, vnode4, vnode5, vnode6]
let btn = document.querySelectorAll('.btn')
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = () => {
    patch(vnode, vnodeList[i])
  }
}
