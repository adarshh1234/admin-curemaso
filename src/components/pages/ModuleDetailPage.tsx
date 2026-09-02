import { useEffect, useState } from 'react';
import { useToast } from '../../context/ToastContext';
import type { ModuleDetailFields, ModuleItem } from '../../types/module';

interface ModuleDetailPageProps {
  module: ModuleItem;
}

export function ModuleDetailPage({ module }: ModuleDetailPageProps) {
  const { showToast } = useToast();
  const [fields, setFields] = useState<ModuleDetailFields>({
    name: module.name,
    category: module.category,
    status: 'Active',
    description: `This is the ${module.name} module. It handles all aspects of ${module.category} related operations.`,
    owner: 'John Doe',
    lastUpdated: '2026-08-24',
  });

  useEffect(() => {
    setFields({
      name: module.name,
      category: module.category,
      status: 'Active',
      description: `This is the ${module.name} module. It handles all aspects of ${module.category} related operations.`,
      owner: 'John Doe',
      lastUpdated: '2026-08-24',
    });
  }, [module]);

  function handleChange(field: keyof ModuleDetailFields, value: string) {
    setFields((prev) => ({ ...prev, [field]: value }));
  }

  function handleSave() {
    showToast(`Saved changes for ${fields.name}`, 'success');
  }

  function handleReset() {
    setFields({
      name: module.name,
      category: module.category,
      status: 'Active',
      description: `This is the ${module.name} module. It handles all aspects of ${module.category} related operations.`,
      owner: 'John Doe',
      lastUpdated: '2026-08-24',
    });
    showToast(`Reset changes for ${module.name}`, 'info');
  }

  function handleDelete() {
    showToast(`Module "${fields.name}" cannot be deleted in demo mode.`, 'error');
  }

  return (
    <div className="panel module-detail" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="header">
        <div className="icon-lg">
          <i className={`fas ${module.icon || 'fa-cube'}`} />
        </div>
        <h2>{fields.name}</h2>
        <span className="tag-blue" style={{ marginLeft: 'auto', fontSize: 12 }}>
          {fields.category}
        </span>
      </div>

      <div className="fields">
        <div className="field-group half">
          <label>Module Name</label>
          <input
            className="form-control"
            value={fields.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </div>

        <div className="field-group half">
          <label>Category</label>
          <input
            className="form-control"
            value={fields.category}
            onChange={(e) => handleChange('category', e.target.value)}
          />
        </div>

        <div className="field-group half">
          <label>Status</label>
          <select
            className="form-control"
            value={fields.status}
            onChange={(e) => handleChange('status', e.target.value)}
          >
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending Setup</option>
          </select>
        </div>

        <div className="field-group half">
          <label>Owner</label>
          <input
            className="form-control"
            value={fields.owner}
            onChange={(e) => handleChange('owner', e.target.value)}
          />
        </div>

        <div className="field-group half">
          <label>Last Updated</label>
          <div className="form-control" style={{ background: '#f8faff' }}>
            {fields.lastUpdated}
          </div>
        </div>

        <div className="field-group half">
          <label>Description</label>
          <textarea
            className="form-control"
            value={fields.description}
            rows={2}
            onChange={(e) => handleChange('description', e.target.value)}
          />
        </div>
      </div>

      <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button className="btn-primary" onClick={handleSave}>
          <i className="fas fa-save" /> Save Changes
        </button>
        <button className="btn-outline" onClick={handleReset}>
          <i className="fas fa-history" /> Reset
        </button>
        <button className="btn-outline" style={{ color: '#ef4444', borderColor: '#ef4444' }} onClick={handleDelete}>
          <i className="fas fa-trash-alt" /> Delete
        </button>
      </div>
    </div>
  );
}
