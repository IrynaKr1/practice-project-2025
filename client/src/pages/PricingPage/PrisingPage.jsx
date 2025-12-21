import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import pricingList from './pricingList.json';
import styles from './PricingPage.module.sass';

function PrisingPage () {
  return (
    <div>
      <Header />
      <div>
        <ul>
          {pricingList.map((p, i) => (
            <li key={i}>
              <div style={{ border: `10px solid ${p.color}` }}>
                <h2 style={{ color: `${p.color}` }}>{p.type}</h2>
                <p>{p.describeType}</p>
                <p style={{ color: `${p.color}` }}>{p.price}</p>
              </div>
              <div>
                {p.profit.map(p => (
                  <p className={styles.body} data-tooltip={p.tooltip}>
                    {p.body}
                  </p>
                ))}
              </div>
              <Link
                to='/startContedt'
                style={{ backgroundColor: `${p.color}` }}
              >
                Start
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default PrisingPage;
