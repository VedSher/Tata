import React, { useState } from 'react';
import axios from "axios"

const Creation = () => {
const [sites, setSites] = useState([]);
const [newSiteUrl, setNewSiteUrl] = useState('');
const [newSitename, setNewSitename] = useState('');
const [newSiteImg, setNewSiteImg] = useState('');
const [newSiteAbout, setNewSiteAbout] = useState('');
const [error, setError] = useState('');

const handleSiteClick = (siteName) => {
    const youtubeSearchUrl = `https://www.${encodeURIComponent(siteName)}`;
    window.open(youtubeSearchUrl, '_blank');
};
const addCustomSite = () => {
    if (newSiteUrl && newSitename && newSiteImg && newSiteAbout) {
        const newSite = {
            name: newSitename,
            url: newSiteUrl,
            img: newSiteImg,
            about: newSiteAbout
        };

        setSites([...sites, newSite]);
        setNewSiteUrl('');
        setNewSitename('');
        setNewSiteImg('');
        setNewSiteAbout('');
        setError('');
    } else {
        setError('Please fill in all fields.');
    }
};

return (
    <div className="w-screen pr-20">
        <div className="my-12 flex gap-5 w-80">
            {sites.map((site, index) => (
                <div key={index} className="mb-5">
                    <button onClick={() => handleSiteClick(site.url)} className="h-100 w-60 px-3 rounded-lg bg-amber-200 flex-wrap">
                        <img src={site.img} alt={site.name} className="h-30 w-auto px-5 pt-6" />
                        <div className="justify-center content-center flex">
                            <button className="bg-orange-400 rounded-full w-24 h-8 mt-5">{site.name}</button>
                        </div>
                        <p className='mt-1 text-lg'>{site.about}</p>
                    </button>
                </div>
            ))}
        </div>
        <h1 className="text-5xl text-center my-5 tracking-tighter text-orange-500">Create Your Own Site Template</h1>
        <div className="w-full flex gap-5 justify-center my-5">
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
        </div>
            <div className="justify-center content-center flex">
                <button onClick={(addCustomSite)} className="bg-orange-400 rounded-full w-24 h-8 mt-5">Add Site</button>
            </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        
    </div>
);
};

export default Creation;