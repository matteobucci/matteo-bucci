import React from 'react'
import { Highlight, themes, defaultProps } from "prism-react-renderer"


export default function CodeBlock(props) {
  const className = props.children.props.className || ''
  const matches = className.match(/language-(?<lang>.*)/)
  // It also shows the line when a language is specified
  const showLineNumbers = props.children.props.lineNumbers ||  matches && matches.groups && matches.groups.lang
  return (
    <Highlight 
        {...defaultProps}
        code={props.children.props.children.trim()}
        language={
            matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
        theme={themes.vsDark}
    >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
                {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                        {showLineNumbers && <span className="line-number-style">{i + 1}</span>}
                        {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                ))}
            </pre>
        )}
    </Highlight>
  )
}