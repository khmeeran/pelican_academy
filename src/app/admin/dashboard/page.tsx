'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Trash2, Save, LogOut, Camera, Bell, Image as ImageIcon, Loader2, CheckCircle2, AlertCircle, FileText, Phone } from 'lucide-react'
import Image from 'next/image'

import galleryInitialData from '@/data/gallery.json'
import updatesInitialData from '@/data/updates.json'
import contentInitialData from '@/data/content.json'

interface GalleryItem {
  url: string
  title: string
  priority?: boolean
  preview?: string // Temporary local preview URL
}

interface SiteUpdates {
  announcement: string
  heroSubtitle: string
}

export default function AdminDashboard() {
  const [gallery, setGallery] = useState<GalleryItem[]>([])
  const [updates, setUpdates] = useState<SiteUpdates>({ announcement: '', heroSubtitle: '' })
  const [content, setContent] = useState(contentInitialData)
  
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null)
  const router = useRouter()

  const fetchData = useCallback(async () => {
    try {
      const [galleryRes, updatesRes, contentRes] = await Promise.all([
        fetch('/api/admin/content?path=src/data/gallery.json'),
        fetch('/api/admin/content?path=src/data/updates.json'),
        fetch('/api/admin/content?path=src/data/content.json')
      ])

      if (galleryRes.ok) setGallery(await galleryRes.json())
      else setGallery(galleryInitialData)

      if (updatesRes.ok) setUpdates(await updatesRes.json())
      else setUpdates(updatesInitialData)
      
      if (contentRes.ok) setContent(await contentRes.json())
      else setContent(contentInitialData)

    } catch (err) {
      console.error(err)
      setStatus({ message: 'Could not load live data. Using local defaults.', type: 'info' })
      setGallery(galleryInitialData)
      setUpdates(updatesInitialData)
      setContent(contentInitialData)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const isAdmin = sessionStorage.getItem('isAdmin')
    if (isAdmin !== 'true') {
      router.push('/admin')
      return
    }
    fetchData()
  }, [router, fetchData])

  async function updateFile(path: string, fileContent: unknown) {
    // Strip preview URLs before saving to JSON
    const contentToSave = Array.isArray(fileContent) 
      ? fileContent.map(({ preview, ...rest }) => rest)
      : fileContent;

    const res = await fetch('/api/admin/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, content: contentToSave })
    })

    if (!res.ok) {
      const error = await res.json()
      throw new Error(error.error || 'Failed to save')
    }
  }

  const handleSaveAndPush = async () => {
    setSaving(true)
    setStatus({ message: 'Saving content & triggering deployment...', type: 'info' })
    
    try {
      await updateFile('src/data/gallery.json', gallery)
      await updateFile('src/data/updates.json', updates)
      await updateFile('src/data/content.json', content)
      setStatus({ message: 'Success! Changes published to live website.', type: 'success' })
    } catch (err: unknown) {
      const error = err as Error
      setStatus({ message: `Save failed: ${error.message}`, type: 'error' })
    }
    
    setSaving(false)
    setTimeout(() => setStatus(null), 8000)
  }

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin')
    router.push('/admin')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background-warm flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background-warm p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="flex justify-between items-center bg-white p-6 rounded-[2rem] shadow-xl border border-primary/5">
          <div>
            <h1 className="text-3xl font-poppins font-bold text-primary-deep flex items-center gap-4">
              Website Manager
              <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest">Live</span>
            </h1>
            <p className="text-text-secondary mt-1 text-sm">One-click publish system</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleSaveAndPush}
              disabled={saving}
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary-deep text-white font-bold hover:bg-primary transition-all disabled:opacity-50 shadow-xl shadow-primary/20"
            >
              {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
              {saving ? 'Publishing...' : 'Publish Changes'}
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-50 text-red-600 font-bold hover:bg-red-100 transition-all"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </header>

        {status && (
          <div className={`p-6 rounded-[2rem] border flex items-center gap-4 animate-in fade-in slide-in-from-top-4 ${
            status.type === 'success' ? 'bg-green-50 border-green-100 text-green-700' : 
            status.type === 'error' ? 'bg-red-50 border-red-100 text-red-700' : 
            'bg-blue-50 border-blue-100 text-blue-700'
          }`}>
            {status.type === 'success' ? <CheckCircle2 size={24} /> : status.type === 'error' ? <AlertCircle size={24} /> : <Loader2 className="animate-spin" size={24} />}
            <p className="font-bold text-sm uppercase tracking-wider leading-relaxed">{status.message}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Site Updates (Hero) */}
          <section className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-primary/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                <Bell size={24} />
              </div>
              <h2 className="text-2xl font-poppins font-bold text-primary-deep">Announcements</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Notice Banner</label>
                <input
                  type="text"
                  value={updates.announcement}
                  onChange={(e) => setUpdates({ ...updates, announcement: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Hero Description</label>
                <textarea
                  rows={3}
                  value={updates.heroSubtitle}
                  onChange={(e) => setUpdates({ ...updates, heroSubtitle: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                />
              </div>
            </div>
          </section>

          {/* Contact Details */}
          <section className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-primary/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <Phone size={24} />
              </div>
              <h2 className="text-2xl font-poppins font-bold text-primary-deep">Contact Info</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Phone Number</label>
                <input
                  type="text"
                  value={content.contact.phone}
                  onChange={(e) => setContent({ ...content, contact: { ...content.contact, phone: e.target.value } })}
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Address</label>
                <input
                  type="text"
                  value={content.contact.address}
                  onChange={(e) => setContent({ ...content, contact: { ...content.contact, address: e.target.value } })}
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-xl border border-primary/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                <FileText size={24} />
              </div>
              <h2 className="text-2xl font-poppins font-bold text-primary-deep">About Content</h2>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Title</label>
                  <input
                    type="text"
                    value={content.about.title}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, title: e.target.value } })}
                    className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Highlighted Text</label>
                  <input
                    type="text"
                    value={content.about.titleHighlight}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, titleHighlight: e.target.value } })}
                    className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Paragraphs (One per line)</label>
                <textarea
                  rows={8}
                  value={content.about.paragraphs.join('\n')}
                  onChange={(e) => setContent({ ...content, about: { ...content.about, paragraphs: e.target.value.split('\n') } })}
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:ring-2 focus:ring-primary/20 outline-none resize-none leading-relaxed"
                />
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-xl border border-primary/5">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Camera size={24} />
                </div>
                <h2 className="text-2xl font-poppins font-bold text-primary-deep">Gallery Management</h2>
              </div>
              <button
                onClick={() => setGallery([...gallery, { url: '', title: '' }])}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-deep transition-all"
              >
                <Plus size={16} /> Add Image
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item, index) => (
                <div key={index} className="p-6 rounded-2xl border border-primary/10 bg-background-warm/50 relative group">
                  <button
                    onClick={() => setGallery(gallery.filter((_, i) => i !== index))}
                    className="absolute top-4 right-4 text-red-400 hover:text-red-600 p-2 transition-colors z-10"
                  >
                    <Trash2 size={18} />
                  </button>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="w-full h-32 rounded-xl bg-white border border-primary/5 flex items-center justify-center overflow-hidden relative mb-3">
                        {(item.preview || item.url) ? (
                          <Image src={item.preview || item.url} alt="Preview" fill className="object-cover" unoptimized />
                        ) : (
                          <ImageIcon size={32} className="text-primary/20" />
                        )}
                      </div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-1">Image URL or Upload</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={item.url}
                          placeholder="/images/example.jpg"
                          onChange={(e) => {
                            const newGallery = [...gallery]
                            newGallery[index].url = e.target.value
                            setGallery(newGallery)
                          }}
                          className="flex-grow px-3 py-2 text-sm rounded-lg border border-primary/10 outline-none"
                        />
                        <label className="flex-shrink-0 cursor-pointer bg-primary/10 hover:bg-primary/20 text-primary px-3 py-2 rounded-lg flex items-center justify-center transition-colors">
                          <Camera size={16} />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (!file) return;
                              
                              // Create immediate local preview
                              const localPreviewUrl = URL.createObjectURL(file);
                              const newGallery = [...gallery];
                              newGallery[index].preview = localPreviewUrl;
                              setGallery(newGallery);

                              const reader = new FileReader();
                              reader.onload = async (event) => {
                                const base64 = (event.target?.result as string).split(',')[1];
                                const filename = `uploaded-${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
                                const path = `public/images/${filename}`;
                                
                                setStatus({ message: 'Uploading image to GitHub...', type: 'info' });
                                try {
                                  const res = await fetch('/api/admin/save', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ path, content: base64, isBase64: true })
                                  });
                                  
                                  const result = await res.json();
                                  if (!res.ok) throw new Error(result.error);

                                  const updatedGallery = [...gallery];
                                  updatedGallery[index].url = `/images/${filename}`;
                                  setGallery(updatedGallery);
                                  
                                  setStatus({ message: 'Image uploaded! Previewing local version until site redeploys.', type: 'success' });
                                } catch (err: any) {
                                  setStatus({ message: `Upload failed: ${err.message}`, type: 'error' });
                                }
                              };
                              reader.readAsDataURL(file);
                            }}
                          />
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-1">Caption</label>
                      <input
                        type="text"
                        value={item.title}
                        placeholder="Image Title"
                        onChange={(e) => {
                          const newGallery = [...gallery]
                          newGallery[index].title = e.target.value
                          setGallery(newGallery)
                        }}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-primary/10 outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

