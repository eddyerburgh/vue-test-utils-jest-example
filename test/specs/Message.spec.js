import {shallow} from 'vue-test-utils'
import Message from 'src/components/Message'

describe('Bar.vue', () => {
  it('changes h1 text when button is clicked', () => {
    const expectedMessage = 'new message'
    const wrapper = shallow(Message)
    wrapper.find('#change-message').trigger('click')

    expect(wrapper.find('h1').text()).toBe(expectedMessage)
  })
})
