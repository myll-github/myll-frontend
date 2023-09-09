/** @jest-environment jsdom */
import { act, renderHook } from '@testing-library/react'

import useLocalRegister from '.'

describe('useLocalRegister hook', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useLocalRegister())

    act(() => {
      result.current.resetState()
    })
  })

  it('should handle register title', () => {
    const { result } = renderHook(() => useLocalRegister())

    act(() => {
      result.current.handleRegisterTitle('Test Title')
    })

    const { result: newResult } = renderHook(() => useLocalRegister.getState())
    expect(newResult.current.registerTitle).toBe('Test Title')
  })

  it('should handle register location', () => {
    const { result } = renderHook(() => useLocalRegister())

    act(() => {
      result.current.handleRegisterLocation('Test Location')
    })

    const { result: newResult } = renderHook(() => useLocalRegister.getState())
    expect(newResult.current.registerLocation).toBe('Test Location')
  })

  it('should handle register description', () => {
    const { result } = renderHook(() => useLocalRegister())

    act(() => {
      result.current.handleRegisterDescription('Test Description')
    })

    const { result: newResult } = renderHook(() => useLocalRegister.getState())
    expect(newResult.current.registerDescription).toBe('Test Description')
  })

  it('should handle tag selection', () => {
    const { result } = renderHook(() => useLocalRegister())

    act(() => {
      result.current.handleTag('Test Tag')({ preventDefault: jest.fn() })
    })

    const { result: newResult } = renderHook(() => useLocalRegister.getState())
    expect(newResult.current.selectedTagName).toBe('Test Tag')
  })

  it('should correctly check if a tag is selected', () => {
    const { result } = renderHook(() => useLocalRegister())

    expect(result.current.isThisTagSelected('Test Tag')).toBe(false)

    act(() => {
      result.current.handleTag('Test Tag')({ preventDefault: jest.fn() })
    })

    const { result: newResult } = renderHook(() => useLocalRegister.getState())
    expect(newResult.current.isThisTagSelected('Test Tag')).toBe(true)
  })
})
