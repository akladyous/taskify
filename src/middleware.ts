import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware

// afterAuth: () => {
//     console.log('afterAuth');
//   },

export default authMiddleware({
  publicRoutes: ['/', '/signin', '/signup', '/api/webhook(.*)', '/api/prova'],

  afterAuth(auth, req, evt) {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
