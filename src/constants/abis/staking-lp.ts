import { Interface } from '@ethersproject/abi'
import StakingLimit from '../contractJson/StakingLimit.json'
import TokenVesting from '../contractJson/TokenVesting.json'

const STAKING_LP_INTERFACE = new Interface(StakingLimit.abi)

const STAKING_TOKEN_VESTING_INTERFACE = new Interface(TokenVesting.abi)

export { STAKING_LP_INTERFACE, STAKING_TOKEN_VESTING_INTERFACE }
