import { shallowMount } from '@vue/test-utils'
import Main from '../../src/authenticateVue/Front-End/main.vue'

test ('sanity test', () => {
    return
});

describe('contentPage', () => {
  it('renders Username', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Main, {
      props: { msg }
    })
    expect(wrapper.text()).toContain('Username')
  });
  it('renders Password', () => {
      const msg = 'new message'
      const wrapper = shallowMount(Main, {
          props: { msg }
      })
      expect(wrapper.text()).toContain('Password')
  })
})
