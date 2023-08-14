// https://slash.page/libraries/react/use-funnel/readme.i18n/
import React, { ReactNode, useState } from 'react'

const useFunnel = <T extends string>(initState: T) => {
  const [step, setStep] = useState(initState)

  const Step = ({ name, children }: { name: string; children: ReactNode }) => {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>
  }

  const Funnel = ({ children }: { children: JSX.Element[] }) => {
    const targetStep = children!.find((childrenStep) => childrenStep.props.name === step)

    return Object.assign(targetStep as unknown as React.ElementType, { Step })
  }

  return [Funnel, setStep]
}

export default useFunnel
