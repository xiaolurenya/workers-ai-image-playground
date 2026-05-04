import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const password = process.env.AUTH_PASSWORD || 'Liwenfei@43'
  const authCookie = request.cookies.get('auth_token')
  const token = Buffer.from(password).toString('base64')
  
  // 公开路径
  const publicPaths = ['/login', '/api/models', '/_next', '/favicon']
  const pathname = request.nextUrl.pathname
  
  if (publicPaths.some(p => pathname.startsWith(p))) {
    return NextResponse.next()
  }
  
  // API路径需要auth
  if (pathname.startsWith('/api/')) {
    if (authCookie?.value !== token) {
      return new NextResponse('Unauthorized', { status: 401 })
    }
  }
  
  // 静态资源和_next不需要验证
  if (pathname.startsWith('/_next') || pathname.includes('.')) {
    return NextResponse.next()
  }
  
  // 检查登录状态
  if (authCookie?.value !== token) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}
