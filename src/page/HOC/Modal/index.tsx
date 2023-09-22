import React, { useState } from 'react'
import { Modal } from 'antd'
export default function ModalHOC() {
    const [open, setOpen] = useState(false);
  return (
    <Modal
    title="Modal 1000px width"
    centered
    open={open}
    onOk={() => setOpen(false)}
    onCancel={() => setOpen(false)}
    width={800}
  >
    <p>some contents...</p>
    <p>some contents...</p>
    <p>some contents...</p>
  </Modal>
  )
}
