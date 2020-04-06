import React from 'react'
import ReactMarkdown from 'react-markdown'
import Blockcode from '../blockcode/Blockcode'

type Props = {
  source: string
} & JSX.IntrinsicElements['div']

const Markdown: React.FC<Props> = ({ source, ...restProps }) => {
  const code = ({ language, value }): JSX.Element => {
    return <Blockcode language={language}>{value}</Blockcode>
  }

  return (
    <div data-testid="Markdown" className="markdown" {...restProps}>
      <ReactMarkdown
        renderers={{
          code,
        }}
        source={source}
        escapeHtml={false}
      />
    </div>
  )
}

export default Markdown
