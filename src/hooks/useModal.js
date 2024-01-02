import { useState } from "react"
export const useModal = (initialValues=false) => {
  const [isOpen,setIsOpen] = useState(initialValues)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  
    return [isOpen,openModal,closeModal]
}
