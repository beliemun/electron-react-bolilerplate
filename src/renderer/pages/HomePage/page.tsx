import { Animate, NoticeBoard, Text, Title } from '@components/atoms';
import { useNavigate } from 'react-router-dom';
import BI from '@assets/images/bi_white.png';

const HomePage = () => {
  const navigate = useNavigate();
  const handleClickScreen = () => navigate('/foundation');
  return (
    <main className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
      <Animate>
        <div className="flex flex-col justify-between items-center w-full h-screen p-8">
          <Text type="lg-normal" className="text-center" color="invert">
            본 솔루션은 두산 에너빌리티와 프보이의 협력으로 개발되었습니다
          </Text>
          <div className="flex flex-col justify-center items-center">
            <img src={BI} alt="BI" />
            <Title type="h3-normal" className="mt-4" color="invert">
              AI기반 중장비 충돌방지 솔루션
            </Title>
          </div>
          <NoticeBoard onClick={handleClickScreen}>
            시작하려면 버튼을 눌러주세요.
          </NoticeBoard>
        </div>
      </Animate>
    </main>
  );
};

export default HomePage;
