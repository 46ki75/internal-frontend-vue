import { mount } from '@vue/test-utils'
import { HeaderComponent } from '.'
import { describe, test, expect } from 'vitest'

describe('MyComponent', () => {
  test('renders a message', () => {
    const wrapper = mount(HeaderComponent)
    expect(wrapper.find('div').text()).includes('白雪総研')
  })
})
