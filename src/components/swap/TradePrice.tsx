import React from 'react'
import { Price, ETHER, CURRENCY_SYMBOL } from '@daoswapdex/daoswap-dex-sdk'
import { useContext } from 'react'
import { Repeat } from 'react-feather'
import { Text } from 'rebass'
import { ThemeContext } from 'styled-components'
import { StyledBalanceMaxMini } from './styleds'
import { useTranslation } from 'react-i18next'
import { useActiveWeb3React } from '../../hooks'

interface TradePriceProps {
  price?: Price
  showInverted: boolean
  setShowInverted: (showInverted: boolean) => void
}

export default function TradePrice({ price, showInverted, setShowInverted }: TradePriceProps) {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  const theme = useContext(ThemeContext)

  const formattedPrice = showInverted ? price?.toSignificant(6) : price?.invert()?.toSignificant(6)

  const currencySymbolA =
    price?.quoteCurrency === ETHER && chainId ? CURRENCY_SYMBOL[chainId] : price?.quoteCurrency?.symbol
  const currencySymbolB =
    price?.baseCurrency === ETHER && chainId ? CURRENCY_SYMBOL[chainId] : price?.baseCurrency?.symbol

  const show = Boolean(price?.baseCurrency && price?.quoteCurrency)
  const label = showInverted
    ? `${currencySymbolA} ${t('per')} ${currencySymbolB}`
    : `${currencySymbolB} ${t('per')} ${currencySymbolA}`

  return (
    <Text
      fontWeight={500}
      fontSize={14}
      color={theme.text2}
      style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
    >
      {show ? (
        <>
          {formattedPrice ?? '-'} {label}
          <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
            <Repeat size={14} />
          </StyledBalanceMaxMini>
        </>
      ) : (
        '-'
      )}
    </Text>
  )
}
