import { FC } from 'react';
import Button from '@/packages/button/button';
import useClipboard from '../useClipboard';

const DefaultCopyToClipboard: FC = () => {
  const { ref, copied, onCopy } = useClipboard({ duration: 4000 });
  return (
    <div className="mb-8">
      <Button color="primary" onClick={onCopy} size="sm">
        {copied ? 'copied!' : 'Copy'}
      </Button>
      <div ref={ref} className="mt-4">
        <p>
          Monday Monday Monday, open wide Dev Fans! get ready to stuff your face
          with Javascript, css, node modules, barbecue tips, git workflow,
          break-dancing, soft-skills, web development, the hastiest, the
          craziest, the tastiest web development treats coming in hot. here is{' '}
          <strong>Wes "Baracuda" Bos </strong> and{' '}
          <strong>Scott "El Toro Loco" Tolinski</strong>
        </p>
      </div>
    </div>
  );
};

export default DefaultCopyToClipboard;
