import React, { useState } from 'react';
import { 
  Users, 
  FileText, 
  Settings, 
  BarChart3, 
  Mail, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Search,
  Filter,
  UserPlus,
  Camera,
  Target,
  Shield,
  Bell,
  LogOut,
  Home,
  Menu,
  X
} from 'lucide-react';
import './styles.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Editor', status: 'Active', lastLogin: '2024-06-20' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', status: 'Active', lastLogin: '2024-06-19' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive', lastLogin: '2024-06-15' }
  ]);
  
  const [blogPosts, setBlogPosts] = useState([
    { id: 1, title: 'Getting Started with React', status: 'Published', author: 'John Doe', date: '2024-06-20' },
    { id: 2, title: 'Advanced CSS Techniques', status: 'Draft', author: 'Jane Smith', date: '2024-06-19' },
    { id: 3, title: 'JavaScript Best Practices', status: 'Published', author: 'Bob Wilson', date: '2024-06-18' }
  ]);

  const [inquiries, setInquiries] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', subject: 'Product Inquiry', status: 'New', date: '2024-06-20' },
    { id: 2, name: 'Mike Brown', email: 'mike@example.com', subject: 'Support Request', status: 'In Progress', date: '2024-06-19' },
    { id: 3, name: 'Sarah Davis', email: 'sarah@example.com', subject: 'Partnership', status: 'Resolved', date: '2024-06-18' }
  ]);

  const analytics = {
    totalVisits: 12450,
    totalLeads: 185,
    totalSignups: 89,
    conversionRate: 1.48
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'inquiries', label: 'Inquiries', icon: Mail },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleDeletePost = (id) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
  };

  const handleUpdateInquiryStatus = (id, newStatus) => {
    setInquiries(inquiries.map(inquiry => 
      inquiry.id === id ? { ...inquiry, status: newStatus } : inquiry
    ));
  };

  const StatCard = ({ title, value, subtitle, color = 'blue' }) => (
    <div className={`stat-card border-${color}`}>
      <h3 className="stat-title">{title}</h3>
      <p className={`stat-value text-${color}`}>{value}</p>
      {subtitle && <p className="stat-subtitle">{subtitle}</p>}
    </div>
  );

  const renderDashboard = () => (
    <div className="content-container">
      <div className="flex-between">
        <h1 className="section-title">Dashboard Overview</h1>
        <div className="flex-items gap-4">
          <Bell className="icon-md text-gray cursor-pointer hover-text-blue" />
          <div className="avatar bg-blue text-white">
            A
          </div>
        </div>
      </div>
      
      <div className="grid-4 gap-6">
        <StatCard title="Total Visits" value={analytics.totalVisits.toLocaleString()} subtitle="This month" color="blue" />
        <StatCard title="Total Leads" value={analytics.totalLeads} subtitle="Conversion rate: 1.48%" color="green" />
        <StatCard title="New Signups" value={analytics.totalSignups} subtitle="Last 30 days" color="purple" />
        <StatCard title="Active Users" value={users.filter(u => u.status === 'Active').length} subtitle="Currently online" color="orange" />
      </div>

      <div className="grid-2 gap-6">
        <div className="card">
          <h3 className="card-title">
            <FileText className="icon-sm text-blue" />
            Recent Content
          </h3>
          <div className="content-list">
            {blogPosts.slice(0, 3).map(post => (
              <div key={post.id} className="list-item">
                <div>
                  <p className="item-title">{post.title}</p>
                  <p className="item-subtitle">by {post.author}</p>
                </div>
                <span className={`status ${post.status === 'Published' ? 'status-published' : 'status-draft'}`}>
                  {post.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">
            <Mail className="icon-sm text-blue" />
            Recent Inquiries
          </h3>
          <div className="content-list">
            {inquiries.slice(0, 3).map(inquiry => (
              <div key={inquiry.id} className="list-item">
                <div>
                  <p className="item-title">{inquiry.subject}</p>
                  <p className="item-subtitle">from {inquiry.name}</p>
                </div>
                <span className={`status ${
                  inquiry.status === 'New' ? 'status-new' : 
                  inquiry.status === 'In Progress' ? 'status-progress' : 
                  'status-resolved'
                }`}>
                  {inquiry.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="content-container">
      <div className="flex-between">
        <h1 className="section-title">User Management</h1>
        <button className="btn btn-blue flex-items gap-2">
          <UserPlus className="icon-xs" />
          <span>Add User</span>
        </button>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="flex-between">
            <div className="flex-items gap-4">
              <div className="search-container">
                <Search className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search users..." 
                  className="search-input"
                />
              </div>
              <button className="btn btn-outline flex-items gap-2">
                <Filter className="icon-xs" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        <div className="table-container">
          <table className="table">
            <thead className="table-header">
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {users.map(user => (
                <tr key={user.id} className="table-row">
                  <td>
                    <div className="flex-items">
                      <div className="avatar bg-blue text-white">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-dark">{user.name}</div>
                        <div className="text-sm text-gray">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`status ${
                      user.role === 'Manager' ? 'status-manager' :
                      user.role === 'Editor' ? 'status-editor' :
                      'status-viewer'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span className={`status ${user.status === 'Active' ? 'status-active' : 'status-inactive'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="text-sm text-gray">
                    {user.lastLogin}
                  </td>
                  <td>
                    <div className="flex-items gap-2">
                      <button className="icon-btn text-blue hover-text-blue-dark">
                        <Edit className="icon-xs" />
                      </button>
                      <button className="icon-btn text-green hover-text-green-dark">
                        <Eye className="icon-xs" />
                      </button>
                      <button 
                        onClick={() => handleDeleteUser(user.id)}
                        className="icon-btn text-red hover-text-red-dark"
                      >
                        <Trash2 className="icon-xs" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContentManagement = () => (
    <div className="content-container">
      <div className="flex-between">
        <h1 className="section-title">Content Management</h1>
        <div className="flex-items gap-3">
          <button className="btn btn-green flex-items gap-2">
            <Plus className="icon-xs" />
            <span>New Post</span>
          </button>
          <button className="btn btn-purple flex-items gap-2">
            <Camera className="icon-xs" />
            <span>Gallery</span>
          </button>
        </div>
      </div>

      <div className="grid-4 gap-6 mb-6">
        <div className="gradient-card gradient-blue-purple">
          <h3 className="gradient-title">Blog Posts</h3>
          <p className="gradient-value">{blogPosts.length}</p>
          <p className="gradient-subtitle">Total articles</p>
        </div>
        <div className="gradient-card gradient-green-teal">
          <h3 className="gradient-title">Services</h3>
          <p className="gradient-value">8</p>
          <p className="gradient-subtitle">Active services</p>
        </div>
        <div className="gradient-card gradient-orange-red">
          <h3 className="gradient-title">Team Members</h3>
          <p className="gradient-value">12</p>
          <p className="gradient-subtitle">Active profiles</p>
        </div>
        <div className="gradient-card gradient-pink-rose">
          <h3 className="gradient-title">Gallery</h3>
          <p className="gradient-value">45</p>
          <p className="gradient-subtitle">Total images</p>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Blog Posts</h3>
        </div>
        <div className="table-container">
          <table className="table">
            <thead className="table-header">
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {blogPosts.map(post => (
                <tr key={post.id} className="table-row">
                  <td className="text-sm font-medium text-dark">
                    {post.title}
                  </td>
                  <td className="text-sm text-gray">
                    {post.author}
                  </td>
                  <td>
                    <span className={`status ${post.status === 'Published' ? 'status-published' : 'status-draft'}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="text-sm text-gray">
                    {post.date}
                  </td>
                  <td>
                    <div className="flex-items gap-2">
                      <button className="icon-btn text-blue hover-text-blue-dark">
                        <Edit className="icon-xs" />
                      </button>
                      <button className="icon-btn text-green hover-text-green-dark">
                        <Eye className="icon-xs" />
                      </button>
                      <button 
                        onClick={() => handleDeletePost(post.id)}
                        className="icon-btn text-red hover-text-red-dark"
                      >
                        <Trash2 className="icon-xs" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderInquiries = () => (
    <div className="content-container">
      <div className="flex-between">
        <h1 className="section-title">Inquiries Management</h1>
        <div className="flex-items gap-4">
          <span className="text-sm text-gray">
            {inquiries.filter(i => i.status === 'New').length} new inquiries
          </span>
        </div>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="table">
            <thead className="table-header">
              <tr>
                <th>Contact</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {inquiries.map(inquiry => (
                <tr key={inquiry.id} className="table-row">
                  <td>
                    <div>
                      <div className="text-sm font-medium text-dark">{inquiry.name}</div>
                      <div className="text-sm text-gray">{inquiry.email}</div>
                    </div>
                  </td>
                  <td className="text-sm text-dark">
                    {inquiry.subject}
                  </td>
                  <td>
                    <select 
                      value={inquiry.status}
                      onChange={(e) => handleUpdateInquiryStatus(inquiry.id, e.target.value)}
                      className={`status-select ${
                        inquiry.status === 'New' ? 'status-new' : 
                        inquiry.status === 'In Progress' ? 'status-progress' : 
                        'status-resolved'
                      }`}
                    >
                      <option value="New">New</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </td>
                  <td className="text-sm text-gray">
                    {inquiry.date}
                  </td>
                  <td>
                    <div className="flex-items gap-2">
                      <button className="icon-btn text-blue hover-text-blue-dark">
                        <Eye className="icon-xs" />
                      </button>
                      <button className="icon-btn text-green hover-text-green-dark">
                        <Mail className="icon-xs" />
                      </button>
                      <button className="icon-btn text-red hover-text-red-dark">
                        <Trash2 className="icon-xs" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="content-container">
      <div className="flex-between">
        <h1 className="section-title">Analytics Dashboard</h1>
        <div className="flex-items gap-3">
          <select className="select-input">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last year</option>
          </select>
        </div>
      </div>

      <div className="grid-4 gap-6">
        <div className="gradient-card gradient-blue">
          <div className="flex-between">
            <div>
              <p className="gradient-subtitle">Total Visits</p>
              <p className="gradient-value">{analytics.totalVisits.toLocaleString()}</p>
              <p className="gradient-subtitle">+12% from last month</p>
            </div>
            <BarChart3 className="icon-lg text-blue-light" />
          </div>
        </div>

        <div className="gradient-card gradient-green">
          <div className="flex-between">
            <div>
              <p className="gradient-subtitle">Total Leads</p>
              <p className="gradient-value">{analytics.totalLeads}</p>
              <p className="gradient-subtitle">+8% from last month</p>
            </div>
            <Target className="icon-lg text-green-light" />
          </div>
        </div>

        <div className="gradient-card gradient-purple">
          <div className="flex-between">
            <div>
              <p className="gradient-subtitle">New Signups</p>
              <p className="gradient-value">{analytics.totalSignups}</p>
              <p className="gradient-subtitle">+15% from last month</p>
            </div>
            <Users className="icon-lg text-purple-light" />
          </div>
        </div>

        <div className="gradient-card gradient-orange">
          <div className="flex-between">
            <div>
              <p className="gradient-subtitle">Conversion Rate</p>
              <p className="gradient-value">{analytics.conversionRate}%</p>
              <p className="gradient-subtitle">+0.3% from last month</p>
            </div>
            <BarChart3 className="icon-lg text-orange-light" />
          </div>
        </div>
      </div>

      <div className="grid-2 gap-6">
        <div className="card">
          <h3 className="card-title">Traffic Overview</h3>
          <div className="chart-placeholder">
            <p className="text-gray">Chart visualization would go here</p>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Lead Sources</h3>
          <div className="content-list">
            <div className="flex-between">
              <span className="text-gray-dark">Organic Search</span>
              <div className="flex-items gap-2">
                <div className="progress-bar">
                  <div className="progress-fill bg-blue w-75"></div>
                </div>
                <span className="text-sm font-medium">75%</span>
              </div>
            </div>
            <div className="flex-between">
              <span className="text-gray-dark">Social Media</span>
              <div className="flex-items gap-2">
                <div className="progress-bar">
                  <div className="progress-fill bg-green w-50"></div>
                </div>
                <span className="text-sm font-medium">50%</span>
              </div>
            </div>
            <div className="flex-between">
              <span className="text-gray-dark">Direct Traffic</span>
              <div className="flex-items gap-2">
                <div className="progress-bar">
                  <div className="progress-fill bg-purple w-33"></div>
                </div>
                <span className="text-sm font-medium">33%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="content-container">
      <div className="flex-between">
        <h1 className="section-title">Settings</h1>
      </div>

      <div className="grid-2 gap-6">
        <div className="card">
          <h3 className="card-title">
            <Shield className="icon-sm text-blue" />
            Role Management
          </h3>
          <div className="content-list">
            <div className="list-item">
              <div>
                <p className="item-title">Manager</p>
                <p className="item-subtitle">Full access to all features</p>
              </div>
              <button className="icon-btn text-blue hover-text-blue-dark">
                <Edit className="icon-xs" />
              </button>
            </div>
            <div className="list-item">
              <div>
                <p className="item-title">Editor</p>
                <p className="item-subtitle">Can create and edit content</p>
              </div>
              <button className="icon-btn text-blue hover-text-blue-dark">
                <Edit className="icon-xs" />
              </button>
            </div>
            <div className="list-item">
              <div>
                <p className="item-title">Viewer</p>
                <p className="item-subtitle">Read-only access</p>
              </div>
              <button className="icon-btn text-blue hover-text-blue-dark">
                <Edit className="icon-xs" />
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">
            <Settings className="icon-sm text-blue" />
            General Settings
          </h3>
          <div className="content-list">
            <div>
              <label className="input-label">Site Name</label>
              <input 
                type="text" 
                defaultValue="Admin Dashboard" 
                className="text-input"
              />
            </div>
            <div>
              <label className="input-label">Notification Email</label>
              <input 
                type="email" 
                defaultValue="admin@example.com" 
                className="text-input"
              />
            </div>
            <div className="flex-between">
              <span className="text-sm font-medium text-dark">Email Notifications</span>
              <button className="toggle-switch">
                <span className="toggle-slider"></span>
              </button>
            </div>
            <button className="btn btn-blue w-full">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'users':
        return renderUsers();
      case 'content':
        return renderContentManagement();
      case 'inquiries':
        return renderInquiries();
      case 'analytics':
        return renderAnalytics();
      case 'settings':
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="sidebar-header">
          <div className="flex-items gap-3">
            <div className="logo">
              <span className="logo-text">A</span>
            </div>
            {sidebarOpen && <span className="sidebar-title">Admin Panel</span>}
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-list">
            {menuItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`nav-item ${activeTab === item.id ? 'nav-item-active' : ''}`}
                >
                  <Icon className="icon-sm" />
                  {sidebarOpen && <span className="nav-label">{item.label}</span>}
                </button>
              );
            })}
          </div>
        </nav>

        <div className="sidebar-footer">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="toggle-btn"
          >
            {sidebarOpen ? <X className="icon-sm" /> : <Menu className="icon-sm" />}
          </button>
          {sidebarOpen && (
            <button className="logout-btn">
              <LogOut className="icon-sm" />
              <span className="nav-label">Logout</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <main className="main-area">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;