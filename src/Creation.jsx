import React, { useState } from 'react';

const Creation = () => {
  const [sites, setSites] = useState([]);
  const [newSiteUrl, setNewSiteUrl] = useState('');
  const [newSitename, setNewSitename] = useState('');
  const [newSiteImg, setNewSiteImg] = useState('');
  const [newSiteAbout, setNewSiteAbout] = useState('');

  const handleSiteClick = (url) => {
    window.location.href(url, '_blank');
  };

  const addCustomSite = () => {
    if (newSiteUrl && newSitename && newSiteImg && newSiteAbout) {
      setSites([...sites, { name: newSitename, url: newSiteUrl, img: newSiteImg, about: newSiteAbout }]);
      setNewSiteAbout('');
      setNewSiteUrl('');
      setNewSitename('');
      setNewSiteImg('');
      window.location.href(newSiteUrl, '_blank');
    }
  };

  return (
    <div className="my-12 flex-wrap w-80">
      {sites.map((site) => (
        <div key={site.name} className="mb-5">
          <button onClick={() => handleSiteClick(site.url)} className="h-100 w-60 px-3 rounded-lg bg-amber-200 flex-wrap">
            <img src={site.img} alt={site.name} className="h-30 w-auto px-5 pt-6" />
            <p className='mt-1 text-lg'>{site.name}</p>
            <p className='mt-1 text-lg'>{site.about}</p>
          </button>
        </div>
      ))}
      <input
        className="bg-slate-200 h-7 px-2 rounded-md mb-2"
        type="text"
        value={newSiteUrl}
        onChange={(e) => setNewSiteUrl(e.target.value)}
        placeholder="Enter URL of new site"
      />
      <input
        className="bg-slate-200 h-7 px-2 rounded-md mb-2"
        type="text"
        value={newSitename}
        onChange={(e) => setNewSitename(e.target.value)}
        placeholder="Enter NAME of new site"
      />
      <input
        className="bg-slate-200 h-7 px-2 rounded-md mb-2"
        type="text"
        value={newSiteImg}
        onChange={(e) => setNewSiteImg(e.target.value)}
        placeholder="Enter Image URL of new site"
      />
      <input
        className="bg-slate-200 h-7 px-2 rounded-md mb-2"
        type="text"
        value={newSiteAbout}
        onChange={(e) => setNewSiteAbout(e.target.value)}
        placeholder="Enter About of new site"
      />
      <br />
      <button onClick={(addCustomSite)} className="bg-orange-400 rounded-full w-24 h-8 mt-5">Add Site</button>
    </div>
  );
};

export default Creation;
