import {
  shallowMount
} from '@vue/test-utils'
import List from '@/components/List.vue'
import {
  createRenderer
} from 'vue-server-renderer'

describe('List.vue', () => {
  it('renders li for each item in props.items', () => {
    const items = ['', '']
    const wrapper = shallowMount(List, {
      propsData: { items }
    })
    expect(wrapper.findAll('li')).toHaveLength(items.length)
  })

  it('matches snapshot', () => {
    const items = ['item 1', 'item 2']
    const renderer = createRenderer()
    const wrapper = shallowMount(List, {
      propsData: { items }
    })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
