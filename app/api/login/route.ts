import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

export async function POST(request: Request) {
  const formData = await request.formData()
  const password = formData.get('password') as string
  const correctPassword = process.env.AUTH_PASSWORD || 'Liwenfei@43'
  
  if (password === correctPassword) {
    const token = Buffer.from(correctPassword).toString('base64')
    const response = NextResponse.redirect(new URL('/', request.url))
    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })
    return response
  } else {
    return new NextResponse('密码错误', { status: 401 })
  }
}
