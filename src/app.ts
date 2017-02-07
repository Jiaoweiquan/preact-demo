import { render , h } from 'preact'
require('./base_style.less')

const List = ['Animals', 'Cities', 'Men', 'Site'].map(name => {
    return h('li', {}, name)
})

const Entry = h('ol',{}, ...List)

export default Entry