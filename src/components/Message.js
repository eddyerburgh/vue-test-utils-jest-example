export default {
  functional: true,
  render: (h, {props}) => h('h1', props.msg || 'Hello!')
}
