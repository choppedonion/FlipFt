import { HttpInterceptorFn } from '@angular/common/http';

export const authHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  const token = "7167251a-6c3e-46a1-ad50-38c965d029ec";

  const modifiedReq = req.clone({
    setHeaders: {
      "pe-nom-application":"FlipFt",
      "pe-id-correlation":"45",
      "pe-id-utilisateur":"test",
      "TypeAuth":"/agent",
      "Authorization": `Bearer ${token}`
    }
  });

  return next(modifiedReq);
};
