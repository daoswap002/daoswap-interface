import React, { useRef } from 'react'
import { BookOpen, Info, MessageCircle, PieChart, Link, Gift, Layers, DollarSign } from 'react-feather'
import styled from 'styled-components'
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'
import { useActiveWeb3React } from '../../hooks'
import { ChainId } from '@daoswapdex/daoswap-dex-sdk'
import { CHAIN_INFO } from '../../constants/chainInfo'

import { ExternalLink } from '../../theme'
import { useTranslation } from 'react-i18next'

const StyledMenuIcon = styled(MenuIcon)`
  path {
    stroke: ${({ theme }) => theme.text1};
  }
`

const StyledMenuButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg3};

  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
`

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuFlyout = styled.span<{ isHecoNetwork: boolean }>`
  min-width: 13.125rem;
  background-color: ${({ theme }) => theme.bg3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 4rem;
  right: 0rem;
  z-index: 100;

  ${({ theme }) => theme.mediaWidth.upToMedium<{ isHecoNetwork: boolean }>`
    top: ${({ isHecoNetwork }) => (isHecoNetwork ? '-21.25rem' : '-14rem')};
  `};
`

const MenuItem = styled(ExternalLink)`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`

const MenuItemHref = styled.a`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text2};
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`

// TODO:Daoswap UNI -> DAO
export default function Menu() {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()

  const isHecoNetwork = chainId === ChainId.HECO_MAINNET || chainId === ChainId.HECO_TESTNET

  const { infoLink } = chainId ? CHAIN_INFO[chainId] : CHAIN_INFO[ChainId.HECO_MAINNET]

  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENU)
  const toggle = useToggleModal(ApplicationModal.MENU)
  useOnClickOutside(node, open ? toggle : undefined)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    // TODO:Daoswap Display Comments
    <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle}>
        <StyledMenuIcon />
      </StyledMenuButton>

      {open && (
        <MenuFlyout isHecoNetwork={isHecoNetwork}>
          <MenuItem id="link" href="https://www.daoswap.cc/">
            <Info size={14} />
            {t('Daoswap')}
          </MenuItem>
          <MenuItem id="link" href="https://www.daoswap.cc/Whitepaper.pdf">
            <BookOpen size={14} />
            {t('Docs')}
          </MenuItem>
          <MenuItem id="link" href="https://twitter.com/Daoswapdex">
            <MessageCircle size={14} />
            Twitter
          </MenuItem>
          <MenuItemHref id="link" href={`${infoLink}`} target="_self" style={{ display: infoLink ? 'flex' : 'none' }}>
            <PieChart size={14} />
            {t('Charts')}
          </MenuItemHref>
          <MenuItemHref id="link" href="https://poly.bridge.daoswap.cc/token/DAO" target="_self">
            <Link size={14} />
            {t('Bridge')}
          </MenuItemHref>
          <MenuItemHref
            id="link"
            href="https://www.daoswap.cc/hash-mining"
            target="_self"
            style={{ display: isHecoNetwork ? 'flex' : 'none' }}
          >
            <Layers size={14} />
            {t('Hash Mining')}
          </MenuItemHref>
          <MenuItemHref
            id="link"
            href="https://www.daoswap.cc/competition-mining"
            target="_self"
            style={{ display: isHecoNetwork ? 'flex' : 'none' }}
          >
            <Gift size={14} />
            {t('Competition Mining')}
          </MenuItemHref>
          <MenuItemHref
            id="link"
            href="https://fee.heco.daoswap.cc"
            target="_self"
            style={{ display: isHecoNetwork ? 'flex' : 'none' }}
          >
            <DollarSign size={14} />
            {t('Fee')}
          </MenuItemHref>
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
