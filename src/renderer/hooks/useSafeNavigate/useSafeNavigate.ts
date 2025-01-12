import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useButtonControlStore } from '@stores';

const useSafeNavigate = () => {
  const navigate = useNavigate();
  const { isAnimating, setAnimating } = useButtonControlStore();

  const safeNavigate = useCallback(
    async (to: string, options?: { replace?: boolean; state?: any }) => {
      // 애니메이션 중인지 확인
      if (isAnimating) {
        console.warn('Navigation blocked: Animation is still running.');
        return;
      }

      try {
        // 애니메이션 상태 활성화
        setAnimating(true);

        // 필요한 네비게이션 실행
        navigate(to, options);
      } catch (error) {
        console.error('Error during navigation:', error);
      } finally {
        // 애니메이션 상태 비활성화
        setAnimating(false);
      }
    },
    [isAnimating, navigate, setAnimating],
  );

  return safeNavigate;
};

export default useSafeNavigate;
