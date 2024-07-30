import Link from 'next/link';
import Image from 'next/image';

const FeatureItem = ({ img, title, content, link1, link2 }) => {
  const imgSrc = img.endsWith('.svg') || img.endsWith('.webp') ? img : `${img}.svg`;

  return (
    <div className="col-md-6 col-lg-4">
      <div className="feature-item">
        <Image src={`/img/icon/${imgSrc}`} alt="icon" width={80} height={80} style={{borderRadius:'16px'}} />
        <h3>{title}</h3>
        <p>{content}</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          {link1 && (
            <Link href={`${link1}`} legacyBehavior>
         <a className="btn btn-secondary gradient" 
 >Live</a>
            </Link>
          )}
          {link2 && (
            <Link href={`${link2}`} legacyBehavior>
              <a className="btn btn-secondary">Begin Chat</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
