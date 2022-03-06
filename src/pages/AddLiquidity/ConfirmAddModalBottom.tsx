import { Currency, CurrencyAmount, Fraction, Percent, ETHER, CURRENCY_SYMBOL } from '@daoswapdex/daoswap-dex-sdk'
import React from 'react'
import { Text } from 'rebass'
import { ButtonPrimary } from '../../components/Button'
import { RowBetween, RowFixed } from '../../components/Row'
import CurrencyLogo from '../../components/CurrencyLogo'
import { Field } from '../../state/mint/actions'
import { TYPE } from '../../theme'
import { useTranslation } from 'react-i18next'
import { useActiveWeb3React } from '../../hooks'

export function ConfirmAddModalBottom({
  noLiquidity,
  price,
  currencies,
  parsedAmounts,
  poolTokenPercentage,
  onAdd
}: {
  noLiquidity?: boolean
  price?: Fraction
  currencies: { [field in Field]?: Currency }
  parsedAmounts: { [field in Field]?: CurrencyAmount }
  poolTokenPercentage?: Percent
  onAdd: () => void
}) {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  const currencySymbolA =
    currencies[Field.CURRENCY_A] === ETHER && chainId ? CURRENCY_SYMBOL[chainId] : currencies[Field.CURRENCY_A]?.symbol
  const currencySymbolB =
    currencies[Field.CURRENCY_B] === ETHER && chainId ? CURRENCY_SYMBOL[chainId] : currencies[Field.CURRENCY_B]?.symbol

  return (
    <>
      <RowBetween>
        <TYPE.body>{currencySymbolA} Deposited</TYPE.body>
        <RowFixed>
          <CurrencyLogo currency={currencies[Field.CURRENCY_A]} style={{ marginRight: '8px' }} />
          <TYPE.body>{parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)}</TYPE.body>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <TYPE.body>{currencySymbolB} Deposited</TYPE.body>
        <RowFixed>
          <CurrencyLogo currency={currencies[Field.CURRENCY_B]} style={{ marginRight: '8px' }} />
          <TYPE.body>{parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)}</TYPE.body>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <TYPE.body>{t('Rates')}</TYPE.body>
        <TYPE.body>{`1 ${currencySymbolA} = ${price?.toSignificant(4)} ${currencySymbolB}`}</TYPE.body>
      </RowBetween>
      <RowBetween style={{ justifyContent: 'flex-end' }}>
        <TYPE.body>{`1 ${currencySymbolB} = ${price?.invert().toSignificant(4)} ${currencySymbolA}`}</TYPE.body>
      </RowBetween>
      <RowBetween>
        <TYPE.body>{t('Share of Pool')}:</TYPE.body>
        <TYPE.body>{noLiquidity ? '100' : poolTokenPercentage?.toSignificant(4)}%</TYPE.body>
      </RowBetween>
      <ButtonPrimary style={{ margin: '20px 0 0 0' }} onClick={onAdd}>
        <Text fontWeight={500} fontSize={20}>
          {noLiquidity ? t('Create Pool & Supply') : t('Confirm Supply')}
        </Text>
      </ButtonPrimary>
    </>
  )
}
