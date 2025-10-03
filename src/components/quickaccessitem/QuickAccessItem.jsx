import './QuickAccessItem.css'

export default function QuickAccessItem({ icone }) {
  return <>
    <div className="quick-access-item">
      <img src={icone} alt="" className="qa-icon" />
    </div>
    </>
}
