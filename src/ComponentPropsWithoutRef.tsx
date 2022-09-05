import React, { MutableRefObject, RefObject, useRef } from 'react'
import styles from './styles.module.css'

type Props = {
  theme: 'dark' | 'light'
} & React.ComponentPropsWithoutRef<'button'>

export const Button = (props: Props) => {
  return <button {...props} className={styles[props.theme]} />
}

type PropsWithRef = {
  theme: 'dark' | 'light'
} & React.ComponentPropsWithRef<'button'>

export const ButtonWithRef = (props: PropsWithRef) => {
  return <button {...props} className={styles[props.theme]} />
}

export const ButtonContainer = () => {
  const ref = useRef() as MutableRefObject<HTMLButtonElement>
  return (
    <>
      <Button
        theme='dark'
        onClick={() => {
          // onClick イベントハンドラー型定義は
          // React.ComponentPropsWithoutRef<"button"> に含まれる
        }}
      >
        +1
      </Button>
      <ButtonWithRef theme='light' ref={ref}>
        ref?
      </ButtonWithRef>
    </>
  )
}
