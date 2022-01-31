import './Footer.styles.scss';

export function Footer() {
  const year = new Date().getFullYear();

  return <div className="footer">{year} C. Nomad Store</div>;
}
