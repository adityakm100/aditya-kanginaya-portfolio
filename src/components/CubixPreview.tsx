import React from 'react'
import cubixPreview from '../assets/cubix-preview.png'

const CubixPreview: React.FC = () => {
  return (
    <div className="cubix-preview">
      <img src={cubixPreview} alt="Cubix preview" />
    </div>
  )
}

export default CubixPreview
