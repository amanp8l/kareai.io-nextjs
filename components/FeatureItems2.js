import Link from 'next/link';
import Image from 'next/image';

const FeatureItem = ({ img, title, content, link1, link2 }) => {
  const imgSrc = img.endsWith('.jpeg') || img.endsWith('.jpg') ? img : `${img}.jpeg`;

  return (
    <div className="col-md-6 col-lg-4">
      <div className="feature-item">
        <Image src={`/img/Team/management/${imgSrc}`} alt="icon" width={80} height={80} style={{borderRadius:'16px'}} />
        <br />
        <h5>{title}</h5>
        <p>{content}</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          {link1 && (
            <Link href={`${link1}`} legacyBehavior>
              <a className="btn btn-secondary gradient">Live</a>
            </Link>
          )}
          {link2 && (
            <Link href={`${link2}`} legacyBehavior>
              <a style={{ display: 'inline-block'}}>
                <Image src="../img/linkedin-logo.svg" alt="LinkedIn" width={24} height={24} />
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
