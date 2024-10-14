'use client'

import { useState } from 'react'
import { useCartStore } from '@/zustand/store'

import { AddCartType } from '@/types/AddCartType'

export default function AddCartBtn({
  id,
  name,
  image,
  unit_amount,
  quantity
}: AddCartType) {
  const [added, setAdded] = useState(false)
  const cartStore = useCartStore()

  const handleAddToCart = () => {
    cartStore.addProduct({ id, name, image, unit_amount, quantity })
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
    }, 1000)
  }

  return (
    <div className='mt-auto pt-2'>
      <button
        onClick={handleAddToCart}
        className='btn btn-primary'
        disabled={added}
      >
        {!added ? <span>Add to cart </span> : <span>Adding to cart</span>}
      </button>
    </div>
  )
}
