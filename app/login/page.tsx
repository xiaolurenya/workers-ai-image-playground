import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default function LoginPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <form
        action="/api/login"
        method="POST"
        style={{
          backgroundColor: '#1a1a1a',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          width: '360px',
          textAlign: 'center'
        }}
      >
        <h1 style={{ color: '#fff', marginBottom: '8px', fontSize: '24px' }}>🔐</h1>
        <h2 style={{ color: '#fff', marginBottom: '24px', fontSize: '20px' }}>小路人文生图</h2>
        <p style={{ color: '#888', marginBottom: '20px', fontSize: '14px' }}>输入密码访问</p>
        <input
          type="password"
          name="password"
          placeholder="请输入访问密码"
          required
          style={{
            width: '100%',
            padding: '12px 16px',
            marginBottom: '16px',
            borderRadius: '8px',
            border: '1px solid #333',
            backgroundColor: '#0a0a0a',
            color: '#fff',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#3b82f6',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          进入
        </button>
      </form>
    </div>
  )
}
