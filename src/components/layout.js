import React, { useContext } from "react"
import { Global, css } from '@emotion/core'
import { useTheme } from "emotion-theming"
import Context from "../store/context"
import "../styles/main.scss"

const Layout = ({ children }) => {

    const { state } = useContext(Context)
    const theme = useTheme()

    return (
        <>
            <Global
                styles={css`                    
                    body {
                        background-color: ${state.isDark ? theme.dark.background : theme.light.background}
                    }
                `}
            />
            <div className='p-main'>
                <main>{children}</main>
            </div>
        </>
  )
}

export default Layout
