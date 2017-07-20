import {shallow} from 'vue-test-utils'
import Message from 'src/components/Message'

describe('Message', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallow(Message, {
      context: { props: { msg } }
    })
    expect(wrapper.text()).toBe(msg)
  })

  it('renders Hello! if not passed a prop', () => {
    const defaultMessage = 'Hello!'
    const wrapper = shallow(Message, {context: {}})
    expect(wrapper.text()).toBe(defaultMessage)
  })
})
