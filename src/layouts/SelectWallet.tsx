import Card from "../components/Card"
import Icon from "../components/Icon"
import MetaMask from "../images/Metamask.png"
import WalletConnect from "../images/WalletConnect.png"
import useOnboard from "../ethereum/useOnboard"
import { useSelectWalletModal } from "../database/selectWalletModal"
import useWalletConnect from "./useWalletConnect"
import styles from "./SelectWallet.module.scss"

const SelectWallet = () => {
  const { close } = useSelectWalletModal()
  const { onClick: onClickMetaMask } = useOnboard()
  const { onClick: onClickWalletConnect } = useWalletConnect()

  const buttons = [
    {
      src: MetaMask,
      label: "MetaMask",
      onClick: onClickMetaMask,
    },
    {
      src: WalletConnect,
      label: "WalletConnect",
      onClick: onClickWalletConnect,
    },
  ]

  return (
    <Card className={styles.card}>
      <header className={styles.header}>
        <h1 className={styles.title}>Connect to a wallet</h1>
        <button className={styles.close} onClick={close}>
          <Icon name="close" size={24} />
        </button>
      </header>

      <ul>
        {buttons.map(({ src, label, onClick }) => (
          <li className={styles.item} key={label}>
            <button className={styles.button} onClick={onClick}>
              <span className={styles.label}>{label}</span>
              <img src={src} width={24} height={24} alt="" />
            </button>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default SelectWallet
