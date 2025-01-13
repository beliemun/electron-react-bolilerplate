import { Button, Divider } from '@components/atoms';
import { PageLayout } from '@components/tamplates';
import { ModalComponent, LoadingModalComponent } from './components';
import { useState } from 'react';
import { Section } from '@components/organasims';

const ModalPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenLoadingModal, setIsOpenLoadingModal] = useState(false);

  const handleOpenMoal = () => setIsOpenModal(true);
  const handleOpenLoadingModal = () => setIsOpenLoadingModal(true);

  return (
    <PageLayout title="<Modal />">
      <Divider orientation="left">Basic Modal</Divider>
      <Section>
        <Button onClick={handleOpenMoal}>Open Basic Modal</Button>
      </Section>
      <Divider orientation="left">Loading Modal</Divider>
      <Section>
        <Button onClick={handleOpenLoadingModal}>Open Loading Modal</Button>
      </Section>
      {isOpenModal ? (
        <ModalComponent onClose={() => setIsOpenModal(false)} />
      ) : null}
      {isOpenLoadingModal ? (
        <LoadingModalComponent onClose={() => setIsOpenLoadingModal(false)} />
      ) : null}
    </PageLayout>
  );
};

export default ModalPage;
