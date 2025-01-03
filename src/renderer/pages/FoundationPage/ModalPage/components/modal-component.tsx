import { Modal, ModalProps } from '@components/molecules';
import { BasicTransfer } from '@pages/FoundationPage/TransferPage/components';
import { useEffect, useState } from 'react';

export const ModalComponent = (props: ModalProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Modal
      title="Basic Modal"
      message="Tempor voluptate quis velit irure deserunt tempor id velit ipsum non eu ad nostrud minim. Consectetur nostrud proident do cupidatat tempor ut esse pariatur."
      actions={[
        {
          lable: 'Okay',
          style: 'solid',
        },
        {
          lable: 'Close',
          style: 'outline',
        },
      ]}
      size={720}
      loading={loading}
      loadingMessage="Here is loading message"
      {...props}
    >
      <BasicTransfer />
    </Modal>
  );
};
