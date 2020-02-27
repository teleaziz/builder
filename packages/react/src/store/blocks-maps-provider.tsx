import React from 'react'
const noop = (_block: any) => {}
const BlocksMapContext = React.createContext({
  blocksMap: {} as Record<string, any>,
  onBlockChange: noop
})

const getMap = (blocks: any[]) => {
  const hash: Record<string, any> = blocks.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return {
        ...acc,
        ...getMap(val)
      }
    }
    return {
      ...acc,
      [val.id]: val,
      ...getMap(
        Object.values(val).filter((item: any) => item.id || Array.isArray(item))
      )
    }
  }, {})
  return hash
}

export const BlocksMapProvider = (props: { blocks: any[]; children: any }) => {
  const [state, setState] = React.useState({ blocksMap: getMap(props.blocks) })
  const onBlockChange = (block: any) =>
    setState({
      blocksMap: {
        ...state.blocksMap,
        [block.id]: block
      }
    })
  const provided = { blocksMap: state.blocksMap, onBlockChange }
  return <BlocksMapContext.Provider value={provided} {...props} />
}

export const useBlocksMap = () => React.useContext(BlocksMapContext)
