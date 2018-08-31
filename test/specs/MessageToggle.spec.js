import { shallowMount } from '@vue/test-utils'
import MessageToggle from '@/components/MessageToggle.vue'
import Message from '@/components/Message'

describe('MessageToggle.vue', () => {
  it('toggles msg passed to Message when button is clicked', () => {
    const wrapper = shallowMount(MessageToggle)
    const button = wrapper.find('#toggle-message')
    button.trigger('click')
    const MessageComponent = wrapper.find(Message)
    expect(MessageComponent.attributes().msg).toEqual('message')
    button.trigger('click')
    expect(MessageComponent.attributes().msg).toEqual('toggled message')
  })
})
