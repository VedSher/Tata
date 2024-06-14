import React, { useState } from 'react';

const Button = ({ url, siteName} ) => {
  const [sites, setSites] = useState([
    { name: 'YouTube', url: 'https://www.youtube.com' },
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
  ]);
  const [newSiteUrl, setNewSiteUrl] = useState('');

  const handleSiteClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="mt-2 bg-orange-400 w-32 text-center rounded-full ">
      {
        <div key={siteName}>
          <button onClick={() => window.location.href = url}>
            {/* handleSiteClick(site.url)}> */}
            Visit {siteName}
          </button>
        </div>
      }
    </div>
  );
};

export default Button;
