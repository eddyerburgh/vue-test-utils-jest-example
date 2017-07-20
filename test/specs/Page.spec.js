import {shallow} from 'vue-test-utils'
import Page from 'src/components/Page.vue'
import Message from 'src/components/Message'

describe('Page.vue', () => {
  it('toggles msg passed to Message when button is clicked', () => {
    const wrapper = shallow(Page)
    const button = wrapper.find('#toggle-message')
    button.trigger('click')
    const MessageComponent = wrapper.find(Message)
    expect(MessageComponent.hasProp('msg', 'new message')).toBe(true)
    button.trigger('click')
    expect(MessageComponent.hasProp('msg', 'toggled message')).toBe(true)
  })
})
