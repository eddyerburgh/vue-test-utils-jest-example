import {shallow} from 'vue-test-utils'
import Page from 'src/components/Page.vue'

describe('Page.vue', () => {
  it('renders', () => {
    const wrapper = shallow(Page)
    expect(wrapper.exists()).toBe(true)
  })
})
